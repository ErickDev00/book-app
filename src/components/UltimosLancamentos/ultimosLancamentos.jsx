import React from "react";
import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";

const UltimosLContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

const LivrosDescritos = styled.p`
  margin: 10px;
`;

const UltimosLancamentos = () => {
  return (
    <UltimosLContainer>
      <Titulo>Ultimos Lançamentos</Titulo>
      <NovosLivrosContainer>
        {livros.map((livro, index) => (
          <LivrosDescritos key={livro.id || index}>
            {livro.nome}
          </LivrosDescritos>
        ))}
      </NovosLivrosContainer>
    </UltimosLContainer>
  );
};

export default UltimosLancamentos;
