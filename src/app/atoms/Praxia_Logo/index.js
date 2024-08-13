import React from "react";

export default function PraxiaLogo() {
  return (
    <picture>
      <source
        srcset="/praxia_clean.png"
        media="(prefers-color-scheme: dark)"
      />

      <source
        srcset="/praxia.png"
        media="(prefers-color-scheme: light)"
      />

      <img src="/praxia_clean.png" alt="logotipo_praxia_modo_oscuro" />
    </picture>
  );
}
