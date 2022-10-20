import React from "react";
import "./CampoTexto.css";
const CampoTexto = (props) => {
  return (
    <>
      <div className="campo-texto">
        <form>
          <div>
            <label className="label-text">{props.label}</label>
            <input placeholder={props.placeholder} />
          </div>
        </form>
      </div>
    </>
  );
};

export default CampoTexto;
