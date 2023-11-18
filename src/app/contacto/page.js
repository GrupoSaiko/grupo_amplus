import React from 'react'
import Input from '../atoms/Text'

export default function Contacto() {
    return (
        <form>
            <label htmlFor="">Nombre</label>
            <Input type='text' />

            <label htmlFor="">Teléfono</label>
            <Input type='tel' />

            <label htmlFor="">Correo</label>
            <Input type='email' />

            <label htmlFor="">Nombre de la empresa (opcional)</label>
            <Input type='text' />
        </form>
    )
}
