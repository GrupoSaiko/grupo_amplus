import React from "react";
import ui from "./styles.module.css";
import Service from "../structure/Service";

export default function Servicios() {
  return (
      <div className={ui.containerCards}>
    <div className={ui.container}>


      

      <Service
        content="Te ayudamos a migrar tu correo electrónico a la nube, con seguridad,
            rapidez y eficiencia."
        title="Migración de correo"
        imgSrc="/email.jpeg"
      />

      <Service
        content="Te ofrecemos una solución integral para la gestión de documentos, la
        colaboración y la comunicación en tu organización."
        title="Implementación SharePoint"
        imgSrc="/sharepoint.jpg"
      />

      <Service
        content="Creamos soluciones a medida para tus necesidades, usando las mejores
        tecnologías y metodologías."
        title="Desarrollo de software"
        imgSrc="/desarrollo.jpeg"
      />

      <Service
        content="Nos encargamos del mantenimiento, la actualización y la seguridad de
        tus sistemas, para que tú te enfoques en tu negocio."
        title="Servicios administrados"
        imgSrc="/soporte.jpeg"
      />

      <Service
        content="Te brindamos asesoría, capacitación y soporte técnico para que
        aproveches al máximo las herramientas que te ofrecemos."
        title="Servicios de acompañamiento"
        imgSrc="/learn.jpeg"
      />

</div>
    </div>
  );
}
