import React from 'react';
import Footer from '../footer';
import Header from '../../containers/header';
import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';

const StyledRow = styled(Row)`
  justify-content: center;
`;

export default ({ children, ...props }) => (
  <Container>
    <StyledRow>
      <Header>Header</Header>
    </StyledRow>
    <StyledRow>{children}</StyledRow>
    <StyledRow>
      <Footer />
    </StyledRow>
  </Container>
);