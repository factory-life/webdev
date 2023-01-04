import styled from 'styled-components';
import {Heading, Paragraph as ParagraphStyles, ShapeButtonLeft, ShapeButtonLeftGrape} from "styles/typography";
import colors from "styles/colors";
import Link from "layouts/elements/link";

export const Container = styled.div`
  text-align: center;
  margin: 80px 0;
  
  @media(max-width: 991px) {
    
  }
`;

export const Title = styled(Heading)`
  margin-bottom: 30px;
  color: ${colors.darkGrey};
  max-width: calc(100% - 60px);

  @media(max-width: 991px) {
    width: 100%;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background: ${colors.darkOrange};
    color: ${colors.white};
    font-weight: normal;
  }
`;

export const SplitContainer = styled.div`
  background: ${colors.lightGrey};
  display: flex;
  color: ${colors.darkGrey};
  
  @media(max-width: 991px) {
    display: block;
  }
`;

export const ImgContainer = styled.div`
  flex: 0 0 40%;
  position: relative;
  
  @media(max-width: 991px) {
    width: 100%;
    flex: none;
    height: auto;
    position: static;
  }
`;

export const ContentContainer = styled.div`
  flex: 1 1 auto;
  padding: 120px;
  color:  ${colors.darkGrey};
  
  @media(max-width: 991px) {
    padding: 90px 30px 30px 30px;
    position: relative;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  ${ParagraphStyles};
  color: ${colors.darkGrey};

  @media(max-width: 991px) {
    color: ${colors.darkGrey};    
    font-weight: 400;
    margin: 0 0 20px 0;
    
    font-size: 18px;
    line-height: 24px; 
  }
`;

export const MobileHide = styled.div`
  
  @media(max-width: 991px) {
    visibility: hidden;
    z-index: -9999px;
    overflow: hidden;
    height: 1px;
    width: 1px;
    opacity: 0;
  }
`;

export const Img = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media(max-width: 991px) {
    position: static;
    height: 300px;
    object-position: top center;
  }
`;

export const ButtonRow = styled.div`

  @media(max-width: 991px) {
    text-align: center;
  }
`;

export const Button = styled(Link)`
  ${ShapeButtonLeft};
  
  display: inline-block;
  
  background: ${colors.darkOrange};
  color: ${colors.white};

  &:hover {
    color: ${colors.white};
    background: ${colors.orange};

    &:before {
      background: ${colors.orange};
    }
  }
  
  &:before {
    background: ${colors.darkOrange};
  }
  
  @media(max-width: 768px) {
    background: ${colors.darkOrange};
    color: ${colors.white};
    
    &:hover {
      color: ${colors.white};
      background: ${colors.darkGrey};

      &:before {
        background: ${colors.darkGrey};
      }
    }

    &:before {
      background: ${colors.darkOrange};
    }
  }
`;

export const Download = styled(Link)`
  ${ShapeButtonLeftGrape};
  
  display: inline-block;
  
  background: ${colors.grape};
  color: ${colors.white};

  &:hover {
    color: ${colors.white};
    background: ${colors.lightGrape};

    &:before {
      background: ${colors.lightGrape};
    }
  }
  
  &:before {
    background: ${colors.grape};
  }
  
  @media(max-width: 768px) {
    background: ${colors.grape};
    color: ${colors.white};
    
    &:hover {
      color: ${colors.white};
      background: ${colors.darkGrey};

      &:before {
        background: ${colors.darkGrey};
      }
    }

    &:before {
      background: ${colors.darkGrape};
    }
  }
`;