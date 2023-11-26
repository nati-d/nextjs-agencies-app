import { NavList } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex py-3 items-center justify-between px-7 shadow-md shadow-gray-300'>
      <h1 className='font-cursive text-3xl font-bold flex'><h1 className='text-indigo-500'>My</h1>Dev</h1>
      <ul className='hidden gap-10 text-gray-600 lg:flex  '>
        
        {NavList.map(link => (
          <Link href={link.href}>
          <li key={link.key} className='hover:font-bold cursor-pointer'>{link.name}</li>
          </Link>

        ))}
      </ul>

      <div className='hidden lg:flex'>
        <Button type="button" title="Contact Us" variant="gradient" />
      </div>

      <Image src="menu.svg" alt="menu" width={32} height={32} className='block  lg:hidden' />
    </nav>
  )
}

export default Navbar
