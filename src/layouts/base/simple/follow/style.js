import styled from 'styled-components';
import colors from "styles/colors";
import Svg from "react-inlinesvg";
import React from "react";

import {SmallHeading as SmallHeadingBase} from "styles/typography";

export const Container = styled.div`
  color: ${colors.darkGrey};
`;

export const Item = styled.li`
  display: inline-block;
`;

export const SocialLinks = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 60px 0;
  
  @media(max-width: 1600px) {
    justify-content: flex-start;
  }
`;

export const AltLinks = styled.ul`
  list-style-type: none;
  
  a {
    font-size: 22px;
    font-weight: 400;
    color: ${colors.white};
    text-decoration: none;
    text-transform: uppercase;
    padding: 5px;
    letter-spacing: 1.89px;
    
    &:hover {
      text-decoration: none;
      color: ${colors.pink};
    }

    @media(max-width: 768px) {
      font-size: 18px;
    }

    @media(max-width: 600px) {
      font-size: 16px;
    }
    
    @media(max-width: 460px) {
      font-size: 14px;
    }
    
    @media(max-width: 380px) {
      font-size: 12px;
    }
  }
  
  ${Item} {
    margin-right: 40px;

    @media(max-width: 1600px) {
      margin-right: 20px;
    }
    
    @media(max-width: 768px) {
      margin-right: 10px;
    }
    
    @media(max-width: 600px) {
      margin-right: 5px;
    }
  }
  
  & > ${Item}:last-of-type {
    margin-right: 0 !important;
  }
`;

export const IconLink = styled.a`
  display: inline-block;
  text-decoration: none;
  
  @media(max-width: 1600px) {
    margin: 0 15px;
  }
  
  @media(max-width: 768px) {
    margin: 0 25px 0 0;
  }
  
  svg {
    transition: all 0.3s ease-in-out;
    height: auto;
    display: inline-block;
    max-width:65px;
    
    path {
      transition: all 0.2s ease-in-out;
    }

    @media(max-width: 1600px) {
      max-width: 40px;
      max-height: 40px;
    }
  }
  
  &:hover {
    svg path {
      fill: ${colors.pink} !important;
    }
  }
`;

export const SmallHeading = styled(SmallHeadingBase)`
  color: ${colors.white};
`;

export const Icon = ({ className, href, src }) => (
  <IconLink className={className} href={href}>
    <Svg uniquifyIDs src={src.src} />
  </IconLink>
);