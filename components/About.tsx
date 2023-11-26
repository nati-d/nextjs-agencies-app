import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { PageAnimator } from './PageAnimator'

const About = () => {
  return (
    <PageAnimator>
    <section className='grid grid-cols-1 lg:grid-cols-2 lg:px-[150px] ' id='about'>
      <div className='lg:px-20 flex-col justify-center h-[400px] py-7 lg:py-[180px]'>
        <h1 className='flex gap-2 text-4xl lg:text-5xl font-light'>Great <h1 className='purple font-bold'> Product </h1> is </h1>
        <h1 className='flex gap-2 text-4xl lg:text-5xl font-bold'>built by great  <h1 className='purple'>teams</h1></h1>
        <p className='my-10 text-base'>We help build and manage a team of world-class developers to bring your vision to life</p>
        <Button type='button' title='Lets Get Started' variant='blue'/>
      </div>
      <div className='flex items-center justify-center lg:py-[100px]'>
        <Image src='/web-dev.png' width={600} height={400} alt='hero' />
      </div>
    </section>
    </PageAnimator>
  )
}

export default About
