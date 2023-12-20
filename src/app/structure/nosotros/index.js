import Service from "@/app/atoms/service";
import React from "react";
import ui from "./styles.module.css";
import Slide from "../Slide";

/**
 * Seccion
 * @param {import("./types").PropsServicios} props - Props
 * @returns {JSX.Element}
 */
export default function Nosostros({ title = "Nosotros" }) {
  return (
    <div className={ui.container}>
      <section className={ui.section} id="nosotros">
        <div>
          <h1 className={ui.title}>
            <span>{title}</span>
            <img src="lines.svg" alt="" />
          </h1>
          <Slide
            content={
              <>
                <p>
                  Nuestra misión es ayudar a nuestros clientes a alcanzar sus
                  objetivos, transformando sus ideas en soluciones creativas que
                  les aporten valor y satisfacción.{" "}
                </p>

                <p>
                  Nos apasiona la innovación y la calidad, y nos comprometemos a
                  ofrecer un servicio personalizado y profesional.{" "}
                </p>
              </>
            }
            objectPosition="top"
            imageSrc="/imagen1.png"
            subtitle="Misión"
            leftToRight={true}
          />

          <Slide
            objectPosition="bottom"
            content={
              <>
                <p>
                  Nos vemos como una organización dinámica y resiliente, capaz
                  de adaptarse a los cambios y desafíos del entorno con agilidad
                  y eficacia.{" "}
                </p>
                <p>
                  Nuestra visión es ser un catalizador del crecimiento de
                  nuestros clientes, proporcionando soluciones tecnológicas
                  personalizadas e innovadoras que les permitan superar sus
                  desafíos y alcanzar sus objetivos.{" "}
                </p>
                <p>
                  Creemos en la transformación constante y en la mejora
                  continua, y nos esforzamos por estar a la vanguardia de la
                  innovación tecnológica.{" "}
                </p>
                <p>
                  Nuestro compromiso es con el éxito de nuestros clientes y con
                  la creación de valor a largo plazo para ellos a través de
                  nuestras soluciones tecnológicas.{" "}
                </p>
              </>
            }
            imageSrc="/imagen2.png"
            subtitle="Visión"
            leftToRight={false}
          />

          <Slide
            objectPosition="top"
            content={
              <>
                <p>
                  Nos vemos como una organización dinámica y resiliente, capaz
                  de adaptarse a los cambios y desafíos del entorno con agilidad
                  y eficacia.{" "}
                </p>
                <p>
                  Nuestra visión es ser un catalizador del crecimiento de
                  nuestros clientes, proporcionando soluciones tecnológicas
                  personalizadas e innovadoras que les permitan superar sus
                  desafíos y alcanzar sus objetivos.{" "}
                </p>
                <p>
                  Creemos en la transformación constante y en la mejora
                  continua, y nos esforzamos por estar a la vanguardia de la
                  innovación tecnológica.{" "}
                </p>
                <p>
                  Nuestro compromiso es con el éxito de nuestros clientes y con
                  la creación de valor a largo plazo para ellos a través de
                  nuestras soluciones tecnológicas.
                </p>
              </>
            }
            imageSrc="/imagen3.png"
            subtitle="Historia "
            leftToRight={true}
          />
        </div>
      </section>

      <img src="/stripe_up.svg" alt="división_de_seccion" />
    </div>
  );
}
