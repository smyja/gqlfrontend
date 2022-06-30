import React from "react";
import { HeaderSimple } from "../components/Header.tsx";
const Layout = ({ children }) => {
  return (
    <>
      <HeaderSimple />
      {children}
    </>
  );
};

export default Layout;
