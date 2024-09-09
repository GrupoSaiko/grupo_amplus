"use client";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ui from "./styles.module.scss";

export default function ProfileOverview() {
  const auth = useAuth0();

  const handleLogin = async () => {
    await auth.loginWithPopup();
  };

  if (auth.isLoading) return <></>;

  if (auth.isAuthenticated) {
    return (
      <div className={ui.profileOverview}>
        <img src={auth.user.picture} alt="foto_de_perfil_sesion" />
        <div>
          <b>{auth.user.email}</b>
          <p onClick={() => auth.logout({ returnTo: window.location.origin })}>
            Cerrar sesión
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={ui.profileOverview}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
        alt="foto_de_perfil_invitado"
      />
      <div>
        <b>Invitado</b>
        <p onClick={handleLogin}>Iniciar sesión</p>
      </div>
    </div>
  );
}
