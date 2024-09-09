"use client"
import React, { useContext } from "react";
import Link from "next/link";
import { ContextMenu } from "..";
import OAuthLogin from "@/app/molecules/OAuthLogin";
import ProfileOverview from "@/app/structure/ProfileOverview";

export default function OptionsNavigation() {

const hook = useContext(ContextMenu);

  return (
    <>
      {/* <ProfileOverview/> */}

      <Link onClick={hook.closeMenu} href="/">Inicio</Link>

      <Link onClick={hook.closeMenu} href="/#nosotros">Nosotros</Link>

      <Link onClick={hook.closeMenu} href={"/#servicios"}>Servicios</Link>

      <Link onClick={hook.closeMenu} href={"/#productos"}>Productos</Link>

      <Link onClick={hook.closeMenu} href="/#contacto">Contacto</Link>
    </>
  );
}
