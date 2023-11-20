import React from "react";
import ui from "./styles.module.css";

/**
 * Render the size that the user can type
 * @param {import("./types").LengthInputI} props - Props
 * @returns {JSX.Element}
 */
const LengthInput = ({ current = 0, max = 0 }) => {
  return (
    <>
      <span className={ui.currentLength}>{current}</span>
      <span className={ui.maxLenght}>{max}</span>
    </>
  );
};

/**
 * Render the label tag
 * @param {import('./types').LabelProps} props - Props
 * @returns {JSX.Element}
 */
export default function Label(props) {
  const parsedProps = { ...props };
  delete parsedProps.displayRequiredSymbol;
  delete parsedProps.currentLength;
  delete parsedProps.maxLength;
  return (
    <label
      className={`${ui.label} ${
        props.displayRequiredSymbol === true ? ui.requiredLabel : ""
      }`}
      {...parsedProps}
    >
      {parsedProps.children}

      {typeof props.maxLength === "number" &&
      typeof props.currentLength === "number" ? (
        <LengthInput current={props.currentLength} max={props.maxLength} />
      ) : null}
    </label>
  );
}
