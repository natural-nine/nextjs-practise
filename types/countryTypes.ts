interface ILan {
  name: string;
}

interface ICurrencies {
  code: string;
  symbol: string;
  name:string;
}

export interface ICountryTypes {
  name: string;
  nativeName: string;
  flag: string;
  capital: string;
  latlng: number[];
  currencies: ICurrencies[];
  region: string;
  area: number;
  population: number;
  languages: ILan[];
}

export interface ICountryDataTypes {
  data: ICountryTypes;
}
