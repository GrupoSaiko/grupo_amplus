import Link from "next/link";
import Button from "./atoms/Button";
import ui from "./page.module.css";
export default function Home() {
  return (
    <div className={ui.slide1}>
      <article className={ui.amplus}>
        <section>
          <h1>Uniendo Talentos para Transformar Resultados</h1>
          <p>
            Fusionamos talento y experiencia para ofrecer servicios TI de alta
            calidad y soluciones impactantes
          </p>

          <Link href={"/contacto"}>
            <Button>Contactanos</Button>
          </Link>
        </section>
      </article>
    </div>
  );
}
