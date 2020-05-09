import React from 'react';
import { Input, InputGroup } from 'reactstrap';
import styled from '@emotion/styled';

const SearchBarContainer = styled.div`
  width: 100%;
`;

export default (props) => (
  <SearchBarContainer>
    <InputGroup>
      <Input {...props} />
    </InputGroup>
  </SearchBarContainer>
);
