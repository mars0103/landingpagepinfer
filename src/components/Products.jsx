import { useEffect, useRef } from 'react'

const products = [
  { img: '/assets/telhaondulada.png', label: 'Telha\nOndulada', aria: 'Telha ondulada' },
  { img: '/assets/tp25.png', label: 'Telha\nTrapeizoidal 25', aria: 'Telha trapezoidal TP25' },
  { img: '/assets/tp33.png', label: 'Telha\nTrapeizoidal 40', aria: 'Telha trapezoidal TP33' },
  { img: '/assets/telhametalicacolonial.png', label: 'Telha\nColonial', aria: 'Telha metálica colonial' },
  { img: '/assets/termoacusticadupla.png', label: 'Termoacústica\nDupla', aria: 'Telha termoacústica dupla' },
  { img: '/assets/tp33(1).png', label: 'Telha\nTrapeizoidal 33', aria: 'Telha trapezoidal TP33 pintada' },
  { img: '/assets/termoacusticafilme.png', label: 'Termoacústica\ncom Filme', aria: 'Telha termoacústica com filme' },
  { img: '/assets/termoacusticasimples.png', label: 'Termoacústica\nSimples', aria: 'Telha termoacústica simples' },
  { img: '/assets/lambrilcontinuo.png', label: 'Lambril\nContínuo', aria: 'Lambril contínuo' },
  { img: '/assets/termoacusticabandeja.png', label: 'Termoacústica\nBandeja', aria: 'Telha termoacústica bandeja' },
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
