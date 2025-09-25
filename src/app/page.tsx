'use client'

import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'

import Process from '../components/sections/Process'
import Features from '../components/sections/Features'
import CaseStudies from '../components/sections/CaseStudies'
import Benefits from '../components/sections/Benefits'
import Pricing from '../components/sections/Pricing'
import Testimonials from '../components/sections/Testimonials.js'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'
import Footer from '../components/sections/Footer'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
     <Hero />
       <About />
     <Services/>
     <Process />
     <CaseStudies />
     <Benefits />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ/>
      <CTA/>

      <Footer /> 
    </main>
  )
}