import ui from "./page.module.css";
export default function Home() {
  return (
    <div className={ui.slide1}>
        <article className={ui.amplus}>
          <section>
            <h1>Uniendo Talentos para Transformar Resultados</h1>
            <p>
              Fusionamos talento y experiencia para ofrecer servicios de alta
              calidad y soluciones impactantes
            </p>

            <button>Contactanos</button>
          </section>
        </article>

        <article className={ui.objetivos}>
          <section>
            <div className={ui.subtitle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h2>Historia</h2>
            </div>

            <p>
              Grupo Amplus nace con el propósito de integrar talento, para
              lograr ofrecer servicios de alta calidad. Amplus integra talento
              humano y empresas establecidas con un propósito común, el cual
              esta alienada a nuestra Misión y Visión.
            </p>
          </section>
          <section>
            <div className={ui.subtitle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>

              <h2>Misión</h2>
            </div>
            <p>
              Entregar consultoría y servicios de tecnologías de última
              generación, alineados a “Industria 4.0”, con un sentido humano y
              social garantizando la entera satisfacción del cliente y el
              crecimiento integral del talento humano que forma la organización.
            </p>
          </section>
          <section>
            <div className={ui.subtitle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>

              <h2>Visión</h2>
            </div>
            <p>
              Ser una organización líder, que agrupe a personas físicas y
              morales, con el talento humano de excelencia para entregar
              servicios de tecnologías de información de calidad en forma
              proactiva y alineados a generar impacto positivo en el negocio del
              cliente.
            </p>
          </section>
        </article>
      </div>
  );
}
