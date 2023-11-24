import React from 'react'
import Logo from '../../assets/Logo.svg'
import Agents from '../../assets/Agents.svg'
import EmerHistory from '../../assets/EmerHistory.svg'
import Home from '../../assets/Home.svg'
import Analitics from '../../assets/Analitics.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className='nav'>
       <div className='logo'>
            <Image src={Logo} alt={'logo'} /> 
        </div>
        <div className='icons'>
            <Link href={'/panel'}>
               <Image src={Home} alt={'home'} /> 
            </Link>
        </div>
        <div className='icons'>
            <Link href={'/agents'}>
               <Image src={Agents} alt={'home'} /> 
            </Link>
        </div>
        <div className='icons'>
            <Link href={'/history'}>
               <Image src={EmerHistory} alt={'home'} /> 
            </Link>
        </div>
        <div className='icons'>
            <Link href={'/analytics'}>
               <Image src={Analitics} alt={'home'} /> 
            </Link>
        </div>
    </div>
  )
}
