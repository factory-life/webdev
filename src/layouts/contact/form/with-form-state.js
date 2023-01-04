import { useCallback, useState } from "react";
import {withHandleRequest} from "components/util/requests";

const formatData = data => {
  return {
    name: data.name,
    surname: data.surname,
    email: data.email,
    mobile: data.mobile,
    message: `${data.message}`
  };
};

const withSubmitSave = Component => ({
 handleRequest, loading, ...props
}) => {
  const [ sendState, setSendState ] = useState(null);

  const onSubmit = useCallback( data => {
    return;

    handleRequest({
      method: 'POST',
      data: formatData(data),
      url: '/api/contact',
      setSuccess: () => setSendState('success'),
      setError: data => setSendState(data),
      setInvalid: () => console.log('invalid?')
    });
  }, [ handleRequest, setSendState ]);

  return Component({
    ...props,
    sendState,
    onSubmit,
    loadingSubmit: loading
  });
};

export default Component => withHandleRequest(withSubmitSave(Component));