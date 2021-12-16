import React from 'react';
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Right,
  SearchContainer,
  StyledSearchIcon,
  Wrapper
} from './Navbar.style';

const Navbar = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <StyledSearchIcon />
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
