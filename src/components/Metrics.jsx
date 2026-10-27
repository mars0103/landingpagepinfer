import { useEffect, useRef, useState } from 'react'
import { METRICAS } from '../data/telhas'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min((t - t0) / 1600, 1)
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value])
  return <span ref={ref}>{n.toLocaleString('pt-BR')}{suffix}</span>
}

export default function Metrics() {
  return (
    <section className="metrics" aria-label="Números da Pinfer">
      {METRICAS.map((m) => (
        <div key={m.label} className="metric">
          <strong><span className="metric-plus">+</span><Counter value={m.value} suffix={m.suffix} /></strong>
          <span>{m.label}</span>
        </div>
      ))}
    </section>
  )
}
