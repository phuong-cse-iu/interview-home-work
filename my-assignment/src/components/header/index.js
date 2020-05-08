import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.div`
  text-align: center;
`;

export default ({children, props}) => <StyledHeader>{children}</StyledHeader>