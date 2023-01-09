import { Dispatch, SetStateAction } from "react";

export interface IToggleTpyes {
  [key: string]: boolean;
  name: boolean;
  population: boolean;
  area: boolean;
}

export interface IArrowTyeps {
  orderToggle: IToggleTpyes;
  toggle: string;
  setSortToggle: Dispatch<SetStateAction<string>>;
  setOrderToggle: Dispatch<SetStateAction<IToggleTpyes>>;
}
