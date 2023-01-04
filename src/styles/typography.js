import styled, { css } from 'styled-components';
import colors from "styles/colors";

export const ScreenReaderText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SmallHeading = styled.h5`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2.25px;
`;

export const Heading = styled.h2`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2.7px;
  color: ${colors.darkGrey};
  text-transform: uppercase;
  line-height: 1.15;
  margin-bottom: 30px;
  
  @media(max-width: 768px) {
    font-size: 20px;
    line-height: 1.25;
    margin-bottom: 30px;
  }
`;

export const Emphasis = css`
  font-size: 42px;
  font-weight: 500;
  color: ${colors.white};
  text-transform: uppercase;
  
  @media(max-width: 768px) {
    font-size: 24px;
  }
`;

export const BigHeading = styled.h2`
  font-size: 96px;
  font-weight: bold;
  letter-spacing: 3.84px;
  color: ${colors.white};
  text-transform: uppercase;
  line-height: 1;
`;

export const shapeThing = css`
  position: relative;
  height: 60px;
  display: inline-block;
  background: ${colors.orange};
  padding: 0 35px;
  outline: none;
  text-decoration: none;
  border: none;
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 2.25px;
  font-weight: 500;
  border-radius: 5px;
  line-height: 60px;
  
  @media(max-width: 768px) {
    font-size: 20px;
    height: 40px;
    padding: 0 25px;
    line-height: 40px;
  }
`;

export const shapeThingGrape = css`
  position: relative;
  height: 60px;
  display: inline-block;
  background: ${colors.grape};
  padding: 0 35px;
  outline: none;
  text-decoration: none;
  border: none;
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 2.25px;
  font-weight: 500;
  border-radius: 5px;
  line-height: 60px;
  
  @media(max-width: 768px) {
    font-size: 20px;
    height: 40px;
    padding: 0 25px;
    line-height: 40px;
  }
`;

const shapeSection = css`
  display: inline-block;
  background: ${colors.orange};
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  content: '';

  @media(max-width: 768px) {
    width: 30px;
  }
`;

const shapeSectionGrape = css`
  display: inline-block;
  background: ${colors.grape};
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  content: '';

  @media(max-width: 768px) {
    width: 30px;
  }
`;

export const shapeWithExtraLeft = css`
  ${shapeThing}

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 10px;
  margin: 0 0 0 40px;

  @media(max-width: 768px) {
    margin-left: 30px;
  }
  
  &:before {
    ${shapeSection};
    right: calc(100% - 10px);
    border-bottom-left-radius: 30px;
    border-top-left-radius: 5px;
    transition: all 0.3s ease-in-out;
    
    @media(max-width: 768px) {
      border-bottom-left-radius: 20px;
    }
  }
`;

export const shapeWithExtraLeftGrape = css`
  ${shapeThingGrape}

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 10px;
  margin: 0 0 0 40px;

  @media(max-width: 768px) {
    margin-left: 30px;
  }
  
  &:before {
    ${shapeSectionGrape};
    right: calc(100% - 10px);
    border-bottom-left-radius: 30px;
    border-top-left-radius: 5px;
    transition: all 0.3s ease-in-out;
    
    @media(max-width: 768px) {
      border-bottom-left-radius: 20px;
    }
  }
`;

export const shapeWithExtraRight = css`
  ${shapeThing}

  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-right: 10px;
  margin: 0 40px 0 0;
  
  @media(max-width: 768px) {
    margin-right: 30px;
  }
  
  &:after {
    ${shapeSection};
    left:calc(100% - 10px);
    border-bottom-right-radius: 30px;
    border-top-right-radius: 5px;
    transition: all 0.3s ease-in-out;
    
    @media(max-width: 768px) {
      border-bottom-left-radius: 20px;
    }
  }
`;

const buttonStyles = css`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: ${colors.orange};
  }
`;

const buttonStylesGrape = css`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: ${colors.grape};
  }
`;

export const ShapeButtonLeft = css`
  ${shapeWithExtraLeft}
  ${buttonStyles}
`;

export const ShapeButtonLeftGrape = css` 
  ${shapeWithExtraLeftGrape}
  ${buttonStylesGrape}
`; // Download Button Left Styling

export const ShapeButtonRight = css`
  ${shapeWithExtraRight}
  ${buttonStyles}
`;

export const ShapeLeft = styled.div`
  ${shapeWithExtraLeft}
`;

export const ShapeRight = styled.div`
  ${shapeWithExtraRight}
`;

export const Paragraph = css`
  font-size: 22px;
  color: ${colors.white};
  letter-spacing: 1.8px;
  line-height: 32px;
  font-weight: 300;
  margin-bottom: 45px;

  @media(max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;