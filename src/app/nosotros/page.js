import React from "react";
import About from "../About";
import ui from "./styles.module.css";

export default function Nosotros() {
  return (
    <main className={ui.container}>
      <div className={ui.aboutUs}>
        <section className={ui.us}>
          <h1>Nosotros</h1>
          <p>
            Somos una empresa tecnológica especializada en el desarrollo de
            software a medida, tecnologías web y sistemas de información,
            ofrecemos la mejor calidad de servicio a nuestros clientes.
          </p>
        </section>

        <div className={ui.aboutUsCards}>
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
          {/* Alvaro Lopez */}

          <About
            name="José Luis"
            rol="Web Developer"
            picture="/jose_luis.png"
          />

          <About name="Alvaro Lopez" rol="Cloud Solutions " />
        </div>
      </div>
    </main>
  );
}
