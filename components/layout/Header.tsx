import Link from "next/link";
import styled from "styled-components";
import Toggle from "./Toggle";
const Header = () => {
  return (
    <Wrap>
      <HomeBox>
        <Link href={"/"}>
          <h1>Home</h1>
        </Link>
      </HomeBox>
      <Toggle />
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;
const HomeBox = styled.div`
  width: 20%;
  h1 {
    font-size: 2vw;
    color: #252525;
  }
`;

export default Header;
