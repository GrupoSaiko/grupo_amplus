import Service from "@/app/atoms/service";
import React from "react";
import ui from "./styles.module.css";

/**
 * Seccion
 * @param {import("./types").PropsServicios} props - Props
 * @returns {JSX.Element}
 */
export default function Productos({ title = "Productos" }) {
  return (
    <div className={ui.container}>
      <img src="/stripe_down_invertido.svg" alt="división_de_seccion" />

      <section className={ui.section}>
        <div>
          <h1 className={ui.title}>
            <span>{title}</span>
            <img src="lines.svg" alt="" />
          </h1>
          <div className={ui.article}>
            <article className={ui.overviewService}>
              <p>
                <span>
                  Sistema de administración.
                  No trabajes para el sistema, Praxia trabaja para ti.
                </span>
              </p>

              <iframe
                src="https://www.youtube.com/embed/LV_5G9tje6I?si=ie0-S8Dor096aMYv"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </article>

            <div className={ui.servicesList}>
              <Service className={ui.activeService}>Praxia</Service>

              <ul className={ui.praxiaItems}>
            <li>Ideal para cualquier empresa comercial y/o servicio</li>
            <li>Cumple con requisitos del SAT para la generacion de CFDI</li>
            <li>Carga FDI de proveedores y/o comprobantes de compras</li>

            <li>Alertas y administración de tareas</li>
            <li>
              Cuenta con modulo de ventas, compras, directorio de clientes y
              proveedores, tesorería, entre otros
            </li>
          </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
