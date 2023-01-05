import { useState } from "react";
import styled from "styled-components";
import classes from "./toggle.module.css";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const toggleChange = () => {
    setToggle((toggle: boolean) => !toggle);
  };
  console.log(toggle);
  return (
    <Wrap>
      <span>Theme Mode :</span>
      <label className={classes.switch}>
        <input type="checkbox" checked={toggle} onChange={toggleChange} />
        <span className={classes.slider}></span>
      </label>
      <span>{toggle ? "Dark" : "Light"}</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-left: 10px;
  }
`;

export default Toggle;
