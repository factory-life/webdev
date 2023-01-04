import styled, {css} from 'styled-components';
import { SmallHeading } from "styles/typography";
import colors from "styles/colors";
import { InlineLoader } from "styles/loaders";
import React from "react";
import Svg from 'react-inlinesvg';
import { AiOutlineUser, AiOutlineCheck } from "react-icons/ai";

export const BackgroundWrapper = styled.div`
  background: ${colors.darkGrey};
`;

export const Container = styled.div`
  text-align: center;
`;

export const ContainerInner = styled.div`

`;

export const PlainForm = styled.form`

`;

export const Splitter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  
  & > div {
    width: 100%;
  }
  
  @media(max-width: 768px){
   display: block;
  }
`;

export const Column = styled.div`
  flex: 0 0 45% !important;
`;

export const DropdownColumn = styled(Column)`
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  text-align: left;
`;

export const ResultContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 60px 0;
  border-radius: 20px;
`;

export const Content = styled.div`
  
`;

export const Title = styled(SmallHeading)`
  margin-bottom: 15px;  
  color: ${colors.white};
  text-align: left;
`;

export const BaseIconButton = css`
  background: ${colors.white};
  text-align: center;
  transition: all 0.2s ease-in, background-color 0.2s ease-in, color 0.2s ease-in, box-shadow 0.2s ease-in;
  border-radius: 50%;
  display: inline-flex;
  line-height: 40px;
  align-items: center;
  justify-content: center; 
  height: 42px;
  width: 42px;
  border: 1px solid ${colors.white};
  vertical-align: middle;
  
  svg {
    width: 25px;
    height: auto;
    display: inline-block;
  }
`;

export const Icon = styled.div`
  ${BaseIconButton};
  margin-bottom: 15px;
  height: 60px;
  width: 60px;
  
  svg {
    height: 40px;
    width: 40px;
    color: ${colors.darkGrey};
  }
`;

export const Button = styled.button`
  color: ${colors.white};
  background: transparent;
  border: none;
  outline: none;
  
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px 12px 5px 0;
  font-size: 25px;
  letter-spacing: 2.25px;
  cursor: pointer;
  
  &:focus, &:active, &:focus:active, &:hover {
    color: ${colors.pink};
    background: transparent;
    transition: all 0.3s ease-in-out;
  }
`;

export const ButtonLink = styled.a``;

export { InlineLoader, AiOutlineUser, AiOutlineCheck };