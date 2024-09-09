"use client";
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export default function OAuth({ children }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      authorizationParams={{
        redirect_uri:
          typeof window !== "undefined"
            ? window.location.origin
            : process.env.NEXT_PUBLIC_URL_DOMAIN,

        ui_locales: "es-419",
        display: "popup",
      }}
    >
      {children}
    </Auth0Provider>
  );
}
