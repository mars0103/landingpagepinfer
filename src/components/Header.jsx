import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const check = () => setDark(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav
        className={`header-inner${dark ? ' is-dark' : ''}${isOpen ? ' menu-open' : ''}`}
        aria-label="Navegação principal"
      >
        <a className="brand" href="#inicio" aria-label="Pinfer Metalúrgica" onClick={close}>
          <img className="logo-image" src="/assets/LOGO PINFER VETORIZADA.svg" alt="Pinfer Metalúrgica" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={String(isOpen)}
          aria-controls="primary-menu"
          onClick={() => setIsOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`primary-menu${isOpen ? ' is-open' : ''}`} id="primary-menu">
          <a className="is-active" href="#inicio" onClick={close}>Início</a>
          <a href="#empresa" onClick={close}>Empresa</a>
          <a href="#produtos" onClick={close}>Produtos</a>
          <a href="#telhas" onClick={close}>Telhas</a>
          <a href="#contato" onClick={close}>FAQ</a>
          <a className="nav-quote" href="https://api.whatsapp.com/send/?phone=5541988887664&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20Pinfer%20e%20gostaria%20de%20receber%20um%20atendimento%20sobre%20materiais%20de%20a%C3%A7o." target="_blank" rel="noreferrer">
            Faça um orçamento
          </a>
        </div>
      </nav>
    </header>
  )
}
