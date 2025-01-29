/* eslint-disable react/jsx-key */
import React from "react";
import styled from "styled-components";

import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icones = [sacola, perfil];

const Iconesheader = () => {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} />
        </Icone>
      ))}
    </Icones>
  );
};

export default Iconesheader;
