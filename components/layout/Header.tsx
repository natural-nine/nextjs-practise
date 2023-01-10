import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
const Header = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Wrap>
      <HomeBox>
        <Link href={"/"}>
          <h1>Home</h1>
        </Link>
      </HomeBox>
      <Toggle toggle={toggle} setToggle={setToggle} />
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  border-bottom: 0.5px solid #bdc3c7;
  color:${(props) => props.theme.textColor};
`;
const HomeBox = styled.div`
  width: 20%;
  h1 {
    font-size: 2vw;
    color:${(props) => props.theme.textColor};
  }
`;

export default Header;
