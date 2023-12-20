import Link from 'next/link';
import React from 'react';
import ui from './styles.module.css'

/**
 * Render element to display services
 * @param {React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>} props - Props
 * @returns {JSX.Element}
 */
export default function Service(props) {
  return (
    <h2 {...props} className={`${ui.service} ${props.className}`} ></h2>
  )
}
