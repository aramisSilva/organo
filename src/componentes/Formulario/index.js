import React from "react";
import "./Formulario.css";
const Formulario = (props) => {
  console.log(props);
  return (
    <>
      <div className="campo-texto">
        <form>
          <div>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
