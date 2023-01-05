import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Search from "../components/Search";
import _ from "lodash";

export default function Home(props: any) {
  const [search, setSearch] = useState<string>("");
  const allCountries = props.data.slice(0, 100);

  const searchCountries = allCountries.filter((country: any) =>
    country.name.toLowerCase().includes(search)
  );

  const countriesChange = _.debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value.toLowerCase());
    },
    500
  );

  console.log(searchCountries);
  return (
    <Wrap>
      <SearchBar>
        <h1>Founded {allCountries.length} Countires</h1>
        <Search
          onChange={countriesChange}
          placeholder="Filter by Name, Region or SubRegion"
        />
      </SearchBar>
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
    const response = await axios.get("https://restcountries.com/v2/all");
    const { data }: any = response;
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
