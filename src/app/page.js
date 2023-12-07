import AmplusSlide1 from "./molecules/AmplusSlide1";
import SlideText from "./molecules/SlideText";
import ui from "./page.module.css";

export default function Home() {
  return (
    <div className={ui.slide1}>
      <section className={ui.inicio}>
        <SlideText
          animationSpeed={2}
          words={["AMPLUS", "TECNOLOGÍA", "INSPIRACIÓN"]}
        />
      </section>

      <div className={ui.slideA}>
        <AmplusSlide1 />
      </div>
    </div>
  );
}
