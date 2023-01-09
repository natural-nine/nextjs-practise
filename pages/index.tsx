import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Search from "../components/Search";
import _ from "lodash";
import CountriesList from "../components/CountriesList";
import { ICountriesTypes, IdataTypes } from "../types/contriesTypes";
import { getAllCountries } from "../helpers/apis";
import { GetStaticProps } from "next";

export default function Home({ data }: IdataTypes) {
  const [search, setSearch] = useState<string>("");
  const allCountries = data.slice(0, 100);
  const searchCountries = allCountries.filter(
    (country: ICountriesTypes) =>
      country.name.toLowerCase().includes(search) ||
      country.region.toLowerCase().includes(search)
  );

  const countriesChange = _.debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value.toLowerCase());
    },
    500
  );
  return (
    <Wrap>
      <SearchBar>
        <h1>Founded {allCountries.length} Countires</h1>
        <Search
          onChange={countriesChange}
          placeholder="Filter by Name or Region"
        />
      </SearchBar>
      <CountriesList searchCountries={searchCountries} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px 45px 20px 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #bdc3c7;
  h1 {
    font-size: 1.1vw;
  }
  color: #252525;
`;

export const getStaticProps = async () => {
  try {
    const { data }: IdataTypes = await getAllCountries();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
