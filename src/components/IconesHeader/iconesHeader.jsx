import React from "react";
import styled from "styled-components";

import perfil from "../../icones/perfil.svg";
import sacola from "../../icones/sacola.svg";

const Icones = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;
`;

const icones = [sacola, perfil];

const Iconesheader = () => {
  return (
    <Icones>
      {icones.map((icone, index) => (
        <Icone key={index}>
          <img src={icone} />
        </Icone>
      ))}
    </Icones>
  );
};

export default Iconesheader;
