"use client";
import React, { useEffect, useState } from "react";

export default function HomeVideo() {
  const [state, setState] = useState(undefined);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    const urlVideo = isDesktop ? "/Inicio 6.1.mp4" : "/home_mobile.mp4";

    setState(urlVideo);
  }, []);

  return (
    <video autoPlay muted loop>
      {typeof state === "string" ? (
        <source src={state} type="video/mp4" />
      ) : null}
      {/* <source src="/Inicio 6.1.mp4" type="video/mp4" /> */}
    </video>
  );
}
