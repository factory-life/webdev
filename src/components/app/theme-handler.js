import React from "react";
import { Grommet } from "grommet";
import { base } from "grommet/themes";
import theme from './theme';

const themeFinal = {
  ...base,
  ...theme
};

const ThemeHandler = ({ children }) => {
  return (
    <Grommet theme={themeFinal} full className='grommetLayout'>
      {children}
    </Grommet>
  );
};

export default ThemeHandler;