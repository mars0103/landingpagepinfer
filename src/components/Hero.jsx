import { asset } from '../lib/asset'
import { METRICAS, WHATSAPP_NUMBER } from '../data/telhas'

const WHATSAPP = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20Pinfer%20e%20gostaria%20de%20receber%20um%20atendimento%20sobre%20materiais%20de%20a%C3%A7o.`

const cards = [
  { t: 'Alta durabilidade', d: 'Aço Zincalume / Galvalume de longa vida útil.' },
  { t: 'Conforto térmico', d: 'Núcleo isolante em EPS ou PIR.' },
  { t: 'Isolamento acústico', d: 'Redução de calor e ruídos nas termoacústicas.' },
]

export default function Hero() {
  return (
    <section className="hero hero--v2" id="inicio" data-cursor="SAIBA MAIS">
      <div className="hv-bg" style={{ backgroundImage: `url("${asset('assets/hero-pinfer-telha.png')}")` }} aria-hidden="true" />

      <div className="hv-inner">
        <h1>
          Telhas direto<br />
          <span>de fábrica</span>
        </h1>

        <div className="hv-cards">
          {cards.map((c) => (
            <article key={c.t}>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </article>
          ))}
        </div>

        <a className="hv-cta" href={WHATSAPP} target="_blank" rel="noreferrer">
          <span>Solicitar orçamento</span>
          <i aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </i>
        </a>
      </div>

      <ul className="hero-stats" aria-label="A Pinfer em números">
        {METRICAS.map((m) => (
          <li key={m.label}><b>+{m.value.toLocaleString('pt-BR')}{m.suffix}</b> {m.label}</li>
        ))}
      </ul>
    </section>
  )
}
