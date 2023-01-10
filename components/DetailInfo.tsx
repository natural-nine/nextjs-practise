import styled from "styled-components";
import { ICountryTypes } from "../types/countryTypes";

const DetailInfo = ({ country }: { country: ICountryTypes }) => {
  return (
    <MainBox>
      <p>Details</p>
      <div>
        <h1>Capital</h1>
        <h2>{country.capital}</h2>
      </div>
      <div>
        <h1>Language</h1>
        {country.languages && <h2>{country.languages[0]?.name}</h2>}
      </div>
      <div>
        <h1>Currencies</h1>
        {country.currencies && (
          <h2>
            {country.currencies[0]?.name} , {country.currencies[0]?.symbol}
          </h2>
        )}
      </div>
      <div>
        <h1>Nativename</h1>
        <h2>{country.nativeName}</h2>
      </div>
    </MainBox>
  );
};

const MainBox = styled.section`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-bottom: 25px;
    font-size: 1.4vw;
    font-weight: 700;
  }
  div {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    border-bottom: 0.5px solid #bdc3c7;
    h1 {
      font-size: 1.1vw;
    }
    h2 {
      font-size: 1.2vw;
    }
  }
`;

export default DetailInfo;
