import axios from "axios";
import { IdataTypes } from "../types/contriesTypes";

export const getAllCountries = async () => {
  const response = await axios.get("https://restcountries.com/v2/all");
  const data: IdataTypes = response;
  return data;
};

export const getCountry = async () => {
  const allCountries = await getAllCountries();
  return allCountries.data.filter(item => item.alpha3Code);
};

export const getCountryByName = async (alphaCode: string) => {
  const response = await axios.get(
    `https://restcountries.com/v2/alpha3Code/${alphaCode}`
  );
  const data = response;
  return data;
};
