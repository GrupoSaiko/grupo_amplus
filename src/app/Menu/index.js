import Link from "next/link";
import React from "react";
import ui from './styles.module.css'

export default function Menu() {
  return (
    <nav className={ui.nav}>
      <Link href="/">
        <img src="/amplus_logo.svg" alt="logo_de_amplus" />
      </Link>

      <Link href="/">
        Inicio
      </Link>

      <Link href="/nosotros">
        Nosotros
      </Link>

      <Link href={"/servicios"}>
        Servicios
      </Link>

      <Link href={"/productos"}>
        Productos
      </Link>

      <Link href="/contacto">
        Contacto
      </Link>

    </nav>
  );
}
