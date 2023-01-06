import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const Button = ({ orderToggle, toggle, setOrderToggle }: any) => {
  const toggleClick = (toggle: any) => {
    for (let key in orderToggle) {
      if (key === toggle) {
        setOrderToggle((order: any) => (order[key] = true));
      }
    }
    console.log(toggle);
  };
  console.log(orderToggle[toggle]);
  return (
    <>
      {orderToggle[toggle] ? (
        <DownIcon />
      ) : (
        <UpIcon onClick={() => toggleClick(toggle)} />
      )}
    </>
  );
};

const DownIcon = styled(FaArrowDown)`
  color: #a29bfe;
  cursor: pointer;
`;
const UpIcon = styled(FaArrowUp)`
  cursor: pointer;
  color: #a29bfe;
`;

export default Button;
