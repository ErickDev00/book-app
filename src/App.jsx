/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */

import "./App.css";
import Logo from "./components/logo/logo";
import perfil from "./imagens/perfil.svg";
import sacola from "./imagens/sacola.svg";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
const icones = [sacola, perfil];

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Logo></Logo>
          <ul className="opcoes">
            {textoOpcoes.map((texto) => (
              <li className="opcao">
                <p>{texto}</p>
              </li>
            ))}
          </ul>

          <ul className="icones">
            {icones.map((icone) => (
              <li className="icone">
                <img src={icone} />
              </li>
            ))}
          </ul>
        </header>
      </div>
    </>
  );
}

export default App;
