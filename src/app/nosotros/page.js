import React from "react";
import About from "../About";
import ui from "./styles.module.css";
import AboutAmplus from "../AboutAmplus";

export default function Nosotros() {
  return (
    <div className={ui.aboutUs}>
      <AboutAmplus
        forward="#historia"
        title="Nosotros"
        content="Somos una empresa tecnológica especializada en el desarrollo de
            software a medida, tecnologías web y sistemas de información,
            ofrecemos la mejor calidad de servicio a nuestros clientes."
        imageSource="/nosotros.jpeg"
        id="nosotros"
      />

      <AboutAmplus
        backward="#nosotros"
        forward="#vision"
        title="Historia"
        content="Grupo Amplus nace con el propósito de integrar talento, para
              lograr ofrecer servicios de alta calidad. Amplus integra talento
              humano y empresas establecidas con un propósito común, el cual
              esta alienada a nuestra Misión y Visión."
        imageSource="/historia.jpeg"
        id="historia"
      />

      <AboutAmplus
        backward="#historia"
        title="Visión"
        content="Ser una organización líder, que agrupe a personas físicas y
              morales, con el talento humano de excelencia para entregar
              servicios de tecnologías de información de calidad en forma
              proactiva y alineados a generar impacto positivo en el negocio del
              cliente."
        imageSource="/vision.jpeg"
        id="vision"
      />

      {/* Ser una organización líder, que agrupe a personas físicas y
              morales, con el talento humano de excelencia para entregar
              servicios de tecnologías de información de calidad en forma
              proactiva y alineados a generar impacto positivo en el negocio del
              cliente. */}
      {/* <section className={ui.us}>

          <img src="/nosotros.jpeg" alt="equipo_de_ti" />

          <h1>Nosotros</h1>
          <p>
            Somos una empresa tecnológica especializada en el desarrollo de
            software a medida, tecnologías web y sistemas de información,
            ofrecemos la mejor calidad de servicio a nuestros clientes.
          </p>
        </section>

        <section>
          <h2>Historia</h2>
          <p>
              Grupo Amplus nace con el propósito de integrar talento, para
              lograr ofrecer servicios de alta calidad. Amplus integra talento
              humano y empresas establecidas con un propósito común, el cual
              esta alienada a nuestra Misión y Visión.
            </p>
        </section> */}

      {/* <div className={ui.aboutUsCards}>
          <About
            name="Ernesto Berlanga"
            rol="Director General"
            picture="/ernesto.png"
          />

          <About
            name="Delia Díaz"
            rol="Director Admin & Finanzas"
            picture="/delia.png"
          />

          <About
            name="Adrian Alardin"
            rol="Cloud Solutions Specialist"
            picture="/adrian.png"
          />

          <About
            name="José Luis"
            rol="Web Developer"
            picture="/jose_luis.png"
          />

          <About name="Alvaro Lopez" rol="Cloud Solutions " />
        </div> */}
    </div>
  );
}
