import React from 'react'
import Image from 'next/image'
import Logo from '../../../assets/Logo2.svg'
import Link from 'next/link'

export default function analytics() {
  return (
    <div className='img'>
      <Image src={Logo} alt={'logo'} />
      <h1>¡Esta página pronto estará disponible!</h1>
      <h4>Estamos trabajando para darte la mejor experiencia</h4>
      <Link href={'/panel'}>
        <button className='btn' >Volver al panel</button>
      </Link>
    </div>
  )
}
