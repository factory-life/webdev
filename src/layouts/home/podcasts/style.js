import styled, {css, keyframes} from 'styled-components';
import {
  Emphasis,
  Heading,
  Paragraph as ParagraphStyles,
  shapeWithExtraRight
} from "styles/typography";
import colors from "styles/colors";
import { BsPlayFill } from 'react-icons/bs';
import {ResponsiveContainer} from "styles/elements";
import Svg from 'react-inlinesvg';
import VideoPlaySrc from '../new-episodes/play.svg';

export const Container = styled.div`
  text-align: center;
  margin: 80px auto;
  overflow: hidden;

  @media(max-width: 991px) {
    margin: 40px 15px;
  } 
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

  @media(max-width: 991px) {
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
  margin-right: -200px;
  overflow: hidden;
  
  & > div:last-of-type {
    margin-right: 0;
  }
  & > div:first-of-type {
    margin-left: 0;
  }
  
  @media(max-width: 991px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;

export const Bottom = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.darkGrey};
  padding: 20px;
  position: absolute;
  transition: all 0.3s ease-in-out;
`;

export const Block = styled.div`
  display: block;
  box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  position: relative;
  width: 650px;
  height: 520px;
  text-transform: uppercase;
  border-radius: 22px;
  margin: 0 30px;
  transition: all 0.3s ease-in-out;
  
  @media(max-width: 991px) {
    max-width: 100%;
    height: 450px;
    margin: 0 0 25px 0;
    box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.16);
  }
  
  @media(min-width: 992px) {
    
  }
`;

export const BlockInner = styled.div`
  position: relative;
  background-color: ${colors.pink};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 100px;
  
  ${props => props.src && css`
    background-image: url("${props.src}");
  `}
`;

export const Thin = styled.em`
  font-weight: 300;
  font-style: normal;
`;

export const Big = styled.span`
  font-weight: 300;
  font-size: 60px;
  line-height: 70px;
  font-weight: 600;
`;

export const BlockTitle = styled.h4`
  margin: 0;
  letter-spacing: 1.54px; 
  flex: 0 1 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  color: ${colors.white};
  position: relative;
  
  span {
    display: block;
  }

  @media(max-width: 1800px) {
    font-size: 90px;
  }

  @media(max-width: 768px) {
    font-size: 18px;
  }
`;

export const BlockTitleShrink = styled(BlockTitle)`
  display: inline-block;
  width: auto;
  flex: 0 1 auto;
`;


export const BlockTitleBottom = styled.button`
  ${ParagraphStyles}
  margin: 0;
  letter-spacing: 1.54px;
  text-align: left;
  display: block;
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  svg {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: ${colors.pink};

    svg {
      fill: ${colors.pink}
    }
  }

  &:disabled:hover {
    color: ${colors.white} !important;
    cursor: inherit;
    
  }
`;

export const SmallTitle = styled.em`
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 12px;
  font-style: normal; 
  margin: -10px 0 -20px 0;
`;

export const MedTitle = styled.em`
  display: block;
  text-align: left;
  font-size: 30px;
  font-weight: 300;
  font-style: normal;
  line-height: 24px;
  position: absolute;
  left: 0;
  bottom: 100%;
`;

export const PodcastMedTitle = styled(MedTitle)`

`;

export const Icon = styled(BsPlayFill)`
  color: ${colors.white};
  fill: ${colors.white};
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
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
`;

export const ComingSoon = styled.div`
  ${Emphasis};
  margin: 0;
  line-height: 1;
  text-align: left;
`;

export const BlockComingSoon = styled(Block)`
  opacity: 0.7;

  ${Bottom} {
    opacity: 1 !important;
  }

  &:hover {
    transform: none;
    opacity: 0.7;
  }
`;

const show = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const EpisodeListContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: ${colors.darkGrey};
  padding: 15px;
  overflow-y: auto;
  text-align: left;
  transition: all 0.3s ease-in-out;
  animation: ${show} 0.3s linear; 
`;

export const EpisodesTop = styled.div``;

export const EpisodesBottom = styled.div``;

export const List = styled.ul``;

export const ListItem = styled.li`
`;

export const ListLink = styled.a`
  color: ${colors.white};
  padding: 10px 10px;

  display: block;

  &:hover {
    color: ${colors.pink};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 35px;
  width: 35px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  cursor: pointer;
  z-index: 5;
  background: transparent;
  outline: none;
  padding: 0;
  border: none;

  svg {
    fill: ${colors.white};
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    width: auto;
  }

  &:hover {
    color: ${colors.pink};

    svg {
      fill: ${colors.pink};
    }
  }
`;

