import { useEffect } from 'react'
import Lenis from 'lenis'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Configurator from './components/Configurator'
import ProductsGrid from './components/ProductsGrid'
import Metrics from './components/Metrics'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import './novo.css'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.4, autoRaf: true })
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <CustomCursor />
      <main>
        <Hero />
        <Configurator />
        <ProductsGrid />
        <Metrics />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
