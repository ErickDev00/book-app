import React from "react";
import logo from "../../icones/logo.svg";
import styled from "styled-components";

const Logoco = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImg = styled.img`
  padding-right: 10px;
`;

const Logo = () => {
  return (
    <div>
      <Logoco>
        <LogoImg src={logo} alt="logo" />
        <p>
          <strong>Alura</strong>Books
        </p>
      </Logoco>
    </div>
  );
};

export default Logo;
