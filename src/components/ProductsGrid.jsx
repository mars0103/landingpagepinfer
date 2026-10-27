import { asset } from '../lib/asset'
import { TELHAS, WHATSAPP_NUMBER } from '../data/telhas'

const link = (nome) => {
  const msg = `Olá! Vim pelo site da Pinfer e quero um orçamento da telha ${nome}.`
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`
}

export default function ProductsGrid() {
  return (
    <section className="pgrid" id="produtos">
      <div className="pgrid-inner">
        <p className="cfg-kicker pgrid-kicker">Pinfer Metalúrgica</p>
        <h2>Confira nossas telhas</h2>
        <div className="pgrid-list">
          {TELHAS.map((t) => (
            <a key={t.id} className="pgrid-card" href={link(t.nome)} target="_blank" rel="noreferrer">
              <img src={asset(t.img)} alt="" />
              <strong>{t.nome}</strong>
              <span>pedir orçamento <b>→</b></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
