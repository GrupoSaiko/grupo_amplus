"use client";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";

export default function OAuthLogin() {
  const auth = useAuth0();

  const handleLogin = async () => {
    await auth.loginWithPopup();
  };

  if (auth.isLoading) return <></>;

  if (auth.isAuthenticated) {
    return <></>;
  }

  return (
    <Link href={"#"} onClick={handleLogin}>
      Login
    </Link>
  );
}
