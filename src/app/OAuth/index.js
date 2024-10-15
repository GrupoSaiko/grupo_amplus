"use client";
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export default function OAuth({ children }) {
  const onRedirectCallback = () => {
    // window.location.href = "https://gestor-pro-kappa.vercel.app/"; // Replace with your external URL
    window.location.href = process.env.NEXT_PUBLIC_URL_DOMAIN // Replace with your external URL
  };

  return (
    <Auth0Provider
      onRedirectCallback={onRedirectCallback}
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
