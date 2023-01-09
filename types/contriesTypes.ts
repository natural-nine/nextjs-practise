interface ICurrencies {
  symbol: string;
}

interface ILanguages {
  name: string;
}
export interface ICountriesTypes {
  name: string;
  population: number;
  area: number;
  flag: string;
  latlng: number[];
  alpha3Code: string;
  alpha2Code: string;
  borders: string[];
  languages: ILanguages[];
  capital: string;
  nativeName: string;
  currencies: ICurrencies[];
  region: string;
  flags: {
    png: string;
  };
}
export interface IdataTypes {
  data: ICountriesTypes[];
}
