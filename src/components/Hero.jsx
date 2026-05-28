export default function Hero() {
  return (
    <section className="hero" id="inicio" data-cursor="SAIBA MAIS">
      {/* Animated clouds */}
      <img className="hero-cloud hero-cloud--a" src="/assets/CLOUDS 31 1.png" alt="" aria-hidden="true" />
      <img className="hero-cloud hero-cloud--b" src="/assets/CLOUDS 43 1.png" alt="" aria-hidden="true" />

      <div className="hero-inner">
        <p className="eyebrow">
          <span className="mini-mark">P</span>
          Pinfer Metalúrgica
        </p>
        <h1>Telhas metálicas com qualidade, resistência e acabamento profissional</h1>
        <p className="hero-subtitle">
          Soluções em telhas trapezoidais para aplicações residenciais, comerciais e industriais,
          com produção responsável e alto padrão de durabilidade.
        </p>
        <div className="hero-actions">
          <a className="button button-yellow" href="https://wa.me/554133471183" target="_blank" rel="noreferrer">
            Solicitar orçamento
          </a>
          <a className="button button-hero-ghost" href="#telhas">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M12 5c5.1 0 8.7 4.4 9.7 5.8a2 2 0 0 1 0 2.4C20.7 14.6 17.1 19 12 19s-8.7-4.4-9.7-5.8a2 2 0 0 1 0-2.4C3.3 9.4 6.9 5 12 5Zm0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
            Ver modelos
          </a>
        </div>
      </div>
    </section>
  )
}
