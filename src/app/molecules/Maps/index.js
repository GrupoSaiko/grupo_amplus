"use client";
import React, { useEffect, useRef } from "react";
import ui from "./styles.module.css";
import Spinner from "@/app/atoms/Spinner";
import * as l from "leaflet";
import { v4 as uuidv4 } from "uuid";

/**
 * Render the google maps iframe
 * @param {import("./types").PropsMaps} props - Props
 * @returns {JSX.Element}
 */
export default function Maps({
  src,
  address,
  phone = null,
  title,
  contact = <></>,
  link = null,
}) {
  return (
    <div className={ui.googleMaps}>
      <div className={ui.loadingMap}>
        <p>Cargando mapa</p>
        <Spinner />
      </div>

      <div className={ui.titleMap}>
        <p>{title}</p>
        <div>{contact}</div>
      </div>

      <div className={ui.footerMap}>
        {link !== null ? (
          <a target="_blank" href={link}>
            {address}
          </a>
        ) : (
          <p>{address}</p>
        )}

        {phone !== null ? <p>{phone}</p> : null}
      </div>
      <iframe src={src}></iframe>
    </div>
  );
}
