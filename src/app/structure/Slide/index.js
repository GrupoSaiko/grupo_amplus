import React from "react";
import ui from "./styles.module.css";
import Service from "@/app/atoms/service";

/**
 * Render a slide for the page
 * @param {import("./types").PropsSlide} props - Props
 * @returns {JSX.Element}
 */
export default function Slide({
  content,
  imageSrc,
  subtitle,
  leftToRight = false,
  objectPosition = 'center'
}) {
  const stylesContainer = leftToRight
    ? {
        gridTemplateColumns: "55% 40% !important",
      }
    : {};

  const stylesArticle = leftToRight ? { order: "2 !important" } : {};

  return (
    <div className={ui.article} style={stylesContainer}>
      <article className={ui.overviewService} style={stylesArticle}>
        <img src={imageSrc} alt="servicios_administrados" style={{
            objectPosition
        }}/>
      </article>

      <div className={ui.servicesList} style={stylesArticle}>
        <Service className={ui.activeService}>{subtitle}</Service>
        <div>{content}</div>
      </div>
    </div>
  );
}
