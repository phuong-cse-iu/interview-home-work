import React from 'react';
import styled from '@emotion/styled';
import GoogleSignin from '../../containers/sign-in';
import GoogleSignout from '../../containers/sign-out';
import { Container, Row, Col } from 'reactstrap';
import Welcome from '../welcome';

const CustomRow = styled(Row)`
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  text-align: center;
`;

const Navbar = styled.div`
  text-align: center;
`;

const RightMenu = styled.div`
  text-align: center;
`;

export default ({ user, children, props }) => (
  <Container>
    <CustomRow>
      <Col>
        <Logo>Logo</Logo>
      </Col>
      <Col>
        <Navbar>{children}</Navbar>
      </Col>
      <Col>
        <RightMenu>
          {user ? (
            <Welcome message={user.name}>
              <GoogleSignout />
            </Welcome>
          ) : (
            <GoogleSignin />
          )}
        </RightMenu>
      </Col>
    </CustomRow>
  </Container>
);
