import SocialMedia from "@/app/atoms/SocialMedia";
import React from "react";

export default function GrupoSaikoSocialMedia({ withText = true }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0 7.55px",
        justifyContent: "center",
      }}
    >
      <SocialMedia
        socialMedia="instagram"
        link="https://www.instagram.com/grupo_saiko/"
        withText={withText}
      >
        grupo_saiko
      </SocialMedia>

      <SocialMedia
        socialMedia="facebook"
        link="https://www.facebook.com/GrupoSaiko"
        withText={withText}
      >
        Saiko
      </SocialMedia>

      <SocialMedia
        socialMedia="youtube"
        link="https://www.youtube.com/@praxia.amplus"
        withText={withText}
      >
        @praxia.amplus
      </SocialMedia>

      <SocialMedia
        socialMedia="twitter"
        link="https://twitter.com/GrupoSaiko"
        withText={withText}
      >
        @GrupoSaiko
      </SocialMedia>

      <SocialMedia
        socialMedia="linkedin"
        link="https://www.linkedin.com/company/grupo-saiko-s-a-de-c-v-/"
        withText={withText}
      >
        Grupo Saiko
      </SocialMedia>
    </div>
  );
}
