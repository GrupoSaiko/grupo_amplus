import React from "react";
import ui from "./styles.module.css";
import Spinner from "@/app/atoms/Spinner";

/**
 * Render the google maps iframe
 * @param {import("./types").PropsMaps} props - Props
 * @example
*       <Maps
          contact={<GrupoSaikoSocialMedia withText={false}/>}
          address="Eje Metropolitano 30 3057, Cumbres del Valle, 64640 Monterrey, N.L."
          phone="+52 81 8215 5100"
          title="Grupo Saiko"
          link="https://maps.app.goo.gl/yaNyJ4MrQm52p3XW6"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-100.38780659437182%2C25.670858704135025%2C-100.38439482450487%2C25.673060997317517&amp;layer=mapnik&amp;marker=25.67195985581232%2C-100.38610070943832"
        />
 * @returns {JSX.Element}
 */
export default function Maps({
  src,
  address,
  phone = null,
  title,
  contact = <></>,
  link = null,
}) {
  return (
    <>
      <div className={ui.titleMap}>
        <p>{title}</p>
        <div>{contact}</div>
      </div>

      <div className={ui.googleMaps}>
        <div className={ui.loadingMap}>
          <p>Cargando mapa</p>
          <Spinner />
        </div>

        <iframe src={src}></iframe>
      </div>

      <div className={ui.footerMap}>
        {link !== null ? (
          <a target="_blank" href={link}>
            {address}
          </a>
        ) : (
          <p>{address}</p>
        )}

        {phone !== null ? <p>{phone}</p> : null}
      </div>
    </>
  );
}
