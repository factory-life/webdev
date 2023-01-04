import React, { useContext } from 'react';
import { Logo, HeaderContainer } from './style';
import { Header as GrommetHeader, ResponsiveContext } from 'grommet';
// import {} from 'react-icons';
import SmallScreen from './small';
import LargeScreen from './large';
import { DeviceContext } from "contexts/device";

const navItems = [
  {
    label: 'About',
    href: '#about',
    color: '#FFF',
  },
  {
    label: 'Podcasts & Vodcasts',
    href: '#podcasts-vodcasts',
    color: '#FFF',
  },
  {
    label: 'Media Training',
    href: '#media-training',
    color: '#FFF',
  },
  {
    label: 'Partners',
    href: '#partners',
    color: '#FFF',
  },
  {
    label: 'Contact',
    href: '#contact',
    color: '#FFF',
  },
];

const HeaderFull = () => {
  // const size = React.useContext(ResponsiveContext);
  const { isMobile } = useContext(DeviceContext);

  return (
    <GrommetHeader flex={false} background={'linear-gradient(74deg, #c7246b 8%, #7b117a 51%)'}>
      <HeaderContainer>
        <Logo />
        {!!isMobile ? <SmallScreen navItems={navItems} /> : <LargeScreen navItems={navItems} />}
      </HeaderContainer>
    </GrommetHeader>
  );
}

export default HeaderFull;