import React from "react";

import Logo from "../logo/logo";
import OpcoesHeader from "../OpcoesHeader/opcoesHeader";
import Iconesheader from "../IconesHeader/iconesheader";
import styled from "styled-components";

const AppHeader = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const header = () => {
  return (
    <AppHeader>
      <Logo />
      <OpcoesHeader />
      <Iconesheader />
    </AppHeader>
  );
};

export default header;
