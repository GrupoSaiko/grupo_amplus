import React from "react";
import ui from "./styles.module.css";

const list = {
  instagram: "/ig.png",
  facebook: "/facebook.png",
  twitter: "/twitter.png",
  linkedin: "/linkedin.png",
  youtube:"/youtube.png"
};

/**
 * Render the social media icon
 * @param {import('./types').SocialMediaI} props - Props
 * @returns {JSX.Element}
 */
export default function SocialMedia({
  children = "??",
  socialMedia = "",
  link,
  withText = true,
}) {
  return (
    <a className={`${ui.socialMedia} link`} href={link} target="_blank">
      <img
        src={list[socialMedia]}
        alt={`${list[socialMedia] || "not_found"}_logo`}
      />

      {withText ? children : null}
    </a>
  );
}
