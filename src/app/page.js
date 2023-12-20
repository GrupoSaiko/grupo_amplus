import ui from "./page.module.css";
import HomeAnimation from "./molecules/Home";
import AmplusSlide1 from "./molecules/AmplusSlide1";
import SlideText from "./molecules/SlideText";
import GrupoAmplusSdeRL from "./molecules/GrupoAmplusSdeRL";
import ItemArticle from "./structure/ItemArticle";
import Section from "./structure/Section";

export default function Home() {
  return (
    <>
      <div className={ui.slide1}>
        <video autoPlay muted loop>
          <source src="/Inicio 6.0 Movil.mp4" type="video/mp4" />
        </video>
        {/* <HomeAnimation
          child1={
            <section className={ui.inicio}>
              <SlideText
                animationSpeed={2}
                words={["AMPLUS", "TECNOLOGÍA", "INSPIRACIÓN"]}
              />
            </section>
          }
          child2={
            <div className={ui.slideA}>
              <AmplusSlide1 />
            </div>
          }
          child3={
            <div className={ui.slideB}>
              <GrupoAmplusSdeRL />
            </div>
          }
        /> */}
      </div>

      <Section
        bgDirection="left"
        id="nosotros"
        title="Nosotros"
        bottomDivider="top"
      >
        <ItemArticle title="Misión" img="/imagen1.png">
          <p>
            Nuestra misión es ayudar a nuestros clientes a alcanzar sus
            objetivos, transformando sus ideas en soluciones creativas que les
            aporten valor y satisfacción.
          </p>
        </ItemArticle>

        <ItemArticle title="Visión" img="/imagen2.png" direction="rightToLeft">
          <p>
            Ser un catalizador del crecimiento de nuestros clientes,
            proporcionando soluciones tecnológicas personalizadas e innovadoras
            que les permitan superar sus desafíos y alcanzar sus objetivos.
          </p>
        </ItemArticle>

        <ItemArticle title="Historia" img="/imagen3.png">
          <p>
            Grupo Amplus, fundada en 2004, se dedica a integrar talento humano y
            ofrecer soluciones tecnológicas de alta calidad. Con más de 18 años
            de experiencia, ha formado un equipo de expertos caracterizados por
            su profesionalismo e innovación. Además, se ha asociado con empresas
            líderes en tecnología, compartiendo una misión y visión de
            excelencia y desarrollo.
          </p>
        </ItemArticle>
      </Section>

      <Section
        bgUrl="/nosotros.jpeg"
        id="servicios"
        title="Servicios"
        bottomDivider="topInverted"
        topDivider="bottom"
      >
        <ItemArticle title="Servicios administrados" img="/imagen4.png">
          <p>
            Solución ideal para las empresas que quieren optimizar sus procesos,
            reducir costos y mejorar su seguridad.
          </p>
          <p>
            Usted puede delegar la gestión, el mantenimiento y el soporte de sus
            recursos en la nube, mientras se enfoca en su negocio.{" "}
          </p>
          <p>
            Tendrá acceso a un equipo de expertos y a las mejores prácticas sin
            tener que invertir en recursos propios.{" "}
          </p>
        </ItemArticle>

        <ItemArticle
          title="Servicios de soporte y acompañamiento"
          img="/imagen5.png"
          direction="rightToLeft"
        >
          <p>
            {" "}
            Nuestro equipo de expertos está dedicado a proporcionar soluciones
            rápidas y eficientes para mantener tus operaciones de TI funcionando
            sin problemas. Con un enfoque proactivo, nos anticipamos a los
            problemas antes de que ocurran, garantizando la continuidad y la
            eficiencia de tus sistemas.{" "}
          </p>
        </ItemArticle>

        <ItemArticle title="Ejecución de proyectos" img="/imagen6.png">
          <p>
            En Amplus, te ofrecemos consultoría de proyectos específicos, tales
            como migración de correo, implementación de SharePoint,
            configuración de Teams y mucho más. Contamos con un equipo de
            expertos certificados por Microsoft que te acompañarán en todo el
            proceso, desde el diseño hasta la ejecución y el soporte.{" "}
          </p>
        </ItemArticle>

        <ItemArticle
          title="Desarrollo de software"
          img="/imagen7.png"
          direction="rightToLeft"
        >
          <p>
            Podemos desarrollar software a medida para cualquier tipo de
            proyecto, ya sea una aplicación móvil, un sistema web, un software
            de gestión, un software educativo, etc. Nos adaptamos a tus
            requerimientos y expectativas, y te entregamos un producto final que
            supere tus estándares de calidad.{" "}
          </p>
        </ItemArticle>
      </Section>

      <Section
        id="productos"
        title="Productos"
        bottomDivider="top"
        topDivider="bottomInverted"
        bgUrl="/historia.jpeg"
        bgDirection="left"
      >
        <ItemArticle
          title="Praxia"
          iframe="https://www.youtube-nocookie.com/embed/LV_5G9tje6I?si=zdZ-YXytYUWMRGDC"
        >
          <ul>
            <li>Ideal para cualquier empresa comercial y/o servicio</li>
            <li>Cumple con requisitos del SAT para la generacion de CFDI</li>
            <li>Carga FDI de proveedores y/o comprobantes de compras</li>

            <li>Alertas y administración de tareas</li>
            <li>
              Cuenta con modulo de ventas, compras, directorio de clientes y
              proveedores, tesorería, entre otros
            </li>
          </ul>
        </ItemArticle>
      </Section>
    </>
  );
}
