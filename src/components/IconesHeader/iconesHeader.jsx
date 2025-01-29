/* eslint-disable react/jsx-key */
import React from "react";
import "./iconesHeader.css";

import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

const icones = [sacola, perfil];

const Iconesheader = () => {
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li className="icone">
          <img src={icone} />
        </li>
      ))}
    </ul>
  );
};

export default Iconesheader;
