import styled from "styled-components";
import Image from "next/image";
import Arrow from "./Arrow";
import { useState } from "react";
import { orderContries } from "../helpers/contriesFilter";
import { IToggleTpyes } from "../types/toggleTypes";
import { ICountriesTypes } from "../types/contriesTypes";
import Link from "next/link";

const CountriesList = ({
  searchCountries,
}: {
  searchCountries: ICountriesTypes[];
}) => {
  const [orderToggle, setOrderToggle] = useState<IToggleTpyes>({
    name: true,
    population: false,
    area: false,
  });
  const [sortToggle, setSortToggle] = useState<string>("name");
  const orderedCountries = orderContries(searchCountries, sortToggle);

  return (
    <Wrap>
      <CountiresHeader>
        <div>
          <h2>Name</h2>
          <Arrow
            toggle={"name"}
            setOrderToggle={setOrderToggle}
            orderToggle={orderToggle}
            setSortToggle={setSortToggle}
          />
        </div>
        <div>
          <h2>Population</h2>
          <Arrow
            toggle={"population"}
            orderToggle={orderToggle}
            setOrderToggle={setOrderToggle}
            setSortToggle={setSortToggle}
          />
        </div>
        <div>
          <h2>Area</h2>
          <Arrow
            toggle={"area"}
            orderToggle={orderToggle}
            setOrderToggle={setOrderToggle}
            setSortToggle={setSortToggle}
          />
        </div>
      </CountiresHeader>
      {orderedCountries?.map(item => (
        <Link href={`country/${item.alpha3Code.toLocaleLowerCase()}`}>
          <CountriesBox key={item.name}>
            <NameBox>
              <Image src={item.flag} width={90} height={50} alt="flag" />
              <h1>{item.name}</h1>
            </NameBox>
            <PopBox>
              {item.population && item.population.toLocaleString()}
            </PopBox>
            <AreaBox>{item.area && item.area.toLocaleString()} ㎢</AreaBox>
          </CountriesBox>
        </Link>
      ))}
    </Wrap>
  );
};

const Wrap = styled.section`
  width: 80%;
  margin: 0 0 0 auto;
  padding: 10px 5px;
  color: ${props => props.theme.textColor};
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
      margin-right: 7px;
    }
  }
`;

const CountriesBox = styled.div`
  width: 100%;
  height: 90px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px;
  border-radius: 15px;
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
  :hover {
    transform: scale(1.03);
  }
  cursor: pointer;
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
