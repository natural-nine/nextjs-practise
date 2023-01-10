import styled from "styled-components";
const Search = ({ ...rest }) => {
  return (
    <SearchBox>
      <SearchInput onChange={rest.onChange} placeholder={rest.placeholder} />
    </SearchBox>
  );
};

const SearchBox = styled.div`
  width: 50%;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border-radius: 15px;
  border: none;
  outline: none;
  font-size: 1.1vw;
  background-color: ${props => props.theme.inputBoxColor};
  ::placeholder {
    color: ${props => props.theme.inputTextColor};
  }
`;

export default Search;
