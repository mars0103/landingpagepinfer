import { useState } from 'react'

const items = [
  {
    q: 'Qual é o prazo de entrega das telhas?',
    a: 'Pedidos com produtos em estoque são entregues em até 10 dias úteis. Para produção sob medida ou grandes volumes, o prazo médio é de 15 a 20 dias úteis — confirmamos após análise do pedido.',
  },
  {
    q: 'As telhas possuem garantia contra ferrugem e defeitos?',
    a: 'Sim. Todas as telhas Pinfer seguem as normas ABNT e têm garantia contra defeitos de fabricação. Telhas galvanizadas e pintadas com tinta PE ou PVDF apresentam durabilidade de 15 a 25 anos, dependendo do ambiente de instalação.',
  },
  {
    q: 'Vocês atendem projetos residenciais e industriais?',
    a: 'Sim, atendemos todos os portes. Produzimos telhas trapezoidais, termoacústicas e onduladas para residências, galpões, armazéns, condomínios e projetos comerciais. Cada aplicação recebe orientação técnica personalizada.',
  },
  {
    q: 'É possível encomendar telhas em cores específicas?',
    a: 'Sim. Trabalhamos com pintura eletrostática nas cores da tabela RAL: Amarelo RAL 1023, Branco RAL 9002 e 9010, Azul RAL 5010, Verde RAL 6005, Cerâmica RAL 8004, Vermelho RAL 3009, Grafite RAL 7022 e outras. Consulte disponibilidade e lote mínimo.',
  },
  {
    q: 'Vocês fazem entrega para fora do Paraná?',
    a: 'Sim, entregamos para todo o Brasil. O frete é calculado por transportadora com base no CEP, peso e volume. Também é possível retirar diretamente em nossa fábrica em Curitiba/PR.',
  },
]

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
          <img className="whatsapp-badge" src="/assets/WHATSAPP.png" alt="" aria-hidden="true" />
          <p>Se ainda estiver com dúvida nossa equipe está à disposição:</p>
          <a className="button button-outline" href="https://wa.me/554133471183" target="_blank" rel="noreferrer">
            Entrar em contato
          </a>
          <img className="contact-metal-slot" src="/assets/image 35.png" alt="" aria-hidden="true" />
        </aside>
      </div>
    </section>
  )
}
