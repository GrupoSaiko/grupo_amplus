"use client";
import React, { useState, useEffect } from "react";

/**
 * @param {import("./types").HomeAnimation}
 * @returns {JSX.Element}
 */
const HomeAnimation = ({ child1 = <> </>, child2 = <></>, child3 = <></> }) => {
  const [activeContainer, setActiveContainer] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContainer((prevContainer) => (prevContainer % 3) + 1);
    }, getDuration(activeContainer) * 1000);

    return () => clearInterval(interval);
  }, [activeContainer]);

  const getDuration = (containerNumber) => {
    switch (containerNumber) {
      case 1:
        return 6;
      case 2:
        return 6;
      case 3:
        return 4;
      default:
        return 0;
    }
  };

  return (
    <>
      <>{activeContainer !== 1 ? null : child1}</>
      <>{activeContainer !== 2 ? null : child2}</>
      <>{activeContainer !== 3 ? null : child3}</>
    </>
  );
};

export default HomeAnimation;
