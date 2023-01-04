import customColors from 'styles/colors';

const customTheme = {
  global: {
    colors: customColors,
    breakpoints: {
      xsmall: {
        value: 375,
      },
      small: {
        value: 568,
        edgeSize: {
          none: '0px',
          small: '6px',
          medium: '12px',
          large: '24px',
        },
      },
      medium: {
        value: 768,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
      large: {
        value: 1024,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
      },
      xlarge: {
        value: 1366,
        edgeSize: {
          none: '0px',
          small: '12px',
          medium: '24px',
          large: '48px',
        },
        size: {
          xxsmall: '24px',
          xsmall: '48px',
          small: '96px',
          medium: '192px',
          large: '384px',
          xlarge: '768px',
          full: '100%',
        },
      },
    },
  },
};
export default customTheme;