import { WHATSAPP_NUMBER } from '../data/telhas'

const MSG = 'Olá, tudo bem? Vim pelo site da Pinfer e gostaria de receber um atendimento sobre materiais de aço.'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(MSG)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Pinfer no WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.1 4.9A9.9 9.9 0 0 0 3.8 17L3 21l4.1-.8A9.9 9.9 0 0 0 19.1 4.9ZM12 19a7 7 0 0 1-3.6-1l-.4-.2-2.2.4.4-2.1-.3-.5A7 7 0 1 1 12 19Zm3.9-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.5.7c-.2.2-.3.2-.6.1a5.7 5.7 0 0 1-2.8-2.5c-.2-.3 0-.4.1-.6l.4-.4c.1-.2.2-.4.1-.6l-.7-1.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6a8.2 8.2 0 0 0 3.2 3c1.2.5 1.7.6 2.3.5.7-.1 1.8-.8 2.1-1.5.2-.7.2-1.2.1-1.3Z" />
      </svg>
    </a>
  )
}
