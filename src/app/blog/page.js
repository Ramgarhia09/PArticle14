'use client'

import Blog from '../../components/sections/Blog'
import Header from '../../components/sections/Header'
import Footer from '../../components/sections/Footer'

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Blog />
      <Footer />
    </main>
  )
}
