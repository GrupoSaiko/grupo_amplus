import ui from "./page.module.css";

export default function Home() {
  return (
    <>
      <video autoPlay loop muted>
        <source src="/Inicio 4.0.mp4" type="video/mp4" />
      </video>
      <div className={ui.slide1}></div>
    </>
  );
}
