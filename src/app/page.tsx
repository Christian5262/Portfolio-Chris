"use client"
import Image from 'next/image'
import { useState, useEffect, createContext } from 'react'
import HomeSection from "./components/HomeSection"

export default function Home() {
  // const [isClient, setIsClient] = useState(false)
  // const Context = createContext()
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])

  return (
    <div>
      <main className='mx-auto max-w-3xl px-4 '>
        <HomeSection />
      </main>
    </div>
  )

}
