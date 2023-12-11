"use client";
import React, { useState, useEffect } from "react";

const DisplayHide = ({
  showDuration = 2,
  hideDuration = 1,
  children = <></>,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIsVisible((prevVisible) => !prevVisible);
      },
      isVisible ? showDuration * 1000 : hideDuration * 1000
    );

    return () => clearInterval(interval);
  }, [isVisible, showDuration, hideDuration]);

  if (!isVisible) return <></>;

  return <div>{children}</div>;
};

export default DisplayHide;
