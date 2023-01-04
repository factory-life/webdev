import { baseHeaders } from "./request-helpers";
import { isEqual } from "lodash";
// import useAxios from 'axios-hooks';
import useFetch from 'react-fetch-hook';
import { useCallback, useEffect, useState } from "react";
import createTrigger from "react-use-trigger";
import useTrigger from "react-use-trigger/useTrigger";

const requestTrigger = createTrigger();

const withApiRequest = Component => ({
  headers = {}, url, method = 'GET', postData = {}, triggerOnLoad = true, ...props
}) => {
  const [finalHeaders] = useState({
    ...baseHeaders,
    ...headers
  });

  // useEffect(() => {
  //   setFinalData(['POST', 'PUT'].indexOf(method) !== -1 && !isEqual(postData, {}) ? JSON.stringify(postData) : null);
  // }, [ postData ]);

  // const [{ response, data: json, loading, error }, execute] = useAxios({ // config
  //   manual: !!activeUrl && !triggerOnLoad,
  //   headers: finalHeaders,
  //   method,
  //   // ssr: true,
  //   url,
  //   // autoCancel: true,
  //   data: finalData
  // });

  // const { post, response, loading, error } = useFetch(url, {
  //   // body: JSON.stringify(data),
  //   // data,
  //   headers: finalHeaders
  // });

  const requestTriggerValue = useTrigger(requestTrigger);
  const finalTrigger = url ? requestTriggerValue : null;

  const { isLoading, data: response, error } = useFetch(url, {
    // body: JSON.stringify(data),
    data: postData,
    formatter: async (response) => {
      return {
        json: await response.json(),
        status: response.status,
        statusText: response.statusText,
      }
    },
    headers: finalHeaders,
    method,
    depends: [finalTrigger]
  });

  // const { data, mutate, error } = useSWR(url, { refreshInterval: !!refresh ? 60000 : 0 });

  const { json, status, statusText } = response || {};

  const refreshProper = useCallback(() => {
    requestTrigger();
  }, [ ]);

  return Component({
    refresh: refreshProper,
    loading: isLoading,
    data: json,
    errorMessage: error,
    statusCode: status,
    error,
    ok: (statusText === "OK"),
    ...props
  });
};

export default withApiRequest;