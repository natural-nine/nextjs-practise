import { ICountriesTypes } from "../types/contriesTypes";

export const orderContries = (
  countries: ICountriesTypes[],
  direction: string
) => {
  if (direction === "name") {
    return countries.sort((a: ICountriesTypes, b: ICountriesTypes) =>
      a.name > b.name ? 1 : -1
    );
  }
  if (direction === "population") {
    return countries.sort((a: ICountriesTypes, b: ICountriesTypes) =>
      a.population > b.population ? -1 : 1
    );
  }
  if (direction === "area") {
    return countries.sort((a: ICountriesTypes, b: ICountriesTypes) =>
      a.area > b.area ? -1 : 1
    );
  }
  if (direction === "") {
    return countries;
  }
};
