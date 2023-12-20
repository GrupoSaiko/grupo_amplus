import React from "react";
import ui from "./styles.module.scss";
import Contacto from "../contacto/page";
import Divider from "../atoms/Divider";

export default function Footer() {
  return (
    <>

      <footer className={ui.footer}>
      <Divider />
        <Contacto />

        <p>© 2023 Grupo Amplus, Todos los Derechos Reservados.</p>
      </footer>
    </>
  );
}
