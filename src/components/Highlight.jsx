import { useState, useEffect } from 'react'
import { asset } from '../lib/asset'

const WORDS = ['resistência', 'estética', 'desempenho']
const TYPE_MS = 75
const ERASE_MS = 45
const PAUSE_TYPED = 2000
const PAUSE_ERASED = 350

function TypedWord() {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const word = WORDS[wordIdx]
    if (phase === 'typing') {
      if (display.length < word.length) {
        const t = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), TYPE_MS)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('erasing'), PAUSE_TYPED)
      return () => clearTimeout(t)
    }
    if (phase === 'erasing') {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(d => d.slice(0, -1)), ERASE_MS)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length)
        setPhase('typing')
      }, PAUSE_ERASED)
      return () => clearTimeout(t)
    }
  }, [display, phase, wordIdx])

  return (
    <span className="typed-word">
      {display}
      <span className="typed-cursor" aria-hidden="true">|</span>
    </span>
  )
}

export default function Highlight() {
  return (
    <section className="highlight" id="produtos">
      <div className="highlight-card">
        <div className="highlight-visual" aria-hidden="true">
          <img className="highlight-logo" src={asset('assets/LOGO PINFER VETORIZADA.svg')} alt="" />
          <img className="highlight-roof" src={asset('assets/image 39.png')} alt="" />
        </div>
        <div className="highlight-copy">
          <h2>Telhas metálicas feitas para entregar <TypedWord /></h2>
          <p>
            A Pinfer oferece soluções em telhas trapezoidais para projetos residenciais,
            comerciais e industriais, com fabricação pensada para unir durabilidade,
            excelente acabamento e confiança em cada aplicação.
          </p>
          <a className="button button-white button-whatsapp" href="https://api.whatsapp.com/send/?phone=5541988887664&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20Pinfer%20e%20gostaria%20de%20receber%20um%20atendimento%20sobre%20materiais%20de%20a%C3%A7o." target="_blank" rel="noreferrer">
            Solicitar orçamento
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.1 4.9A9.9 9.9 0 0 0 3.8 17L3 21l4.1-.8A9.9 9.9 0 0 0 19.1 4.9ZM12 19a7 7 0 0 1-3.6-1l-.4-.2-2.2.4.4-2.1-.3-.5A7 7 0 1 1 12 19Zm3.9-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.5.7c-.2.2-.3.2-.6.1a5.7 5.7 0 0 1-2.8-2.5c-.2-.3 0-.4.1-.6l.4-.4c.1-.2.2-.4.1-.6l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6a8.2 8.2 0 0 0 3.2 3c1.2.5 1.7.6 2.3.5.7-.1 1.8-.8 2.1-1.5.2-.7.2-1.2.1-1.3Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
