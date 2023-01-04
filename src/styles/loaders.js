import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import colors from "styles/colors";

const LoaderSvg = ({ className }) => (
  <svg className={className} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
  </svg>
);

const loaderOffset = 187;
const loaderDuration = 1.4;

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;

const dash = keyframes`
  0% { stroke-dashoffset: ${loaderOffset}; transform:rotate(0deg); }
  50% {
    stroke-dashoffset: ${loaderOffset/4};
    transform:rotate(135deg);
  }
  100% {
    stroke-dashoffset: ${loaderOffset};
    transform:rotate(450deg);
  }
`;

const colorChanges = keyframes`
  0% { stroke: ${colors.grapefruit}; }
  25% { stroke: ${colors.darkOrange}; }
  50% { stroke: ${colors.pink}; }
  75% { stroke: ${colors.orange}; }  
  100% { stroke: ${colors.grapefruit}; }
`;

const loaderCss = css`  
  animation: ${rotator} ${loaderDuration}s linear infinite;  
  
  .path {
    stroke-dasharray: ${loaderOffset};
    stroke-dashoffset: 0;
    transform-origin: center;
    
    animation:
      ${dash} ${loaderDuration}s ease-in-out infinite, 
      ${colorChanges} ${loaderDuration * 4}s ease-in-out infinite;
  }
`;

export const Loader = styled(LoaderSvg)`
    ${loaderCss};
    
    display: block;    
    width: 40px;
    height: 40px;
    margin: 30px auto;
`;

const LoaderContainer = styled.div`
  padding: 120px 0;
  text-align: center;
`;

export const PaddedLoader = ({ ...props }) => (
  <LoaderContainer>
    <Loader props={props} />
  </LoaderContainer>
);

export const InlineLoader = styled(LoaderSvg)`
    ${loaderCss};
    
    display: inline-block;
    vertical-align: top;
    width: 23px;
    height: 23px;
    margin: 0 0 0 5px;
`;
