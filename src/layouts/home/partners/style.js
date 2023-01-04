import styled from 'styled-components';
import { Heading, ShapeButtonLeft } from "styles/typography";

import colors from "styles/colors";
import Link from "layouts/elements/link";

export const Container = styled.div`
  text-align: center;
  margin: 80px 0;
`;

export const Title = styled(Heading)`
  
`;

export const Image = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  
  @media(max-width: 768px) {
    
  }
`;

export const ImageContainer = styled.div`
  width: 400px;
  text-align: center;
  margin: 0 auto;
  
  @media(max-width: 768px) {
    text-align: center;
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 768px) {
    margin-bottom: 30px;
    
    & > ${ImageContainer}:nth-child(1) {
      width: 150px;
      height: auto;
    }
    & > ${ImageContainer}:nth-child(2) {
      width: 100px;
      height: auto;
    }
    & > ${ImageContainer}:nth-child(3) {
      width: 150px;
      height: auto;
      
      ${Image} {
        width: 80px;
      }
    }
  }
  
  @media(max-width: 768px) {
    display: block;

    & > ${ImageContainer}:nth-child(1) {
      width: 250px;
      height: auto;
    }
    & > ${ImageContainer}:nth-child(2) {
      width: 150px;
      height: auto;
    }
    & > ${ImageContainer}:nth-child(3) {
      width: 350px;
      height: auto;

      ${Image} {
        width: 140px;
        margin: -25px 0 -25px 0;
      }
    }
  }
`;

export const Button = styled(Link)`
  ${ShapeButtonLeft};
  display: inline-block;
  
  background: ${colors.darkGrey};
  
  &:before {
    background: ${colors.darkGrey};
  }
  
  &:hover {
    color: ${colors.white};
    background: ${colors.darkOrange};

    &:before {
      background: ${colors.darkOrange};
    }
  }
`;
