import React from "react";
import ui from "./styles.module.css";
import Link from "next/link";

/**
 * Render information about amplus
 * @param {import('./types').PropsAboutAmplus} props - Props
 * @returns {JSX.Element}
 */
export default function AboutAmplus({
  content,
  imageSource,
  title,
  id,
  hrefs = [],
  backward = "#",
  forward = "#",
}) {
  return (
    <section className={ui.us} id={id}>
      <div>
        <h1>{title}</h1>
        {/* {hrefs.map((item, i) => <Link key={`${item.title}_${item.link}_${i}`} href={item.link}>{item.title}</Link>)} */}
      </div>

      <div className={ui.navigation}>
        <Link className={backward === "#" ? 'disabled' : null} href={backward}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
        </Link>

        <Link className={forward==="#" ? 'disabled' : null} href={forward}>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        </Link>

      </div>

      <img src={imageSource} alt={title} />

      <p>{content}</p>
    </section>
  );
}
