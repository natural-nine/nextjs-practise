import styled from "styled-components";
import { ICountryTypes } from "../types/countryTypes";

const DetailImg = ({ country }: { country: ICountryTypes }) => {
  return (
    <MainBox>
      <ImgBox>
        <img src={`${country.flag}`} alt="flag" />
      </ImgBox>
      <NameBox>
        <h1>{country.name}</h1>
        <h3>{country.region}</h3>
      </NameBox>
      <InfoBox>
        <PopBox>
          <h2>Population</h2>
          <h3>{country.population.toLocaleString()}</h3>
        </PopBox>
        <AreaBox>
          <h2>Area</h2>
          <h3>{country.area.toLocaleString()} ㎢</h3>
        </AreaBox>
      </InfoBox>
    </MainBox>
  );
};

const MainBox = styled.section`
  width: 100%;
  div {
    width: 100%;
    h1 {
      font-size: 1.8vw;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 0.9vw;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 1vw;
    }
  }
`;
const ImgBox = styled.div`
  height: 310px;
  padding: 15px;
  img {
    width: 100%;
    height: 100%;
  }
  margin-bottom: 10px;
`;
const NameBox = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-bottom: 0.5px solid #bdc3c7;
  border-top: 0.5px solid #bdc3c7;
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 50%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PopBox = styled.div`
  border-right: 0.5px solid #bdc3c7;
`;

const AreaBox = styled.div``;

export default DetailImg;
