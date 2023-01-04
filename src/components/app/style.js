import { createGlobalStyle } from "styled-components";
import colors from "styles/colors";

export const ResetStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export const BaseStyles = createGlobalStyle`
  #__next {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
   
  #root {
    height: 100%;
    width: 100%;
    position: relative;
  }
  
  .grommetLayout {
    height: 100%;
    width: 100%;
    font-size: inherit;
    line-height: normal;
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  #modal-root {
    @media(min-width: 769px){
      display: none;
    }
  }
  
  html, body {
    color: ${colors.darkGrey};
    background: #FFF;
  }
  
  * {
    font-family: 'Poppins', 'Arial', sans-serif !important;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  a {
    color: ${colors.grapefruit};
    font-weight: 500;
    text-decoration: none;
    outline: none;
    border: none;
    transition: color 0.3s ease-in-out;
    
    &:hover {
      color: ${colors.black};
      text-decoration: none;
    }
    
    &:focus {
      outline: none;
    }
  }
  
  .grecaptcha-badge{
    display: none;
	  visibility: collapse !important;
  }
`;