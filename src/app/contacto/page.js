import React from "react";
import ui from "./styles.module.css";
import {
  FormContactContainer,
  Name,
  Email,
  Enterprise,
  Message,
  Phone,
  SubmitContact,
  FormContact,
} from "../structure/FormContact";
import Maps from "../molecules/Maps";
import GrupoSaikoSocialMedia from "../molecules/GrupoSaikoSocialMedia";
import Title from "../atoms/Title";

export default function Contacto() {
  return (
    <>
    <Title id="contacto">Contacto</Title>

    <div className={ui.contact} >
      <div className={ui.formContact}>
        <p>
          Queremos ser parte de
          tus proyectos, responder a tus preguntas y ayudarte a alcanzar tus
          metas. Ya sea que tengas una pregunta específica, una sugerencia
          brillante , nuestro equipo está listo para recibir tus mensajes.
        </p>

        <FormContactContainer>
          <FormContact>
            <Name />
            <Email />
            <Phone />
            <Enterprise />
            <Message />
          </FormContact>

          <SubmitContact />
        </FormContactContainer>
      </div>
      <div>
        <Maps
          contact={<GrupoSaikoSocialMedia withText={false} />}
          address="Blvd Gustavo Díaz Ordaz 3057, Col. Santa María, 64650 Monterrey, N.L."
          phone="+52 81 8215 5100"
          title="Grupo amplus"
          link="https://maps.app.goo.gl/nugDPe1aL3KcACwM9"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-100.38780659437182%2C25.670858704135025%2C-100.38439482450487%2C25.673060997317517&amp;layer=mapnik&amp;marker=25.67195985581232%2C-100.38610070943832"
        />
      </div>
    </div>
    </>
  );
}
