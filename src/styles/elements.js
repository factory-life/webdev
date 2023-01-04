import styled from 'styled-components';
import colors from 'styles/colors';

export const ResponsiveContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  
  @media(max-width: 1600px) {
    max-width: 100%;
  }
  
  @media(max-width: 768px) {
    padding: 0 15px;
  }
`;
