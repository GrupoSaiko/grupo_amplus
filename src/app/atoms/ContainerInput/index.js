import React from "react";
import ui from "./styles.module.css";

export default function ContainerInput({ children = <></> }) {
  return <div className={ui.containerInput}>{children}</div>;
}
