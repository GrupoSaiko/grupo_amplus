import React from 'react'
import ui from './styles.module.css';

/**
 * Render an input element
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>} props - Props
 * @returns {JSX.Element}
 */
export default function Input(props) {
  return (
    <input type="text" className={ui.input} {...props}/>
  )
}
