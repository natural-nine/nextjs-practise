import axios from "axios";
import { IdataTypes } from "../types/contriesTypes";
import { ICountryDataTypes } from "../types/countryTypes";

export const getAllCountries = async () => {
  const response = await axios.get("https://restcountries.com/v2/all");
  const data: IdataTypes = response;
  return data;
};

export const getCountry = async () => {
  const allCountries = await getAllCountries();
  const filterCode = allCountries.data.filter(item => item.alpha3Code);
  return filterCode;
};

export const getCountryByName = async (alphaCode: string) => {
  const response = await axios.get(
    `https://restcountries.com/v2/alpha/${alphaCode}`
  );
  const data: ICountryDataTypes = response;
  return data;
};
