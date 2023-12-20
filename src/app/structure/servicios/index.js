import Service from "@/app/atoms/service";
import React from "react";
import ui from "./styles.module.css";
import Slide from "../Slide";

/**
 * Seccion
 * @param {import("./types").PropsServicios} props - Props
 * @returns {JSX.Element}
 */
export default function Servicios({ title = "Servicios" }) {
  return (
    <div className={ui.container}>
      <img src="/stripe_down.svg" alt="división_de_seccion" />
      <section className={ui.section}>
        <div>
          <h1 className={ui.title}>
            <span>{title}</span>
            <img src="lines.svg" alt="" />
          </h1>

          <Slide
            subtitle="Servicios administrados"
            objectPosition="top"
            content={
              <>
                <p>
                  Nos encargaremos de asegurar el correcto funcionamiento, la
                  seguridad y la actualización de los sitemas, las redes, los
                  dispositivos y las aplicaciones que utiliza la organización
                  para su operación
                </p>
              </>
            }
            imageSrc="/servicios_administrados.jpg"
            leftToRight={false}
          />

          <Slide
            subtitle="Servicios de asesoría y acompañamiento"
            content={
              <>
                <p>
                  Los servicios de consultoría y acompañamiento TI son una
                  solución integral que permite a las organizaciones mejorar su
                  competitivdad, productividad y rentabilidad, mediante el uso
                  estratégico y eficaz de la tecnología
                </p>
              </>
            }
            imageSrc="/programacion.jpg"
            leftToRight={true}
            objectPosition="top"
          />

          <Slide
            subtitle="Ejecución de proyectos específicos"
            content={
              <>
                <p>
                  Asignamos un consultor que lo asesora y lo acompaña en el
                  desarrollo y la gestión del proyecto de TI, aportando su
                  experiencia, conocimiento y habilidades para lograr el
                  objetivo crear, implementar o mejorar una solución tecnológica
                </p>
              </>
            }
            imageSrc="/asesoria.jpg"

            objectPosition="top"
            leftToRight={false}
          />

          <Slide
            subtitle="Desarrollo de software"
            content={
              <>
                <p>
                  Asignaremos a personal altamente capacitado y con experiencia
                  en el desarrollo de software, para crear, modificar o mejorar
                  soluciones de software que se adapten a sus necesidades y
                  objetivos
                </p>
              </>
            }
            imageSrc="/programador.jpg"
            objectPosition="bottom"

            leftToRight={true}
          />
        </div>
      </section>
      <img src="/stripe_up_invertido.svg" alt="división_de_seccion" />
    </div>
  );
}
