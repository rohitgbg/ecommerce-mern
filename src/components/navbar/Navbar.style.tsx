import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import { ShoppingCartOutlined } from '@material-ui/icons';

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Language = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  border: 1px solid var(--lightgray);
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: var(--gray);
  font-size: 1.6rem !important;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const MenuItem = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  margin-left: 2.5rem;
`;

export const StyledBadgeIcon = styled(Badge)``;
export const StyledShopingCartIcon = styled(ShoppingCartOutlined)`
  font-size: 2rem !important;
`;
