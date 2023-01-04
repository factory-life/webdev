import React from 'react';
import { withWindowSize } from 'components/util/events';

export const WindowSizeContext = React.createContext({
  windowWidth: 0,
  windowHeight: 0
});

const WindowSizeContextProvider = ({ children, windowWidth, windowHeight }) => {
  return (
    <WindowSizeContext.Provider value={{
      windowWidth,
      windowHeight
    }}>{children}</WindowSizeContext.Provider>
  );
};

export default withWindowSize(WindowSizeContextProvider);
