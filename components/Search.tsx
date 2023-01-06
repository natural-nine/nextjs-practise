import styled from "styled-components";
import { FaSistrix } from "react-icons/fa";
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
`;

export default Search;
