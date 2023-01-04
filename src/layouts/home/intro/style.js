import styled, {css} from 'styled-components';

import colors from "styles/colors";
import introSrc from './intro.png';
import {BigHeading, Paragraph} from "styles/typography";
import Svg from "react-inlinesvg";
import GraphicSrc from "./graphic.svg";
import {ResponsiveContainer} from "styles/elements";
import { BsCaretDownFill } from 'react-icons/bs';

export const Container = styled.div`
  background: url("${introSrc.src}") center center no-repeat ${colors.darkGrey};
  background-size: cover;
  position: relative;
`;

export const ContainerInner = styled(ResponsiveContainer)`
  padding: 200px 0;
  position: relative;

  @media(max-width: 768px) {
    padding: 150px 25px 50px 25px;
  }
`;

export const Heading = styled(BigHeading)`
  @media(max-width: 768px) {
    font-size: 48px;
    letter-spacing: 2px;
    font-weight: 600;
  }
`;

export const SubHeading = styled.h3`
  font-size: 39px;
  font-weight: 500;
  letter-spacing: 3.51px;
  text-transform: uppercase;
  color: ${colors.pink};
  line-height: 40px;
  
  @media(max-width: 768px) {
    font-size: 24px;
    letter-spacing: 2px;
  }

  @media(max-width: 400px) {
    font-size: 22px;
    letter-spacing: 1px;
  }
`;

export const Graphic = styled(({ className }) => <Svg className={className} src={GraphicSrc.src} />)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 750px;
  height: auto;
  transform: translateX(-30%) translateY(-50%);
  z-index: 0;
  
  @media(max-width: 768px) {
    width: 240px;
    transform: translateX(-10%) translateY(-30%);
    opacity: 0.3;
  }
`;

export const Content = styled.div`
  position: relative;
  padding-left: 120px;

  @media(max-width: 768px) {
    padding-left: 0;
  }
`;

export const Overlay = styled.div`
  background: radial-gradient(rgba(50,50,50,0.1), rgba(25,25,25,0.9));
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  
  @media(max-width: 768px) {
    background: radial-gradient(rgba(60,60,60,0.2), rgba(10,10,10,1));
  }
`;

export const Follow = styled.div`
  border-radius: 15px;
  padding: 20px 40px;
  color: ${colors.white};
  background: ${colors.orange};
  display: flex;
  justify-content: space-between;
  width: 500px;
  position: absolute;
  top: 15px;
  right: 0;
  line-height: 30px;
  
  @media(max-width: 768px) {
    width: 300px;
    padding: 10px 10px 10px 20px;
    line-height: 20px;
  }
`;

export const Label = styled.h5`
  margin: 0;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  flex: 0 0 auto;
  letter-spacing: 1.8px;
  color: ${colors.white};

  @media(max-width: 768px) {
    font-size: 16px;
  }
`;

export const ShareLinks = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  line-height: 30px;
`;

export const ShareLink = styled.a`
  display: block;
  padding: 0 10px;
  vertical-align: middle;
  
  @media(max-width: 768px) {
    padding: 0 7px;
  }
  
  svg {
    path {
      transition: all 0.3s ease-in-out;
    }
  }
  
  &:hover {
    svg {
      path {fill: ${colors.darkGrey} !important;}
    }
  }
`;

export const Icon = styled(({ className, src }) => <Svg className={className} src={src} />)`
  max-width: 30px;
  max-height: 30px;
  display: block;
  vertical-align: middle;

  @media(max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const DownBtn = styled.button`
  display: block;
  position: absolute;
  left: 50%;
  bottom: 15px;
  background: transparent;
  border: none;
  outline: none;
  color: ${colors.white};
  transform: translateX(-50%) translateY(-50%);
  
  &:active, &:focus, &:hover, &:active:focus {
    border: none;
    background: transparent;
    outline: none;
  }
`;

export const DownArrow = styled(({ className }) => <BsCaretDownFill className={className} />)`
  display: block;
  color: ${colors.white};
  height: 20px;
  width: 20px;
`;
