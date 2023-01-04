import React, { useEffect } from 'react';
import {BaseStyles, ResetStyle} from './style';

import HttpsRedirect from 'react-https-redirect';

import Head from "next/head";
import { isProdRequest } from "components/util/simple";

import WindowSizeContextProvider from "contexts/frame-size";
import ThemeHandler from './theme-handler';
import DeviceContextProvider from "contexts/device";

// Social stuff
// import { useRouter } from "next/router";
// import { handleAnalyticsRouteChange, trackFbPageview } from './analytics';

const AppWithContext = ({ children }) => {
  return (
    <WindowSizeContextProvider>
      <DeviceContextProvider>
          {children}
      </DeviceContextProvider>
    </WindowSizeContextProvider>
  );
};

const App = ({ Component, pageProps }) => {
  // Analytics stuff

  /*
  const router = useRouter();
  const isFe = typeof window !== 'undefined';
  useEffect(() => {
    if(!!isFe && process.env.NODE_ENV === 'production') {
      // Only on first page load.
      trackFbPageview();

      router.events.on('routeChangeComplete', handleAnalyticsRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleAnalyticsRouteChange);
      }
    }
  }, [router.events]);
  */

  return (
    <HttpsRedirect disabled={!isProdRequest()}>
      <Head>
        <title>NextJS App Template</title>
        <meta charSet="utf-8" key='charset' />
        {/*<link rel="shortcut icon" href="/favicon.png"/>*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#333"/>
        <link rel="manifest" href="/manifest.json"/>
        {/*<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>*/}
        {/*<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>*/}
        {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>*/}
        {/*<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>*/}
        {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>*/}
        <meta name="msapplication-TileColor" content="#333"/>
        <link
            key="google-fonts"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
        {/*<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>*/}
        <meta name="theme-color" content="#333"/>
      </Head>
      <React.Fragment>
        <ResetStyle />
        <BaseStyles />
        <AppWithContext>
          <ThemeHandler>
            <Component {...pageProps} />
          </ThemeHandler>
        </AppWithContext>
      </React.Fragment>
    </HttpsRedirect>
  );
};

// const AppWithOneCode = withGA("", Router)(App);
// const AppWithBoth = withGA("", Router)(AppWithOneCode);

// export default AppWithBoth;

export default App;