import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  Right,
  SearchContainer,
  StyledSearchIcon,
  Wrapper,
  MenuItem,
  StyledBadgeIcon,
  StyledShopingCartIcon
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
        <Center>
          <Logo>RoKart</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <StyledBadgeIcon badgeContent={4} color="primary">
              <StyledShopingCartIcon />
            </StyledBadgeIcon>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
