import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

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

export const StyledSearchIcon = styled(SearchIcon)``;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Right = styled.div`
  flex: 1;
`;
export const Center = styled.div`
  flex: 1;
`;
