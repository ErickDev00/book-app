import React from "react";
import logo from "../../imagens/logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <div className="logo">
        <img className="logoimg" src={logo} alt="logo" />
        <p>
          <strong>Alura</strong>Books
        </p>
      </div>
    </div>
  );
};

export default Logo;
