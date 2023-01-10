import React, { Dispatch, SetStateAction } from "react";
import Header from "./Header";

const Layout = ({
  children,
  toggle,
  setToggle,
}: {
  children: React.ReactNode;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <React.Fragment>
      <Header toggle={toggle} setToggle={setToggle}/>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
