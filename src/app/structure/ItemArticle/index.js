import React from "react";
import ui from "./styles.module.scss";

/**
 * Render an item for the article of the web page
 * @param {import('./types').PropsArticleItem} props - Props
 * @returns {JSX.Element}
 */
export default function ItemArticle({
  children,
  img = null,
  title,
  direction = "leftToRight",
  iframe = null,
}) {
  return (
    <article className={ui.containerArticle}>
      {img === null ? (
        <iframe
          src={iframe}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className={direction === "rightToLeft" ? ui.rightToLeftImg : ""}
          allowfullscreen
        ></iframe>
      ) : (
        <img
          src={img}
          alt="contenido_articulo"
          className={direction === "rightToLeft" ? ui.rightToLeftImg : ""}
        />
      )}

      <div>
        <h2 className={direction === "rightToLeft" ? ui.rightToLeftH2 : ""}>
          {title}
        </h2>
      </div>
      <div className={ui.contentArticle}>{children}</div>
    </article>
  );
}
