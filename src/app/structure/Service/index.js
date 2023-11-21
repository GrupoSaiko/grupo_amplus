import React from "react";
import ui from "./styles.module.css";

/**
 * Render a service card of Grupo Amplus
 * @param {import("./types").PropsService} props - Props
 * @returns {JSX.Element}
 */
export default function Service({ content, imgSrc, title }) {
  return (
    <section className={ui.servicio}>
      <img src={imgSrc} alt="jpeg" />
      <div className={ui.servicioContenido}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
}
