import styled from "styled-components";
import Image from "next/image";
import Button from "./Button";
import { useRef, useState } from "react";

const order = (countries: any, direction: string) => {
  if (direction === "asc") {
    return countries.sort((a: any, b: any) =>
      a.population > b.population ? 1 : -1
    );
  }
  if (direction === "desc") {
    return countries.sort((a: any, b: any) =>
      a.population > b.population ? -1 : 1
    );
  }
  if (direction === "") {
    return countries;
  }
};

const CountriesList = ({ searchCountries }: any) => {
  const orderToggles = {
    name: false,
    population: true,
    area: false,
  };
  const [orderToggle, setOrderToggle] = useState(orderToggles);
  const orderedCountries = order(searchCountries, "");
  console.log(orderToggle);
  return (
    <Wrap>
      <CountiresHeader>
        <div>
          <h2>Name</h2>
          <Button
            setOrderToggle={setOrderToggle}
            toggle={"name"}
            orderToggle={orderToggle}
          />
        </div>
        <div>
          <h2>Population</h2>
          <Button
            toggle={"population"}
            orderToggle={orderToggle}
            setOrderToggle={setOrderToggle}
          />
        </div>
        <div>
          <h2>Area</h2>
          <Button
            toggle={"area"}
            orderToggle={orderToggle}
            setOrderToggle={setOrderToggle}
          />
        </div>
      </CountiresHeader>
      {orderedCountries.map((item: any, idx: any) => (
        <CountriesBox key={item.name}>
          <NameBox>
            <Image src={item.flag} width={80} height={35} alt="flag" />
            <h1>{item.name}</h1>
          </NameBox>
          <PopBox>
            {item.population && item.population.toLocaleString(2)}
          </PopBox>
          <AreaBox>{item.area && item.area.toLocaleString(2)} ㎢</AreaBox>
        </CountriesBox>
      ))}
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 80%;
  margin: 0 0 0 auto;
  padding: 10px 5px;
`;

const CountiresHeader = styled.div`
  width: 100%;
  height: 60px;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #bdc3c7;
  div {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 1.2vw;
      margin-right: 5px;
    }
  }
`;

const CountriesBox = styled.div`
  width: 100%;
  height: 75px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px;
  border-radius: 15px;
  box-shadow: 0px 12px 42px rgba(0, 0, 0, 0.2);
  div {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const NameBox = styled.div`
  padding: 0px 25px;
  h1 {
    font-size: 1.1vw;
    margin-left: 25px;
  }
`;

const PopBox = styled.div`
  justify-content: center;
  font-size: 1.1vw;
`;
const AreaBox = styled.div`
  justify-content: center;
  font-size: 1.1vw;
`;

export default CountriesList;
