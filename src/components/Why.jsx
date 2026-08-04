import { useEffect, useRef } from 'react'
import { asset } from '../lib/asset'

const featureCards = [
  {
    size: 'small',
    variant: 'waves',
    img: asset('assets/Product image.png'),
    imgClass: 'feature-waves',
    text: <>Telhas produzidas <span>com excelente padrão</span> de qualidade</>,
  },
  {
    size: 'large',
    variant: 'house',
    img: asset('assets/Product image(1).png'),
    imgClass: 'feature-house',
    text: <>Aplicação <span>residencial, comercial e industrial</span></>,
  },
  {
    size: 'large',
    variant: 'star',
    img: asset('assets/Product image(2).png'),
    imgClass: 'feature-star',
    text: <>Ótimo acabamento para <span>valorizar o projeto</span></>,
  },
  {
    size: 'large',
    variant: 'shield',
    img: asset('assets/Product image(3).png'),
    imgClass: 'feature-shield',
    text: <>Proteção reforçada para <span>maior durabilidade</span></>,
  },
]

function FeatureCard({ card }) {
  return (
    <article className={`feature-card feature-card-${card.size} feature-card-${card.variant}`}>
      <img className={`feature-image ${card.imgClass}`} src={card.img} alt="" />
      <h3>{card.text}</h3>
    </article>
  )
}

export default function Why() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateDistance = () => {
      const originals = track.querySelectorAll(':scope > article:not([aria-hidden])')
      const clones = track.querySelectorAll(':scope > article[aria-hidden]')
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
    <section className="why">
      <div className="why-copy">
        <h2>Por que nossas telhas metálicas são a escolha certa para sua obra</h2>
        <p>Conheça os diferenciais que unem resistência, acabamento e confiança em cada projeto.</p>
        <a className="button button-white" href="https://api.whatsapp.com/send/?phone=5541988887664&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20Pinfer%20e%20gostaria%20de%20receber%20um%20atendimento%20sobre%20materiais%20de%20a%C3%A7o." target="_blank" rel="noreferrer">
          Quero falar com um atendente
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.1 4.9A9.9 9.9 0 0 0 3.8 17L3 21l4.1-.8A9.9 9.9 0 0 0 19.1 4.9ZM12 19a7 7 0 0 1-3.6-1l-.4-.2-2.2.4.4-2.1-.3-.5A7 7 0 1 1 12 19Zm3.9-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.5.7c-.2.2-.3.2-.6.1a5.7 5.7 0 0 1-2.8-2.5c-.2-.3 0-.4.1-.6l.4-.4c.1-.2.2-.4.1-.6l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6a8.2 8.2 0 0 0 3.2 3c1.2.5 1.7.6 2.3.5.7-.1 1.8-.8 2.1-1.5.2-.7.2-1.2.1-1.3Z" />
          </svg>
        </a>
      </div>
      <div className="feature-carousel">
        <div ref={trackRef} className="feature-row" aria-label="Diferenciais das telhas">
          {featureCards.map((card, i) => <FeatureCard key={i} card={card} />)}
          {featureCards.map((card, i) => (
            <article key={`clone-${i}`} aria-hidden="true" className={`feature-card feature-card-${card.size} feature-card-${card.variant}`}>
              <img className={`feature-image ${card.imgClass}`} src={card.img} alt="" />
              <h3>{card.text}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
