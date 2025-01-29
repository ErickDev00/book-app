/* eslint-disable react/react-in-jsx-scope */

import Header from "./components/Header/header";
import Pesquisa from "./components/Pesquisa/pesquisa";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
`;

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <Pesquisa />
      </AppContainer>
    </>
  );
}

export default App;
