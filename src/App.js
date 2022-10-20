import React from "react";
import Banner from "./componentes/Banner/";
import Formulario from "./componentes/Formulario/";
function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario label="Nome" placeholder="Digite seu nome" />
      <Formulario label="Cargo" placeholder="Digite seu cargo" />
      <Formulario label="Imagem" placeholder="Informe o endereço da imagem" />
      <Formulario label="Time" />
    </div>
  );
}

export default App;
