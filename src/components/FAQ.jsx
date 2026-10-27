import { useState } from 'react'
import { asset } from '../lib/asset'
import { FAQ as FAQ_DATA } from '../data/telhas'

const items = FAQ_DATA

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section className="faq" id="contato">
      <div className="faq-inner">
        <div className="faq-list">
          <p className="eyebrow">
            <span className="mini-mark">P</span>
            Pinfer Metalúrgica
          </p>
          <h2>Perguntas Frequentes</h2>
          <div className="accordion">
            {items.map((item, i) => (
              <details key={i} open={openIndex === i} onToggle={(e) => { if (e.target.open) setOpenIndex(i) }}>
                <summary onClick={(e) => { e.preventDefault(); toggle(i) }}>
                  {item.q}
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
        <aside className="contact-card">
          <img className="whatsapp-badge" src={asset('assets/WHATSAPP.png')} alt="" aria-hidden="true" />
          <p>Se ainda estiver com dúvida nossa equipe está à disposição:</p>
          <a className="button button-outline" href="https://api.whatsapp.com/send/?phone=5541988887664&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20Pinfer%20e%20gostaria%20de%20receber%20um%20atendimento%20sobre%20materiais%20de%20a%C3%A7o." target="_blank" rel="noreferrer">
            Entrar em contato
          </a>
          <img className="contact-metal-slot" src={asset('assets/image 35.png')} alt="" aria-hidden="true" />
        </aside>
      </div>
    </section>
  )
}
