import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
const Formulario = () => {
  return (
    <>
      <section className="formulario">
        <form>
          <h2 className="titulo">
            Preencha os dados para criar o card do colaborador.
          </h2>
          <CampoTexto
            label="Atividade"
            placeholder="Digite o que você irá estudar"
          />
          <CampoTexto
            label="Disciplina"
            placeholder="Em qual disciplina eu me enquadro"
          />
          <CampoTexto
            label="Imagem"
            placeholder="Informe o endereço da imagem"
          />
          <CampoTexto label="Time" />
        </form>
      </section>
    </>
  );
};

export default Formulario;
