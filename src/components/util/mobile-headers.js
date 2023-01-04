import { withUserAgent } from 'next-useragent';
import { useContext, useEffect } from "react";
import { DeviceContext } from "contexts/device";

const withParsedProps = Component => props => {
  const { isMobile, setIsMobile } = useContext(DeviceContext);

  const { ua, ...rest } = props;

  useEffect(() => {
    const isMobileNew = !!ua && "isMobile" in ua ? ua.isMobile : null;
    setIsMobile(isMobileNew);
  }, [ setIsMobile, ua ]);

  return Component({
    ...rest,
    isMobile
  });
};

const withPageSsrLogic = Component => withUserAgent(
  withParsedProps(
    Component
  )
);

export default withPageSsrLogic;

export const withPageProps = context => {
  return {
    props: {
      uaString: context.req.headers['user-agent']
    }
  };
};