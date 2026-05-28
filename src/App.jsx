import { useEffect } from 'react'
import Lenis from 'lenis'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import Hero from './components/Hero'
import Why from './components/Why'
import Details from './components/Details'
import Highlight from './components/Highlight'
import Products from './components/Products'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.4, autoRaf: true })
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Why />
        <Details />
        <Highlight />
        <Products />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
