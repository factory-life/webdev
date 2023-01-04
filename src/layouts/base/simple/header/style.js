import styled from "styled-components";
import Svg from 'react-inlinesvg';
import {Menu as MenuIconBase} from "grommet-icons/icons";

import logoSrc from './logo-new.svg';

// import logoSrc from './logo.png';
// import logo2xSrc from './logo@2x.png';
// import logo3xSrc from './logo@3x.png';

import { Anchor } from 'grommet';

import { ScreenReaderText } from 'styles/typography';

import NextLink from 'layouts/elements/link';
import {useRouter} from "next/router";
import colors from "styles/colors";
import {ResponsiveContainer} from "styles/elements";

export const Title = styled.h1`
  padding: 0;
  margin: 0;
`;

export const HeaderContainer = styled(ResponsiveContainer)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  
  & > a {
    box-shadow: none;
  }
  
  @media(max-width: 768px) {
    
  }
`;

export const Link = styled(NextLink)`
  display: inline-block;
`;

const Img = styled.img`
  width: 350px;
  height: auto;
  display: block;
  transform: translateZ(0);
  image-rendering: -webkit-optimize-contrast;

  @media(max-width: 1600px) {
    width: 250px;
  }
  @media(max-width: 768px) {
   
  }
`;

export const Logo = () => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <Anchor
      href="/"
      margin={'small'}
      title={isHome ? 'Jane Dutton Network' : 'Go home'}
      icon={
        <Img
          // srcSet={
          //   `${logoSrc.src} 480w, ${logo2xSrc.src} 800w`
          // }
          // sizes="(max-width: 600px) 480px, 800px"
          src={logoSrc.src}
          alt="Jane Dutton Network"
        />
      }
      // label={isHome ? 'Jane Dutton Network' : 'Go home'}
    />
  );
};

export const RightContent = styled.ul`
  display: block;
  flex: 1 0 auto;
  list-style: none;
  text-align: right;
`;

export const NavItem = styled.li`
  display: inline-block;
  
  & > a {
    display: inline-block;
    padding: 15px;
    color: ${colors.white};
    outline: none;
    border: none;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
      color: ${colors.white};
      transform: scale(1.1);
    }
  }
`;

export const SmallContainer = styled.div`
  padding-right: 15px;
`;

export const MenuIcon = styled(MenuIconBase)`
  width: 40px;
  height: 40px;
`;

export const MenuItem = styled.div`
  padding: 15px 30px;
  cursor: pointer;
  color: #FFF;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  white-space: nowrap;
  min-width: 100%;
`;
