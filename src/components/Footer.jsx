import { asset } from '../lib/asset'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <img className="footer-logo" src={asset('assets/LOGO PINFER VETORIZADA.svg')} alt="Pinfer Metalúrgica" />
          <div className="footer-column footer-contact">
            <h3>Contatos</h3>
            <p><strong>Endereço:</strong> Rua Paul Garfunkel, 420, Cidade Industrial - Curitiba/PR</p>
            <p><strong>Telefone:</strong> (41) 3347-1183</p>
            <p><strong>Horário:</strong> Segunda-Quinta: 07:30-17:30 | Sexta-feira: 07:30-16h30</p>
            <p><strong>Email Pinfer:</strong> pinfer@pinfer.com.br</p>
          </div>
          <div className="footer-column">
            <h3>Telhas</h3>
            <a href="#telhas">Telha Ondulada</a>
            <a href="#telhas">Telha Trapezoidal TP-25</a>
            <a href="#telhas">Telha Trapezoidal TP-33</a>
            <a href="#telhas">Telha Colonial</a>
            <a href="#telhas">Termoacústica Dupla</a>
            <a href="#telhas">Lambril Contínuo</a>
          </div>
          <div className="footer-column">
            <h3>Navegação</h3>
            <a href="#inicio">Início</a>
            <a href="#empresa">Empresa</a>
            <a href="#produtos">Produtos</a>
            <a href="#telhas">Telhas</a>
            <a href="#contato">Perguntas Frequentes</a>
          </div>
          <div className="footer-column">
            <h3>Regulamento</h3>
            <a href="#">Termos e Regulamentos</a>
            <a href="#">Política de Privacidade</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright 2026. Todos os direitos reservados. <a href="#">Políticas de privacidade</a> | <a href="#">Termos de uso</a></p>
          <div className="social-links" aria-label="Redes sociais">
            <a href="https://www.youtube.com/@Ronneypinho/videos" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15.4V8.6l6 3.4-6 3.4Z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@pinferoficial" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.2 7.3a6.2 6.2 0 0 0 3.6 1.1v3.3a9.6 9.6 0 0 1-3.7-.8v5.4a5.6 5.6 0 1 1-5.6-5.6h.9v3.4a2 2 0 1 0 1.4 1.9V3h3.4c.1 1.7.8 3.2 2 4.3Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/pinferoficial/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5.2-2.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
              </svg>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5541988887664&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20da%20Pinfer%20e%20gostaria%20de%20receber%20um%20atendimento%20sobre%20materiais%20de%20a%C3%A7o." target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.1 4.9A9.9 9.9 0 0 0 3.8 17L3 21l4.1-.8A9.9 9.9 0 0 0 19.1 4.9ZM12 19a7 7 0 0 1-3.6-1l-.4-.2-2.2.4.4-2.1-.3-.5A7 7 0 1 1 12 19Zm3.9-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.5.7c-.2.2-.3.2-.6.1a5.7 5.7 0 0 1-2.8-2.5c-.2-.3 0-.4.1-.6l.4-.4c.1-.2.2-.4.1-.6l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6a8.2 8.2 0 0 0 3.2 3c1.2.5 1.7.6 2.3.5.7-.1 1.8-.8 2.1-1.5.2-.7.2-1.2.1-1.3Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
