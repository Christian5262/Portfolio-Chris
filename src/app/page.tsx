"use client"
import Image from 'next/image'
import { useState, useEffect, createContext } from 'react'
import HomeSection from "./components/HomeSection"
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  // const [isClient, setIsClient] = useState(false)
  // const Context = createContext()
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])

  return (
    <div>
      <main className='overflow-hidden'>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection/>
        <Footer />
      </main>
    </div>
  )

}
