import styled, {css} from 'styled-components';

import colors from "styles/colors";

import VideoPlaySrc from './play.svg';

import Svg from "react-inlinesvg";

import { BsPlayFill } from 'react-icons/bs';
import {ResponsiveContainer} from "styles/elements";

import {
  Emphasis,
  Heading,
  Paragraph as ParagraphStyles,
  shapeWithExtraRight
} from "styles/typography";

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  
  @media(max-width: 768px) {
    margin: 0 auto;
  } 
`;

export const Thin = styled.em`
  font-weight: 200;
  font-style: normal;
`;

export const Title = styled(Heading)`
  color: ${colors.darkGrey};
`;

export const Tag = styled.div`
  ${shapeWithExtraRight};
  
  letter-spacing: 0;
  background: ${colors.orange};
  display: inline-block;
  font-size: 34px;
  line-height: 60px;
  position: absolute;
  left: -2px;
  bottom: 85px;

  @media(max-width: 768px) {
    bottom: 100px;
    line-height: 40px;
  }
  
  &:after {
    background: ${colors.orange};
  }

  span {
    font-size: 28px;
    color: ${colors.white};
    display: inline-block;
    transform: translateY(-10px);
    
    @media(max-width: 768px) {
      font-size: 18px;
      transform: translateY(-5px);
    }
  }
`;

export const Blocks = styled.div`
  display: flex;
  justify-content: center;
  
  & > div:last-of-type {
    margin-right: 0;
  }
  & > div:first-of-type {
    margin-left: 0;
  }
  
  @media(max-width: 991px) {
    display: block;
  }
`;

export const BlockInnerBase = styled.div`
  position: relative; 
  background-color: ${colors.pink};
  padding: 45px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  ${props => props.src && css`
    background-image: url("${props.src}");
  `}
`;

export const BlockInner = styled(BlockInnerBase)`
  background-color: ${colors.darkGrey};
`;

export const VideoIcon = styled(({ className }) => <Svg className={className} src={VideoPlaySrc.src} />)`
  color: ${colors.white};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100px;
  height: 100px;
  
  #arrow {
    fill: ${colors.white};
  }
  
  #circle {
    stroke: ${colors.white};
  }

  @media(max-width: 991px) {
    width: 50px;
    height: 50px;
  }
`;

export const BlockTitle = styled.div`
  margin: 0;
  flex: 0 1 100%;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  color: ${colors.white};
  position: relative;

  @media(max-width: 991px) {
    
  }
`;

export const BlockTitleShrink = styled(BlockTitle)`
  display: inline-block;
  width: auto;
  flex: 0 1 auto;
`;

export const Block = styled.div`
  display: block;
  box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  height: 760px;
  flex: 0 0 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    ${BlockTitle}, ${BlockTitleShrink}, ${VideoIcon} {
      color: ${colors.pink};
      transition: all 0.3s ease-in-out;

      #arrow, #circle {
        transition: all 0.3s ease-in-out;
        fill: ${colors.pink};
        stroke: ${colors.pink};
      }
    }
  }
  
  @media(max-width: 991px) {
    max-width: 100%;
    height: 400px;
    width: 100%;
  }
  
  &:hover {
    text-decoration: none;
  }
`;

export const SmallTitle = styled.em`
  display: block;
  text-align: center;
  font-size: 32px;
  font-weight: 200;
  letter-spacing: 24px;
  font-style: normal; 
  margin: 0;
  
  @media(max-width: 991px) {
    font-size: 18px;
    letter-spacing: 10px;
  }
`;

export const MedTitle = styled.em`
  display: block;
  text-align: left;
  font-size: 60px;
  font-weight: 200;
  font-style: normal;
  position: absolute;
  bottom: 100%;
  left: 0;
  
  @media(max-width: 991px) {
    font-size: 40px;
  }
`;

export const Big = styled.div`
  font-weight: 600;
  font-size: 120px;
  line-height: 100px;
  letter-spacing: 1.54px; 
    
  @media(max-width: 1800px) {
    font-size: 90px;
    line-height: 80px;
  }

  @media(max-width: 1300px) {
    font-size: 75px;
    line-height: 60px;
  }

  @media(max-width: 991px) {
    font-size: 40px;
    line-height: 35px;
    letter-spacing: normal;
  }
`;

// export const Icon = styled(BsPlayFill)`
//   color: ${colors.white};
//   fill: ${colors.white};
//   bottom: 50%;
//   left: 50%;
//   transform: translateX(-50%) translateY(-50%);
//   width: 40px;
//   height: 40px;
// `;

export const ComingSoon = styled.div`
  ${Emphasis};
  margin: 0;
  line-height: 1;
  text-align: left;
`;

export const MainTitle = styled.h4`
  
`;

export {
  
};