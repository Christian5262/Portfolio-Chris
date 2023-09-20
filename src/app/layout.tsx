"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
const inter = Inter({ subsets: ['latin'] })
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Link } from "react-scroll"
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <NavBar />
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  )
}
