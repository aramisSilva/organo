import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
const Formulario = () => {
  const disciplinas = ["Front-end", "Back-end", "UFAL"];

  return (
    <>
      <section className="formulario">
        <form>
          <h2 className="titulo">
            Preencha os dados para criar o card da atividade.
          </h2>
          <CampoTexto
            obrigatorio={true}
            label="Atividade"
            placeholder="Digite o que você irá estudar"
          />
          <CampoTexto
            obrigatorio={true}
            label="Disciplina"
            placeholder="Em qual disciplina eu me enquadro"
          />
          <CampoTexto
            label="Imagem"
            placeholder="Informe o endereço da imagem"
          />
          <ListaSuspensa label="Tipo de atividade" itens={disciplinas} />
          <Botao>Criar card</Botao>
        </form>
      </section>
    </>
  );
};

export default Formulario;
