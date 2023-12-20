"use client";

import ContainerInput from "@/app/atoms/ContainerInput";
import Label from "@/app/atoms/Label";
import NativeTextArea from "@/app/atoms/NativeTextArea";
import Input from "@/app/atoms/Text";
import useContact from "@/app/customHooks/useContact";
import React, { createContext, useContext, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Error from "@/app/atoms/Error";
import Button from "@/app/atoms/Button";
import Spinner from "@/app/atoms/Spinner";
import { v4 as uuidv4 } from "uuid";
import { ClientJS } from 'clientjs';

/**
 * @type {import("react").Context<import("./types").ContextFormContact|undefined>}
 */
const ContextContainer = createContext(undefined);

export function FormContactContainer({ children = <></> }) {
  const form = useContact();
  useEffect(()=>{
    const client = new ClientJS();

   form.setBrowserInfo(client.getOS(),client.getBrowser());

  },[]);
  return (
    <ContextContainer.Provider value={{ ...form, idForm: uuidv4() }}>
      {children}
    </ContextContainer.Provider>
  );
}

/**
 * Render the form tag
 * @param {import("./types").PropsFormContact} props - Props
 * @returns {JSX.Element}
 */
export function FormContact(props) {
  const formProps = { ...props };
  delete formProps.onSended;

  const hook = useContext(ContextContainer);
  return (
    <form
      {...formProps}
      id={hook.idForm}
      onSubmit={hook.form.handleSubmit(hook.sendEmail, console.error)}
    >
      {props.children}
    </form>
  );
}

export function Name() {
  const hook = useContext(ContextContainer);

  return (
    <Controller
      render={({ field }) => (
        <ContainerInput>
          <Label
            maxLength={256}
            currentLength={hook.form.control._formValues["name"].length}
            displayRequiredSymbol={true}
            htmlFor="nombre"
          >
            Nombre
          </Label>
          <Input
            {...field}
            placeholder="Escribe aquí"
            autoComplete="off"
            type="text"
            id="nombre"
            maxLength={256}
          />
          <ErrorMessage
            errors={hook.form.formState.errors}
            name="name"
            render={({ message }) => <Error>{message}</Error>}
          />
        </ContainerInput>
      )}
      defaultValue={""}
      name="name"
      control={hook.form.control}
    />
  );
}

export function Phone() {
  const hook = useContext(ContextContainer);

  return (
    <Controller
      render={({ field }) => (
        <ContainerInput>
          <Label
            maxLength={10}
            currentLength={hook.form.control._formValues["phone"].length}
            displayRequiredSymbol={true}
            htmlFor="telefono"
          >
            Teléfono
          </Label>
          <Input
            {...field}
            placeholder="Escribe aquí"
            autoComplete="off"
            type="tel"
            maxLength={10}
            id="telefono"
            title="Digita un número telefónico de 10 dígitos"
            minLength={10}
            pattern="^[1-9]\d{9}$"
          />
          <ErrorMessage
            errors={hook.form.formState.errors}
            name="phone"
            render={({ message }) => <Error>{message}</Error>}
          />
        </ContainerInput>
      )}
      defaultValue={""}
      name="phone"
      control={hook.form.control}
    />
  );
}

export function Email() {
  const hook = useContext(ContextContainer);

  return (
    <Controller
      render={({ field }) => (
        <ContainerInput>
          <Label
            maxLength={256}
            currentLength={hook.form.control._formValues["email"].length}
            displayRequiredSymbol={true}
            htmlFor="correo"
          >
            Correo
          </Label>
          <Input
            {...field}
            placeholder="Escribe aquí"
            autoComplete="off"
            type="email"
            id="correo"
          />
          <ErrorMessage
            errors={hook.form.formState.errors}
            name="email"
            render={({ message }) => <Error>{message}</Error>}
          />
        </ContainerInput>
      )}
      defaultValue={""}
      name="email"
      control={hook.form.control}
    />
  );
}

export function Enterprise() {
  const hook = useContext(ContextContainer);

  return (
    <Controller
      render={({ field }) => (
        <ContainerInput>
          <Label
            currentLength={
              hook.form.control._formValues["enterprise"]?.length || 0
            }
            maxLength={256}
            htmlFor="empresa"
          >
            Empresa
          </Label>
          <Input
            {...field}
            placeholder="Escribe aquí (Opcional)"
            autoComplete="off"
            name="enterprise"
            type="text"
            id="empresa"
          />
          <ErrorMessage
            errors={hook.form.formState.errors}
            name="enterprise"
            render={({ message }) => <Error>{message}</Error>}
          />
        </ContainerInput>
      )}
      defaultValue={""}
      name="enterprise"
      control={hook.form.control}
    />
  );
}

export function Message() {
  const hook = useContext(ContextContainer);
  return (
    <Controller
      render={({ field }) => (
        <ContainerInput>
          <Label
            currentLength={
              hook.form.control._formValues["message"]?.length || 0
            }
            maxLength={1000}
            htmlFor="mensaje"
          >
            Mensaje
          </Label>
          <NativeTextArea
            {...field}
            placeholder="Escribe aquí (Opcional)"
            id="mensaje"
            maxLength={1000}
          />
          <ErrorMessage
            errors={hook.form.formState.errors}
            name="message"
            render={({ message }) => <Error>{message}</Error>}
          />
        </ContainerInput>
      )}
      defaultValue={""}
      name="message"
      control={hook.form.control}
    />
  );
}

export function SubmitContact() {
  const hook = useContext(ContextContainer);

  if (hook.isSendingEmail)
    return (
      <Button type="button" disabled>
        <Spinner />
      </Button>
    );

  return (
    <Button type="submit" form={hook.idForm}>
      Enviar
    </Button>
  );
}
