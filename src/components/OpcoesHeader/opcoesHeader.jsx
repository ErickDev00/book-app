import React from "react";
import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  list-style: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const OpcoesHeader = () => {
  return (
    <Opcoes>
      {textoOpcoes.map((texto, index) => (
        <Opcao key={index}>
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
};

export default OpcoesHeader;
