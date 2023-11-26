"use client";
import About from '@/components/About'
import CaseStudy from '@/components/CaseStudy';
import Hire from '@/components/Hire';
import Services from '@/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <About/>
    <Services/>
    <CaseStudy/>
    <Hire/>
    </>
  )
}
