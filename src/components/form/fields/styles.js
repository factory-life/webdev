import styled, { css } from 'styled-components';
import colors from "styles/colors";

export const InputStyles = css`
  font-family: 'Poppins', sans-serif !important;
  background: #282828;
  color: #FFF;
  display: block;
  box-sizing: border-box;
  width: 100%;
  font-weight: 300;
  letter-spacing: 1.53px;
  border: 1px solid #FFF;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-shadow: none;
  padding: 0 18px;
  height: 42px;
  line-height: 42px;
  outline: none;
  font-size: 17px !important;
  transition: all 0.2s ease-in-out;
  text-shadow: none;
  
  /* Change Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active,
  &:-webkit-autofill:active:focus {
    border: 1px solid #FFF;
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: none;
    font-family: 'Poppins', sans-serif !important;
    font-weight: 300;
    letter-spacing: 1.53px;
  }
  
  &:active, &:focus, &:active:focus {    
    outline: none;
    border: 1px solid #000;
    background: ${colors.medDarkGrey};

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */      
      color: ${colors.grey};
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 1.53px;
      font-family: 'Poppins', sans-serif !important;
    }
    ::-moz-placeholder { /* Firefox 19+ */      
      color: ${colors.grey};
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 1.53px;
      font-family: 'Poppins', sans-serif !important;
    }
    :-ms-input-placeholder { /* IE 10+ */      
      color: ${colors.grey};
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 1.53px;
      font-family: 'Poppins', sans-serif !important;
    }
    :-moz-placeholder { /* Firefox 18- */      
      color: ${colors.grey};
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 1.53px;
      font-family: 'Poppins', sans-serif !important;
    }
  }  
  
  &:disabled {
    background-color: #999;
    color: #333;
  }
  
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-weight: 300;
    letter-spacing: 1.53px;
    color:  ${colors.grey};

    text-transform: uppercase;
    font-family: 'Poppins', sans-serif !important;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    font-weight: 300;
    letter-spacing: 1.53px;

    text-transform: uppercase;
    color:  ${colors.grey};
    font-family: 'Poppins', sans-serif !important;
  }
  :-ms-input-placeholder { /* IE 10+ */
    font-weight: 300;
    letter-spacing: 1.53px;

    text-transform: uppercase;
    color: ${colors.grey};
    font-family: 'Poppins', sans-serif !important;
  }
  :-moz-placeholder { /* Firefox 18- */
    font-weight: 300;
    letter-spacing: 1.53px;

    text-transform: uppercase;
    color: ${colors.grey};
    font-family: 'Poppins', sans-serif !important;
  }
  
  @media(max-width: 768px) {
    padding: 0 14px;
    font-size: 16px;
  }
`;

export const Input = styled.input`
  ${InputStyles};
`;

export const Label = styled.label`
  color: #000;
  margin-bottom: 5px;
  display: block;
`;

export const Container = styled.div`
  
`;

export const Textarea = styled.textarea`
  ${InputStyles};  
  
  padding: 10px 18px;
  min-height: 76px;
  line-height: 18px;
  
  ${props => props.size && props.size === 'large' && `
    min-height: 120px
  `};
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 13px;
  font-weight: bold;
  margin: 0;
  padding: 3px 0 0 0;
  line-height: 18px;
  text-align: left;
  
  ${props => !!props.lightError && `
    color: red;
  `} 
`;
