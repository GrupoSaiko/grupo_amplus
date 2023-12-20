import React from "react";
import ui from "./styles.module.css";
import Contacto from "../contacto/page";

export default function Footer() {
  return (
    <footer className={ui.footer}>

      <Contacto/>

      <p>© 2023 Grupo Amplus, Todos los Derechos Reservados.</p>
    </footer>
  );
}
