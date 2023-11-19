import React from "react";
import Input from "../atoms/Text";
import ui from "./styles.module.css";
import ContainerInput from "../atoms/ContainerInput";
import Label from "../atoms/Label";
import NativeTextArea from "../atoms/NativeTextArea";
import Button from "../atoms/Button";

export default function Contacto() {
  return (
    <div className={ui.contact}>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.97843794795!2d-100.38876158969263!3d25.672009477314152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662960ac071e681%3A0xb8752e2134218d55!2sGrupo%20Saiko%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1700351861909!5m2!1ses-419!2smx"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={ui.formContact}>
        <p>
          En Grupo Amplus, estamos aquí para escucharte. Queremos ser parte de
          tus proyectos, responder a tus preguntas y ayudarte a alcanzar tus
          metas. Ya sea que tengas una pregunta específica, una sugerencia
          brillante , nuestro equipo está listo para recibir tus mensajes.
        </p>

        <form>
          <ContainerInput>
            <Label displayRequiredSymbol={true} htmlFor="nombre">
              Nombre
            </Label>
            <Input
              placeholder="Escribe aquí"
              autoComplete="off"
              type="text"
              id="nombre"
            />
          </ContainerInput>

          <ContainerInput>
            <Label displayRequiredSymbol={true} htmlFor="telefono">
              Teléfono
            </Label>
            <Input
              placeholder="Escribe aquí"
              autoComplete="off"
              type="tel"
              id="telefono"
              title="Digita un número telefónico de 10 dígitos"
              minLength={10}
              pattern="^[1-9]\d{9}$"
            />
          </ContainerInput>

          <ContainerInput>
            <Label displayRequiredSymbol={true} htmlFor="correo">
              Correo
            </Label>
            <Input
              placeholder="Escribe aquí"
              autoComplete="off"
              type="email"
              id="correo"
            />
          </ContainerInput>

          <ContainerInput>
            <Label htmlFor="empresa">Nombre de la empresa </Label>
            <Input
              placeholder="Escribe aquí (Opcional)"
              autoComplete="off"
              type="text"
              id="empresa"
            />
          </ContainerInput>

          <ContainerInput>
            <Label htmlFor="mensaje">Mensaje</Label>
            <NativeTextArea
              placeholder="Escribe aquí (Opcional)"
              id="mensaje"
            />
          </ContainerInput>
        </form>
        <Button>Enviar</Button>

      </div>
    </div>
  );
}
