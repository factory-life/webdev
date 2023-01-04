import React, { useState } from 'react';

export const DeviceContext = React.createContext({
  isMobile: false,
  setIsMobile: () => {}
});

const DeviceContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <DeviceContext.Provider value={{
      isMobile,
      setIsMobile
    }}>{children}</DeviceContext.Provider>
  );
};

export default DeviceContextProvider;