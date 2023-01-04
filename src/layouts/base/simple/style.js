import styled from 'styled-components';
import colors from 'styles/colors';
import {ResponsiveContainer} from "styles/elements";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

export const FooterContainer = styled(ResponsiveContainer)`
  padding: 60px 30px;
`;

export const Content = styled.div`
  flex: 1 0 auto;
  overflow-y: auto;
`;

export const Split = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 768px) {
    display: block;
  }
`;

export const Fixed = styled.div`
  flex: 0 0 500px;
  
  @media(max-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const Flex = styled.div`
  flex: 0 0 700px;
  
  @media(max-width: 1600px) {
    flex: 1 1 auto;
    padding-left: 60px;
  }
  
  @media(max-width: 768px) {
    padding-left: 0
  }
`;

export const Copyright = styled.p`
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 1.53px;
  color: ${colors.white};
  padding-top: 60px;

  @media(max-width: 768px) {
  }
`;