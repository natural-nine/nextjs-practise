import styled from "styled-components";
import { ICountryTypes } from "../types/countryTypes";
import DetailImg from "./DetailImg";
import DetailInfo from "./DetailInfo";
import MapLocation from "./MapLocation";

const CountryList = ({ country }: { country: ICountryTypes }) => {
  return (
    <Wrap>
      <LeftBox>
        <DetailImg country={country} />
      </LeftBox>
      <RightBox>
        <DetailInfo country={country} />
      </RightBox>
    </Wrap>
  );
};

export default CountryList;

const Wrap = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  color: ${(props) => props.theme.textColor};
`;

const LeftBox = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow:${(props) => props.theme.boxShadow};
  border-radius: 10px;
`;
const TestMap = styled.div`
  width: 100%;
  height: 300px;
`;
const RightBox = styled.div`
  width: 61%;
  box-shadow:${(props) => props.theme.boxShadow};
  border-radius: 10px;
`;
