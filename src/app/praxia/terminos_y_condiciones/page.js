import React from "react";
import ui from "./styles.module.css";
import PraxiaLogo from "@/app/atoms/Praxia_Logo";
import Link from "next/link";

export default function PraxiaTermsAndConditions() {
  return (
    <>
      <section className={ui.termsAndConditions}>
        <div className={ui.mainTitle}>
          <PraxiaLogo />
          <h1>Términos y condiciones</h1>
        </div>
        <h2>Aviso de privacidad</h2>
        <p>
          El presente aviso de privacidad tiene por objeto informarle sobre el
          tratamiento que se les dará a sus datos personales, de acuerdo con lo
          establecido por la Ley Federal de Protección de Datos Personales en
          Posesión de los Particulares y su Reglamento.
        </p>
        <h2>¿Qué datos personales recabamos y para qué fines?</h2>
        <p>
          Para las finalidades señaladas en el presente aviso de privacidad,
          podemos recabar sus datos personales de distintas formas: cuando usted
          nos los proporciona directamente, cuando visita nuestro sitio de
          Internet o utiliza nuestros servicios en línea, y cuando obtenemos
          información a través de otras fuentes de dominio público, que están
          permitidas por la ley.
        </p>
        <p>Los datos personales que recabamos de forma directa son:</p>
        <ul>
          <li>Nombre de la empresa</li>
          <li>Nombre completo de contacto</li>
          <li>Correo electrónico</li>
          <li>Teléfono</li>
          <li>Dirección</li>
          <li>Giro del negocio</li>
        </ul>

        <br />
        <p>Estos datos los utilizamos para las siguientes finalidades:</p>
        <ul>
          <li>Identificarlo y contactarlo</li>
          <li>Ofrecerle y brindarle nuestros productos y servicios</li>
          <li>Atender sus solicitudes, quejas o sugerencias</li>
          <li>
            Realizar propuestas de productos y/o servicios que comercializamos
          </li>
          <li>
            Enviarle información, publicidad o promociones de nuestros productos
            y servicios
          </li>
          <li>Invitarlo a participar en eventos.</li>
          <li>
            Dar soporte a alguna solicitud directa por parte del contacto.
          </li>
        </ul>
        <h2>¿Con quién compartimos sus datos personales y para qué fines?</h2>
        <p>
          Le informamos que sus datos personales son compartidos con las
          siguientes personas, empresas, organizaciones o autoridades distintas
          a nosotros, para los siguientes fines:
        </p>
        <ul>
          <li>
            Proveedores de servicios, para realizar las gestiones relacionadas
            con licencias de software, suscripciones, gestiones administrativas,
            de cobranza y de atención al cliente que sean necesarias.
          </li>
          <li>
            Entidades del mismo grupo corporativo al que pertenecemos, para
            fines estadísticos, de mercadotecnia o de mejora de nuestros
            productos y servicios.
          </li>
          <li>
            Autoridades competentes, cuando exista una obligación legal o una
            orden judicial que así lo requiera.
          </li>
        </ul>
        <h2>
        ¿Cómo puede ejercer sus derechos ARCO y revocar el consentimiento al tratamiento de sus datos personales?
        </h2>
        <p>
          Usted tiene derecho de acceder, rectificar y cancelar sus datos
          personales, así como de oponerse al tratamiento de estos o revocar el
          consentimiento que para tal fin nos haya otorgado, a través de los
          procedimientos que hemos implementado. 
        </p>
        <p>Para conocer dichos
          procedimientos, los requisitos y plazos, se puede poner en contacto
          con nuestro departamento de datos personales en la siguiente dirección
          de correo electrónico: ventas@saiko.mx</p>

          <h2>¿Cómo puede limitar el uso o divulgación de sus datos personales?</h2>

        <p>
          Si usted desea dejar de recibir mensajes promocionales de nuestra
          parte, puede solicitarlo a través del siguiente medio: <Link href={'mailto:ventas@saiko.mx'}>ventas@saiko.mx</Link>
        </p>

        <h2>¿Cómo puede conocer los cambios en este aviso de privacidad?</h2>
        <p>
          El presente aviso de privacidad puede sufrir modificaciones, cambios o
          actualizaciones derivadas de nuevos requerimientos legales, de
          nuestras propias necesidades por los productos o servicios que
          ofrecemos, de nuestras prácticas de privacidad, de cambios en nuestro
          modelo de negocio, o por otras causas. 
        </p>
        <p>Nos comprometemos a mantenerlo
          informado sobre los cambios que pueda sufrir el presente aviso de
          privacidad, a través de nuestro sitio web: <Link href={'https://www.gruposaiko.com'}>https://www.gruposaiko.com</Link>
          </p>
          <p>La fecha de la última actualización al presente aviso de privacidad
          es: 25/07/2024</p>
      </section>
    </>
  );
}
