import styled from 'styled-components';
import React from 'react';

export const ContainerBase = styled.div`
  margin-bottom: 20px;
`;

export const Container = styled(({ smallForm = false, ...props }) => <ContainerBase {...props} />)`
  ${props => !!props.smallForm && `margin-bottom: 10px;`}
`;
