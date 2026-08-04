import { useEffect, useRef } from 'react'
import { asset } from '../lib/asset'

const products = [
  { img: asset('assets/telhaondulada.png'), label: 'Telha\nOndulada', aria: 'Telha ondulada' },
  { img: asset('assets/tp25.png'), label: 'Telha\nTrapeizoidal 25', aria: 'Telha trapezoidal TP25' },
  { img: asset('assets/tp33.png'), label: 'Telha\nTrapeizoidal 40', aria: 'Telha trapezoidal TP33' },
  { img: asset('assets/telhametalicacolonial.png'), label: 'Telha\nColonial', aria: 'Telha metálica colonial' },
  { img: asset('assets/termoacusticadupla.png'), label: 'Termoacústica\nDupla', aria: 'Telha termoacústica dupla' },
  { img: asset('assets/tp33(1).png'), label: 'Telha\nTrapeizoidal 33', aria: 'Telha trapezoidal TP33 pintada' },
  { img: asset('assets/termoacusticafilme.png'), label: 'Termoacústica\ncom Filme', aria: 'Telha termoacústica com filme' },
  { img: asset('assets/termoacusticasimples.png'), label: 'Termoacústica\nSimples', aria: 'Telha termoacústica simples' },
  { img: asset('assets/lambrilcontinuo.png'), label: 'Lambril\nContínuo', aria: 'Lambril contínuo' },
  { img: asset('assets/termoacusticabandeja.png'), label: 'Termoacústica\nBandeja', aria: 'Telha termoacústica bandeja' },
]

function ProductCard({ product, hidden }) {
  const lines = product.label.split('\n')
  return (
    <a className="product-card" href="#" aria-label={hidden ? undefined : product.aria} aria-hidden={hidden ? 'true' : undefined}>
      <img className="product-image" src={product.img} alt="" />
      <strong>
        {lines[0]}<br />{lines[1]}
      </strong>
      <span className="product-button">ver mais <b>→</b></span>
    </a>
  )
}

export default function Products() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateDistance = () => {
      const originals = track.querySelectorAll(':scope > a:not([aria-hidden])')
      const clones = track.querySelectorAll(':scope > a[aria-hidden]')
      if (!originals.length || !clones.length) return
      const distance = clones[0].offsetLeft - originals[0].offsetLeft
      track.style.setProperty('--carousel-distance', `${distance}px`)
      track.classList.add('is-marquee')
    }

    window.addEventListener('resize', updateDistance)
    requestAnimationFrame(updateDistance)
    return () => window.removeEventListener('resize', updateDistance)
  }, [])

  return (
    <section className="products" id="telhas" data-cursor="NOSSOS PRODUTOS">
      <div className="products-heading">
        <p className="eyebrow">
          <span className="mini-mark">P</span>
          Pinfer Metalúrgica
        </p>
        <h2>Confira nossas telhas</h2>
      </div>
      <div className="product-carousel" style={{ '--carousel-duration': '44s' }}>
        <div ref={trackRef} className="product-track" aria-label="Modelos de telhas">
          {products.map((p, i) => <ProductCard key={i} product={p} hidden={false} />)}
          {products.map((p, i) => <ProductCard key={`clone-${i}`} product={p} hidden={true} />)}
        </div>
      </div>
    </section>
  )
}
