import styled, {css, keyframes} from 'styled-components';
import {
  Emphasis,
  Heading,
  Paragraph as ParagraphStyles,
  shapeWithExtraRight
} from "styles/typography";
import colors from "styles/colors";
import { BsCaretLeftFill, BsCaretRightFill, BsPlayFill } from 'react-icons/bs';
import {ResponsiveContainer} from "styles/elements";
import Svg from 'react-inlinesvg';
import VideoPlaySrc from '../new-episodes/play.svg';

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  position: relative;
  
  @media(max-width: 768px) {
    
  } 
`;

export const Title = styled.h6`
  color: ${colors.darkGrey};
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 15px;
  
  @media(max-width: 768px) {
    font-size: 24px;
  }
`;

export const MainTitle = styled(Heading)`
  color: ${colors.darkGrey};
  padding: 70px 0;
  margin: 0;
  
  @media(max-width: 768px) {
    padding: 40px 0; 
  }
`;

export const Copy = styled.div`
  font-size: 24px;
  font-weight: 300;
  line-height: 32px;

  color: ${colors.darkGrey};
  
  @media(max-width: 991px) {
    font-size: 18px;
    line-height: 26px;
  }`;

export const Thumb = styled.div`
  background: ${colors.darkGrey};
  width: 140px;
  height: 140px;
  display: block;
  content: '';
  border-radius: 50%;
  flex: 0 0 140px;
  display: none;
  
  @media(max-width: 768px) {
    
  }
`;

export const Content = styled.div`
  padding-left: 30px;
`;

export const Slider = styled.div`
  background: ${colors.lightGrey};
  padding: 100px 0;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 991px) {
    padding: 70px 0;
  }
  @media(max-width: 400px) {
    padding:50px 0 30px 0;
  }
`;

export const SliderInner = styled.div`
  max-width: 1300px;
  position: relative;
  margin: 0 auto;
  padding: 0 120px;
  min-height: 230px;

  @media(max-width: 1300px) {
    max-width: 100%;
    padding: 0 90px;
  }

  @media(max-width: 991px) {
    min-height: 300px;
    padding: 0 80px;
  }

  @media(max-width: 400px) {
    padding: 0 40px;
    min-height: 400px;
  }
`;

const show = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Slide = styled.div`
  position: relative;
  transition: all 0.3s ease-in-out;
  animation: ${show} 0.3s linear;  
`;

export const SlideInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowLeft = styled(BsCaretLeftFill)`
  height: 100%;
  width: 100%;
  display: block;
`;

export const ArrowRight = styled(BsCaretRightFill)`
  height: 100%;
  width: 100%;
  display: block;
`;

export const ArrowLeftBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 30px;
  color: ${colors.pink};
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  display: block;
  cursor: pointer;

  @media(max-width: 400px) {
    left: 15px;
  }
`;

export const ArrowRightBtn = styled(ArrowLeftBtn)`
  right: 30px;
  left: auto;

  @media(max-width: 400px) {
    right: 15px;
  }
`;

