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
          <source src="/inicio.mp4" type="video/mp4" />
        </video>
        <HomeAnimation
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
        />
      </div>

      <Section bgDirection='left' id="nosotros" title="Nosotros" bottomDivider="top">
        <ItemArticle title="Misión" img="/imagen1.png">
          <p>
            Nuestra misión es ayudar a nuestros clientes a alcanzar sus
            objetivos, transformando sus ideas en soluciones creativas que les
            aporten valor y satisfacción.Nos apasiona la innovación y la
            calidad, y nos comprometemos a ofrecer un servicio personalizado y
            profesional.
          </p>
        </ItemArticle>

        <ItemArticle title="Visión" img="/imagen2.png" direction="rightToLeft">
          <p>
            Nos vemos como una organización dinámica y resiliente, capaz de
            adaptarse a los cambios y desafíos del entorno con agilidad y
            eficacia. Nuestra visión es ser un catalizador del crecimiento de
            nuestros clientes, proporcionando soluciones tecnológicas
            personalizadas e innovadoras que les permitan superar sus desafíos y
            alcanzar sus objetivos. Creemos en la transformación constante y en
            la mejora continua, y nos esforzamos por estar a la vanguardia de la
            innovación tecnológica. Nuestro compromiso es con el éxito de
            nuestros clientes y con la creación de valor a largo plazo para
            ellos a través de nuestras soluciones tecnológicas.
          </p>
        </ItemArticle>

        <ItemArticle title="Historia" img="/imagen3.png">
          <p>
            Nos vemos como una organización dinámica y resiliente, capaz de
            adaptarse a los cambios y desafíos del entorno con agilidad y
            eficacia. Nuestra visión es ser un catalizador del crecimiento de
            nuestros clientes, proporcionando soluciones tecnológicas
            personalizadas e innovadoras que les permitan superar sus desafíos y
            alcanzar sus objetivos. Creemos en la transformación constante y en
            la mejora continua, y nos esforzamos por estar a la vanguardia de la
            innovación tecnológica. Nuestro compromiso es con el éxito de
            nuestros clientes y con la creación de valor a largo plazo para
            ellos a través de nuestras soluciones tecnológicas.
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
            Los servicios administrados de infraestructura de TI son la solución
            ideal para las empresas que quieren optimizar sus procesos, reducir
            costos y mejorar su seguridad. Al contratar a un proveedor externo,
            usted puede delegar la gestión, el mantenimiento y el soporte de sus
            recursos en la nube, mientras se enfoca en su negocio. Usted tendrá
            acceso a un equipo de expertos, a las mejores prácticas y a las
            últimas tecnologías, sin tener que invertir en recursos propios.
          </p>
        </ItemArticle>

        <ItemArticle
          title="Servicios de soporte y acompañamiento"
          img="/imagen5.png"
          direction="rightToLeft"
        >
          <p>
            Te ofrecemos servicios de soporte y acompañamiento para el área de
            TI.
          </p>
          <br />
          <p>
            Nuestro equipo de expertos está dedicado a proporcionar soluciones
            rápidas y eficientes para mantener tus operaciones de TI funcionando
            sin problemas. Con un enfoque proactivo, nos anticipamos a los
            problemas antes de que ocurran, garantizando la continuidad y la
            eficiencia de tus sistemas. ¡Permítenos ser tu aliado confiable en
            la gestión de TI!
          </p>
        </ItemArticle>

        <ItemArticle title="Ejecución de proyectos" img="/imagen6.png">
          <ul>
            <li>
              ¿Necesitas ayuda para mejorar la productividad y la colaboración
              de tu equipo?
            </li>
            <li>
              ¿Quieres aprovechar al máximo las herramientas de Microsoft 365?
            </li>
          </ul>
          <br />
          <p>
            En Amplus, te ofrecemos consultoría de proyectos específicos, tales
            como migración de correo, implementación de SharePoint,
            configuración de Teams y mucho más. Contamos con un equipo de
            expertos certificados por Microsoft que te acompañarán en todo el
            proceso, desde el diseño hasta la ejecución y el soporte. No importa
            el tamaño o la complejidad de tu proyecto, nosotros te ayudamos a
            lograr tus objetivos con eficiencia y calidad. Contacta con nosotros
            hoy mismo y descubre cómo podemos transformar tu forma de trabajar
          </p>
        </ItemArticle>

        <ItemArticle
          title="Desarrollo de software"
          img="/imagen7.png"
          direction="rightToLeft"
        >
          <p>
            El desarrollo de software es el proceso de crear, diseñar, probar y
            mantener programas informáticos que resuelven problemas o satisfacen
            necesidades específicas.
          </p>
          <br />
          <p>
            Los servicios de desarrollo de software que te ofrecemos son de alta
            calidad, eficientes y asequibles. Contamos con un equipo de
            desarrolladores experimentados y capacitados en las mejores
            prácticas y metodologías del sector. Podemos desarrollar software a
            medida para cualquier tipo de proyecto, ya sea una aplicación móvil,
            un sistema web, un software de gestión, un software educativo, etc.
            Nos adaptamos a tus requerimientos y expectativas, y te entregamos
            un producto final que supere tus estándares de calidad.
          </p>
        </ItemArticle>
      </Section>

      <Section
        id="productos"
        title="Productos"
        bottomDivider="top"
        topDivider="bottomInverted"
        bgUrl="/historia.jpeg"
        bgDirection='left'
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
