import React from "react";
import ui from "./styles.module.css";

/**
 * Render the label tag
 * @param {import('./types').LabelProps} props - Props
 * @returns {JSX.Element}
 */
export default function Label(props) {
  const parsedProps = { ...props };
  delete parsedProps.displayRequiredSymbol;

  return (
    <label
      className={`${ui.label} ${
        props.displayRequiredSymbol === true ? ui.requiredLabel : ''
      }`}
      {...parsedProps}
    ></label>
  );
}
