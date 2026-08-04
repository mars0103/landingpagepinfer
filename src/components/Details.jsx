import { useState } from 'react'
import RoofViewer from './RoofViewer'

const swatches = [
  { hex: '#b8b8b8', label: 'Galvalume\nNatural' },
  { hex: '#cdd4d0', label: 'Branco\nRal 9002' },
  { hex: '#ffdf00', label: 'Amarela\nRal 1023', default: true },
  { hex: '#f3f5ef', label: 'Branco\nRal 9010' },
  { hex: '#9a5b3d', label: 'Cerâmica\nRal 8004' },
  { hex: '#526f93', label: 'Azul\nRal 5010' },
  { hex: '#2f5f45', label: 'Verde\nRal 6005' },
  { hex: '#8f1d1d', label: 'Vermelho\nRal 3009' },
  { hex: '#202326', label: 'Preto\nRal 9005' },
  { hex: '#74777a', label: 'Cinza\nRal 7004' },
  { hex: '#d7d0be', label: 'Bege\nRal 1015' },
  { hex: '#6f6a5d', label: 'Grafite\nRal 7022' },
]

function swatchName(hex) {
  return swatches.find((s) => s.hex === hex)?.label.split('\n')[0] ?? hex
}

export default function Details() {
  const [activeLayer, setActiveLayer] = useState('top')
  const [topColor, setTopColor] = useState('#ffdf00')
  const [bottomColor, setBottomColor] = useState('#b8b8b8')

  const activeColor = activeLayer === 'top' ? topColor : bottomColor

  const handleColorChange = (hex) => {
    if (activeLayer === 'top') setTopColor(hex)
    else setBottomColor(hex)
  }

  const handleSwatchNext = (e) => {
    const list = e.currentTarget.closest('.swatches')?.querySelector('[data-swatch-list]')
    if (!list) return
    const isAtEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 4
    list.scrollTo({
      left: isAtEnd ? 0 : list.scrollLeft + list.clientWidth * 0.78,
      behavior: 'smooth',
    })
  }

  return (
    <section className="details" id="empresa">
      <div className="details-inner">
        <div className="details-copy">
          <p className="eyebrow">
            <span className="mini-mark">P</span>
            Pinfer Metalúrgica
          </p>
          <h2>Telhas metálicas feitas para entregar resistência, estética e desempenho</h2>
          <p>
            A Pinfer oferece soluções em telhas trapezoidais para projetos residenciais,
            comerciais e industriais, com fabricação pensada para unir durabilidade,
            excelente acabamento e confiança em cada aplicação.
          </p>
          <a className="button button-yellow button-whatsapp" href="https://api.whatsapp.com/send/?phone=5541988887664&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20Pinfer%20e%20gostaria%20de%20receber%20um%20atendimento%20sobre%20materiais%20de%20a%C3%A7o." target="_blank" rel="noreferrer">
            Solicitar orçamento
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.1 4.9A9.9 9.9 0 0 0 3.8 17L3 21l4.1-.8A9.9 9.9 0 0 0 19.1 4.9ZM12 19a7 7 0 0 1-3.6-1l-.4-.2-2.2.4.4-2.1-.3-.5A7 7 0 1 1 12 19Zm3.9-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.5.7c-.2.2-.3.2-.6.1a5.7 5.7 0 0 1-2.8-2.5c-.2-.3 0-.4.1-.6l.4-.4c.1-.2.2-.4.1-.6l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6a8.2 8.2 0 0 0 3.2 3c1.2.5 1.7.6 2.3.5.7-.1 1.8-.8 2.1-1.5.2-.7.2-1.2.1-1.3Z" />
            </svg>
          </a>
        </div>
        <div className="details-visual">
          <div className="layer-selector" role="group" aria-label="Selecionar camada">
            <button
              type="button"
              data-layer="top"
              className={activeLayer === 'top' ? 'is-active' : ''}
              aria-pressed={String(activeLayer === 'top')}
              onClick={() => setActiveLayer('top')}
            >
              <span className="layer-icon">
                <span className="li-top" style={{ '--lc': topColor }} />
                <span className="li-mid" />
                <span className="li-bot" style={{ '--lc': bottomColor }} />
              </span>
              <span className="layer-text">
                <strong>Chapa Superior</strong>
                <span>{swatchName(topColor)}</span>
              </span>
            </button>
            <button
              type="button"
              data-layer="bottom"
              className={activeLayer === 'bottom' ? 'is-active' : ''}
              aria-pressed={String(activeLayer === 'bottom')}
              onClick={() => setActiveLayer('bottom')}
            >
              <span className="layer-icon">
                <span className="li-top" style={{ '--lc': topColor }} />
                <span className="li-mid" />
                <span className="li-bot" style={{ '--lc': bottomColor }} />
              </span>
              <span className="layer-text">
                <strong>Chapa Inferior</strong>
                <span>{swatchName(bottomColor)}</span>
              </span>
            </button>
          </div>

          <RoofViewer
            modelPath="/models/telhado(1).glb"
            topColor={topColor}
            bottomColor={bottomColor}
            layer={activeLayer}
          />

          <div className="palette-card" aria-label="Personalize sua telha">
            <h3>Personalize sua telha</h3>
            <div className="swatches">
              <div className="swatch-list" data-swatch-list>
                {swatches.map((swatch) => (
                  <button
                    key={swatch.hex}
                    style={{ '--swatch': swatch.hex }}
                    type="button"
                    className={activeColor === swatch.hex ? 'active' : ''}
                    aria-pressed={String(activeColor === swatch.hex)}
                    onClick={() => handleColorChange(swatch.hex)}
                  >
                    <span></span>
                    {swatch.label.split('\n').map((line, i) => (
                      <span key={i} style={{ display: 'block' }}>{line}</span>
                    ))}
                  </button>
                ))}
              </div>
              <button className="swatch-next" type="button" aria-label="Próximas cores" onClick={handleSwatchNext}>›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
