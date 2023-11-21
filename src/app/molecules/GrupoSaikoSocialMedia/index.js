import SocialMedia from "@/app/atoms/SocialMedia";
import React from "react";

export default function GrupoSaikoSocialMedia() {
  return (
    <div style={{
        display: "flex",
        gap:"0 7.55px",
        justifyContent:"center"
    }}>
      <SocialMedia
        socialMedia="instagram"
        link="https://www.instagram.com/grupo_saiko/"
      >
        grupo_saiko
      </SocialMedia>

      <SocialMedia
        socialMedia="facebook"
        link="https://www.facebook.com/GrupoSaiko"
      >
        Saiko
      </SocialMedia>

      <SocialMedia socialMedia="twitter" link="https://twitter.com/GrupoSaiko">
        @GrupoSaiko
      </SocialMedia>

      <SocialMedia
        socialMedia="linkedin"
        link="https://www.linkedin.com/company/grupo-saiko-s-a-de-c-v-/"
      >
        Grupo Saiko
      </SocialMedia>
    </div>
  );
}
