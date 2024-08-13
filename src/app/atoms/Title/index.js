import React from "react";
import ui from "./styles.module.scss";

/**
 * 
 * @param {JSX.IntrinsicElements.h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>} props 
 * @returns 
 */
export default function Title(props) {
  return (
    <div className={ui.title}>
      <h1 {...props}></h1>
      <img src="/lines.svg" alt="decoracion_titulo" />
    </div>
  );
}
