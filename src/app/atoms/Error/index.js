import React from "react";
import ui from "./styles.module.css";

export default function Error({ children = "??" }) {
  return <p className={ui.error}>{children}</p>;
}
