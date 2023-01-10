import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  bgColor: "#2d3436",
  textColor: "#f1f2f6",
  inputBoxColor: "#636e72",
  inputTextColor: "#f1f2f6",
  listBoxColor: "#353b48",
  boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px,
  rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
  rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
};

export const lightTheme: DefaultTheme = {
  bgColor: "#ecf0f1",
  textColor: "#252525",
  inputBoxColor: "",
  inputTextColor: "",
  listBoxColor: "",
  boxShadow: `0px 12px 42px rgba(0, 0, 0, 0.2)`,
};
