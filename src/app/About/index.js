import React from "react";
import Image from "next/image";
import ui from "./styles.module.css";

/**
 * Render information about the team
 * @param {import('./types').AboutProps} Props - Props
 * @returns {JSX.Element}
 */
export default function About({ name, rol, picture = "/gray_avatar.jpg" }) {
  return (
    <article className={ui.about}>
      <Image width={70} height={70} alt={`about_${name}`} src={picture} />

      <div>
        <h2>{name}</h2>
        <p>{rol}</p>
      </div>
    </article>
  );
}
