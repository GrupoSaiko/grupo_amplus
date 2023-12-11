import AmplusSlide1 from "./molecules/AmplusSlide1";
import DisplayHide from "./molecules/DisplayHide";
import GrupoAmplusSdeRL from "./molecules/GrupoAmplusSdeRL";
import HomeAnimation from "./molecules/Home";
import SlideText from "./molecules/SlideText";
import ui from "./page.module.css";

export default function Home() {
  return (
    <div className={ui.slide1}>
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
  );
}
