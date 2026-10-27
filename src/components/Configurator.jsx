import { useState } from 'react'
import { asset } from '../lib/asset'
import { TERMOS, WHATSAPP_NUMBER } from '../data/telhas'

const WA_ICON =
  'M19.1 4.9A9.9 9.9 0 0 0 3.8 17L3 21l4.1-.8A9.9 9.9 0 0 0 19.1 4.9ZM12 19a7 7 0 0 1-3.6-1l-.4-.2-2.2.4.4-2.1-.3-.5A7 7 0 1 1 12 19Zm3.9-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.5.7c-.2.2-.3.2-.6.1a5.7 5.7 0 0 1-2.8-2.5c-.2-.3 0-.4.1-.6l.4-.4c.1-.2.2-.4.1-.6l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6a8.2 8.2 0 0 0 3.2 3c1.2.5 1.7.6 2.3.5.7-.1 1.8-.8 2.1-1.5.2-.7.2-1.2.1-1.3Z'

export default function Configurator() {
  const [id, setId] = useState(TERMOS[0].id)
  const telha = TERMOS.find((t) => t.id === id)

  const message = [
    'Olá! Vim pelo site da Pinfer e quero um orçamento:',
    `• Telha ${telha.nome}`,
    '• Metragem aproximada: ',
  ].join('\n')
  const href = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`

  return (
    <section className="cfg" id="telhas" data-cursor="TERMOACÚSTICAS">
      <div className="cfg-head">
        <p className="cfg-kicker">Pinfer Metalúrgica</p>
        <h2>Telhas termoacústicas.<br /><span>Medidas e detalhes técnicos.</span></h2>
      </div>

      <div className="cfg-tabs" role="tablist" aria-label="Modelos de telhas termoacústicas">
        {TERMOS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={t.id === id}
            className={t.id === id ? 'is-active' : ''}
            onClick={() => setId(t.id)}
          >
            <img src={asset(t.img)} alt="" aria-hidden="true" />
            <span>{t.nome.replace('Termoacústica ', '')}</span>
          </button>
        ))}
      </div>

      <div className="cfg-body">
        <div className="cfg-stage">
          <img key={telha.id} className="cfg-photo" src={asset(telha.img)} alt={`Telha ${telha.nome}`} />
        </div>

        <div className="cfg-specs">
          <p className="cfg-spec-group">Modelo</p>
          <h3>Telha {telha.nome}</h3>
          <p className="cfg-label">Detalhes técnicos</p>
          <dl className="cfg-table">
            {telha.specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <a className="button button-yellow button-whatsapp cfg-cta" href={href} target="_blank" rel="noreferrer">
            Solicitar orçamento
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={WA_ICON} /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
