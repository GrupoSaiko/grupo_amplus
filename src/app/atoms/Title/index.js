import React from "react";
import ui from "./styles.module.scss";

export default function Title({ children = "" }) {
  return (
    <div className={ui.title}>
      <h1>{children}</h1>
      <img src="lines.svg" alt="decoracion_titulo" />
    </div>
  );
}
