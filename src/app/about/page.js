// src/app/about/page.js
'use client'

import About from '../../components/sections/About'
import Header from '../../components/sections/Header'
import Footer from '../../components/sections/Footer'

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <About />
      <Footer />
    </main>
  )
}
