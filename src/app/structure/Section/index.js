import React from "react";
import ui from "./styles.module.scss";

const divider = {
  top: "/stripe_up.svg",
  topInverted: "/stripe_up_invertido.svg",
  bottom: "/stripe_down.svg",
  bottomInverted: "/stripe_down_invertido.svg",
};

/**
 * Render a section for the web page
 * @param {import("./types").PropsSection} props - Props
 * @returns {JSX.Element}
 */
export default function Section({
  children,
  title,
  bottomDivider = "none",
  topDivider = "none",
  id = null
}) {
  return (
    <section className={ui.section} id={typeof(id)==='string' ? id : ''}>
      {topDivider !== "none" ? (
        <img src={divider[topDivider]} alt="divisor_seccion_top" className={`${ui.divider} ${ui.topDivider}`}/>
      ) : <div className={ui.topDivider}></div>}

      <h1>{title}</h1>
      <img src="lines.svg" alt="decoracion_titulo" />

      {children}

      {bottomDivider !== "none" ? (
        <img src={divider[bottomDivider]} alt="divisor_seccion_abajo" className={`${ui.divider} ${ui.lastDivider}`}/>
      ) : <div className={ui.lastDivider}></div>}
    </section>
  );
}
