import {Box, Menu} from "grommet";
import { useRouter } from "next/router";
import { useCallback } from "react";

import { SmallContainer, MenuIcon, MenuItem} from './style';

const Small = ({ navItems }) => {
  const { push } = useRouter();

  const onClick = useCallback(href => (e) => {
    e.preventDefault();
    const anchor = document.querySelector(href);
    anchor.scrollIntoView(true);
    return true;
    
    // document.getElementById(href.substr(1)).scrollIntoView();
    // push(href, href, {shallow: true});
    // document.getElementById(item.href.substr(1)). scrollTo(0, 0);
  }, []);

  return (
    <SmallContainer>
      <Menu
        a11yTitle="Navigation Menu"
        dropProps={{align: {top: 'bottom', right: 'right'}}}
        dropBackground={'orange'}
        color={'#FFF'}
        icon={<MenuIcon color="white" width={40} height={70} />}
        items={navItems.map((item, i) => {
          return {
            ...item,
            label: <MenuItem>{item.label}</MenuItem>,
            onClick: onClick(item.href)
          };
        })}
      />
    </SmallContainer>
  )
};

export default Small;