import React from "react";
import "./header.css";

import Logo from "../logo/logo";
import OpcoesHeader from "../OpcoesHeader/opcoesHeader";
import Iconesheader from "../IconesHeader/iconesheader";

const header = () => {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
      <Iconesheader />
    </header>
  );
};

export default header;
