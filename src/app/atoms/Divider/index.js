import React from "react";
import { divider } from "@/app/structure/Section";
import ui from "./styles.module.scss";

/**
 * Render a dividr between sections of the page
 * @param {import('./types').PropsDivider} props - Props
 * @returns {JSX.Element}
 */
export default function Divider({ position = "bottom", type = "bottom" }) {
  return <img src={divider[type]} alt="division_seccion" />;
}
