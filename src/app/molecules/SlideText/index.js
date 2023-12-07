"use client";
import React from "react";
import ui from "./styles.module.css";

export default function FallingText({
  animationSpeed = 2,
  words = ["Hola", "Mundo"],
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const textElementRef = React.useRef();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, animationSpeed * 1000);

    return () => clearInterval(interval);
  }, [animationSpeed]);

  React.useEffect(() => {
    if (textElementRef.current) {
      textElementRef.current.style.animation = "none";
      setTimeout(() => {
        textElementRef.current.style.animation = `${ui.fallIn} ${animationSpeed}s infinite`;
      }, 0);
    }
  }, [currentIndex, animationSpeed]);

  return <p ref={textElementRef}><span>{words[currentIndex]}</span></p>;
}
