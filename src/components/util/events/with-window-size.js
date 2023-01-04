import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

const withWindowSize = Component => props => {
  const isFe = typeof window !== 'undefined';
  const [ width, setWidth ] = useState(!!isFe ? document.documentElement.clientWidth : 1400);
  const [ height, setHeight ] = useState(!!isFe ? document.documentElement.clientHeight : 900);

  const handler = useCallback(
    debounce(() => {
      // Update coordinates
      setWidth(document.documentElement.clientWidth);
      setHeight(document.documentElement.clientHeight);
    }, 1000),

    [debounce, setWidth, setHeight, isFe]
  );

  useEffect(() => {
    // only execute all the code below in client side
    if (!!isFe) {
      // Add event listener
      window.addEventListener("resize", handler);

      // Call handler right away so state gets updated with initial window size
      handler();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handler);
    }
  }, [isFe, handler]); // Empty array ensures that effect is only run on mount

  return Component({
    ...props,
    windowWidth: width,
    windowHeight: height
  });
};

export default withWindowSize;