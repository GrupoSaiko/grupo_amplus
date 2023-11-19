import React from 'react';
import ui from './styles.module.css';

/**
 * Render a button tag
 * @param {React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>} props - Props
 * @returns {JSX.Element} Render a button tag
 */
export default function Button(props) {
  return (
    <button className={ui.button} {...props}></button>
  )
}
