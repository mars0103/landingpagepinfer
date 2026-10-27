import { VANTAGENS } from '../data/telhas'

export default function Advantages() {
  return (
    <section className="adv" id="vantagens">
      <div className="adv-inner">
        <h2>Por que a Pinfer <span>cobre a sua obra melhor</span></h2>
        <ol className="adv-grid">
          {VANTAGENS.map((v, i) => (
            <li key={v}>
              <span className="adv-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="adv-t">{v}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
