import React, { useCallback, useContext, useState } from 'react';
import axios from "axios";
import { baseHeaders } from './request-helpers';

const handleRequest = (user, setLoading) =>
  ({ url, data = {}, setSuccess, setError = null, method = 'GET' }) => {
    setLoading(true);

    const headers = {
      ...baseHeaders
    };

    const { token = null } = user || {};

    if (token) {
      headers["Authorization"] = `bearer ${token}`;
    }

    axios({
      headers,
      method,
      url,
      data
    }).catch(errorRes => {
      if (errorRes && errorRes.response) {
        if ([400, 401, 402, 403, 404, 412].indexOf(errorRes.response.status) !== -1) {
          if (setError !== null) {
            setError(errorRes.response.data, errorRes.response.status);
          }
        } else if(errorRes.response.status === 500) {
          setError('Server unresponsive. Try again later.');
        } else {
          setError('Unexpected error.');
        }
      } else {
        if (setError !== null) {
          setError('Unknown error.');
        }
      }
    }).then(res => {
      if(res && (res.status === 201 || res.status === 200 || res.status === 202)) {
        setSuccess(res.data, res.status);
      }
    }).finally(res => {
      setLoading(false);
    });
  };

// eslint-disable-next-line react-hooks/exhaustive-deps
export const withHandleRequest = Component => props => {
  const [ loading, setLoading ] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const doRequest = useCallback(handleRequest({}, setLoading), []);

  return (
    <Component
      {...props}
      handleRequest={doRequest}
      loading={loading}
    />
  );
};
