import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import { IArrowTyeps } from "../types/toggleTypes";

const Arrow = ({ orderToggle, toggle, setOrderToggle, setSortToggle }: IArrowTyeps) => {
  const toggleClick = (event: string) => {
    const newOrderState = { ...orderToggle };
    const activeKey = event;
    for (let key in newOrderState) {
      key === activeKey
        ? (newOrderState[key] = true)
        : (newOrderState[key] = false);
    }
    setSortToggle(event);
    setOrderToggle(newOrderState);
  };
  return (
    <>
      {orderToggle[toggle] ? (
        <DownArrow />
      ) : (
        <UpArrow onClick={() => toggleClick(toggle)} />
      )}
    </>
  );
};

const DownArrow = styled(FaArrowDown)`
  color: #a29bfe;
  cursor: pointer;
  font-size: 0.85vw;
`;
const UpArrow = styled(FaArrowUp)`
  cursor: pointer;
  color: #a29bfe;
  font-size: 0.85vw;
`;

export default Arrow;
