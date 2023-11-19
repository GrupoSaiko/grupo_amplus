import React from 'react';
import uiInput from '../Text/styles.module.css';

/**
 * Render a text area tag (native html input)
 * @param {React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>} props - Props
 * @returns {JSX.Element}
 */
export default function NativeTextArea(props) {
  return (
    <textarea className={uiInput.input} {...props}></textarea>
  )
}
