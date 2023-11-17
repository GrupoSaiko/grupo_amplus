import React from "react";
import ui from "./styles.module.css";

export default function Servicios() {
  return (
    <div className={ui.servicios}>
      <article className={ui.article}>
        <section className={ui.section}>
          <div className={ui.title}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
              />
            </svg>

            <h2>Servicios administrados</h2>
          </div>
          <p>
            Deja que nosotros nos ocupemos de la gestión integral de tus
            sistemas y tecnologías. Desde el monitoreo proactivo hasta la
            seguridad de la información y el soporte continuo, garantizamos que
            tu infraestructura tecnológica funcione de manera eficiente y
            segura.
          </p>
        </section>
        <section className={ui.section}>
          <div className={ui.title}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <h2>Servicios de acompañamiento</h2>
          </div>
          <p>
            No solo somos consultores, somos colaboradores a largo plazo.
            Trabajamos codo a codo contigo, alineando nuestras soluciones con
            tus metas estratégicas, proporcionando capacitación constante y
            ajustando nuestros servicios para evolucionar junto con tu empresa.
          </p>
        </section>
        <section className={ui.section}>
          <div className={ui.title}>
            {/* <img src="/public/sharepoint.svg" alt="sharepoint_logo"> */}
            <h2>Implementación SharePoint</h2>
          </div>
          <p>
            Diseñamos y ejecutamos la implementación de SharePoint, la
            plataforma líder en colaboración y gestión de contenidos de
            Microsoft. Desde la configuración inicial hasta la personalización y
            el soporte continuo, nos aseguramos de que SharePoint se alinee
            perfectamente con tus objetivos comerciales.
          </p>
        </section>
        <section className={ui.section}>
          <div className={ui.title}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <h2>Migración de correo</h2>
          </div>
          <p>
            Facilitamos la transición sin problemas de tu plataforma de correo
            electrónico actual a una solución más eficiente y segura. Nuestros
            consultores de TI manejan cada aspecto de la migración, asegurándose
            de que tus datos estén seguros y accesibles en todo momento.
          </p>
        </section>
        <section className={ui.section}>
          <div className={ui.title}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>

            <h2>Desarrollo de Software</h2>
          </div>
          <p>
            Desde aplicaciones empresariales hasta soluciones específicas,
            nuestro equipo de desarrollo de software crea productos
            personalizados para satisfacer tus necesidades únicas. Aportamos
            innovación y eficiencia a través de soluciones tecnológicas a
            medida.
          </p>
        </section>
      </article>
    </div>
  );
}
