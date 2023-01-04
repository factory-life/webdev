import ReactGA from "react-ga";
// import ReactPixel from 'react-facebook-pixel';

export const standardOptions = { debug: process.env.NODE_ENV !== 'production', alwaysSendToDefaultTracker: false };

ReactGA.initialize(
  [
    {
      trackingId: process.env.NEXT_PUBLIC_ANALYTICS,
      gaOptions: { name: 'tracker1' }
    },
    {
      trackingId: process.env.NEXT_PUBLIC_ANALYTICS_2,
      gaOptions: { name: 'tracker2' }
    }
  ],
  standardOptions
);

const trackGa = (url, options = {}) => {
  ReactGA.set({
    url,
    ...options,
  }, ['tracker1']);

  ReactGA.set({
    url,
    ...options,
  }, ['tracker2']);

  ReactGA.pageview(url, ['tracker1']);
  ReactGA.pageview(url, ['tracker2']);
};

// const trackFacebook = () => {
//   const advancedMatching = {  }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
//
//   const fbOptions = {
//     autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
//     debug:(process.env.NODE_ENV !== 'production'), // enable logs
//   };
//
//   ReactPixel.init(process.env.NEXT_PUBLIC_FB_PIXEL, advancedMatching, fbOptions);
//   ReactPixel.pageView();
// }

export const trackFbPageview = () => {
  window.fbq('track', 'PageView');
};

export const trackFbEvent = (name, options = {}) => {
  window.fbq('track', name, options);
};

export const handleAnalyticsRouteChange = (url, { shallow }) => {
  trackGa(url);

  // Facebook
  // trackFacebook(url, shallow);
  trackFbPageview();

  console.log(
    `URL is changing to ${url} ${
      shallow ? 'with' : 'without'
    } shallow routing`
  );
};