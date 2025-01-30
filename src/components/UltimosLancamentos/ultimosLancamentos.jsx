/* eslint-disable react/jsx-key */
import React from "react";
import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo/titulo";
import CardRecomenda from "../CardRecomenda/cardRecomenda";
import imagemLivro from "../../../public/imagens/livro2.png";
import styled from "styled-components";

const UltimosLContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

const UltimosLancamentos = () => {
  return (
    <UltimosLContainer>
      <Titulo cor="#000" tamanhoFonte="36px">
        Ultimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por:"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma."
        img={imagemLivro}
      />
    </UltimosLContainer>
  );
};

export default UltimosLancamentos;
