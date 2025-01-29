/* eslint-disable react/jsx-key */
import React from "react";
import "./opcoesHeader.css";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const OpcoesHeader = () => {
  return (
    <ul className="opcoes">
      {textoOpcoes.map((texto) => (
        <li className="opcao">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
};

export default OpcoesHeader;
