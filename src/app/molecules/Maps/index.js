import React from "react";
import ui from "./styles.module.css";
import Spinner from "@/app/atoms/Spinner";

/**
 * Render the google maps iframe
 * @param {import("./types").PropsMaps} props - Props
 * @returns {JSX.Element}
 */
export default function Maps({ src }) {
  return (
    <div className={ui.googleMaps}>
      <div className={ui.loadingMap}>
        <p>Cargando mapa</p>
        <Spinner />
      </div>

      <iframe
        src={src}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
