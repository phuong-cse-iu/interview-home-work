import React from 'react';
import styled from '@emotion/styled';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.span`
  flex-basis: 50%;
`;

const LogoutContainer = styled.span`
  flex-basis: 33%;
`;

export default ({ children, message, ...props }) => (
  <WelcomeContainer>
    <WelcomeText>Hi {message}</WelcomeText>
    <LogoutContainer>{children}</LogoutContainer>
  </WelcomeContainer>
);
