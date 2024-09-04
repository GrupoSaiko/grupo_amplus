"use client"
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@/app/atoms/Button";
import Link from "next/link";

export default function OAuthLogin() {
  const { loginWithRedirect } = useAuth0();

  return <Link href={'#'} onClick={() => loginWithRedirect()}>Login</Link>;
}
