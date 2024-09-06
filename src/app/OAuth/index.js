"use client";
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export default function OAuth({ children }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_URL_DOMAIN,
        ui_locales: "es",
      }}
    >
      {children}
    </Auth0Provider>
  );
}
