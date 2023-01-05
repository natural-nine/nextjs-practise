import styled from "styled-components";
import { FaSistrix } from "react-icons/fa";
const Search = ({ ...rest }) => {
//   console.log(rest.onChange);
  return (
    <SearchBox>
      <SearchInput onChange={rest.onChange} {...rest} />
    </SearchBox>
  );
};

const SearchBox = styled.div`
  width: 50%;
  position: relative;
`;
const Icon = styled(FaSistrix)`
  position: absolute;
  font-size: 2vw;
  opacity: 0.3;
  left: 52%;
  top: 25%;
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
