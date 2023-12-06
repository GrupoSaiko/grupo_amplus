"use client";
import Button from "@/app/atoms/Button";
import Label from "@/app/atoms/Label";
import Input from "@/app/atoms/Text";
import useClientes from "@/app/customHooks/useClientes";
import React from "react";
import ui from "./styles.module.css";

export default function Clientes() {
  const hook = useClientes();

  return (
    <div>
      <form className={ui.searchCustomer}>
        <div>
          <Label maxLength={13} currentLength={hook.rfc.length}>
            RFC
          </Label>
          <Input
            type="text"
            maxLength={13}
            value={hook.rfc}
            onChange={(e) => hook.setRfc(e.target.value)}
          />
        </div>

        <Button>Buscar</Button>
        <Button type="button">Agregar</Button>
      </form>
    </div>
  );
}
