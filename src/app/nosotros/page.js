import React from "react";
import ui from "./styles.module.css";
import AboutAmplus from "../AboutAmplus";

export default function Nosotros() {

 
  return (
    <div className={ui.aboutUs}>
      <AboutAmplus
        forward="#historia"
        title="Nosotros"
        content="Somos una empresa tecnológica especializada en el desarrollo de
            software a medida, tecnologías web y sistemas de información,
            ofrecemos la mejor calidad de servicio a nuestros clientes."
        imageSource="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
        id="nosotros"
        video="/Misión 4.0.mp4"

      />

      <AboutAmplus
        backward="#nosotros"
        forward="#vision"
        title="Historia"
        content="Grupo Amplus nace con el propósito de integrar talento, para
              lograr ofrecer servicios de alta calidad. Amplus integra talento
              humano y empresas establecidas con un propósito común, el cual
              esta alienada a nuestra Misión y Visión."
        imageSource="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132_1280.jpg"
        id="historia"
        video="/Visión 4.0.mp4"
      />

      <AboutAmplus
        backward="#historia"
        title="Visión"
        content="Ser una organización líder, que agrupe a personas físicas y
              morales, con el talento humano de excelencia para entregar
              servicios de tecnologías de información de calidad en forma
              proactiva y alineados a generar impacto positivo en el negocio del
              cliente."
        imageSource="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_1280.jpg"
        id="vision"
        video="/Historia 4.0.mp4"
      />
    </div>
  );
}
