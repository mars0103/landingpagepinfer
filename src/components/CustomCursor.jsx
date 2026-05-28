import { useEffect, useRef } from 'react'

const LERP = 0.10

export default function CustomCursor() {
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const labelEl = el.querySelector('.cc-label')

    let targetX = 0, targetY = 0
    let x = 0, y = 0
    let initialized = false
    let current = ''
    let rafId

    const tick = () => {
      x += (targetX - x) * LERP
      y += (targetY - y) * LERP
      el.style.setProperty('--cx', `${x}px`)
      el.style.setProperty('--cy', `${y}px`)
      rafId = requestAnimationFrame(tick)
    }

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!initialized) { x = targetX; y = targetY; initialized = true }

      const target = e.target.closest('[data-cursor]')
      const next = target?.dataset.cursor ?? ''
      if (next !== current) {
        current = next
        labelEl.textContent = next
        el.classList.toggle('is-visible', !!next)
      }
    }

    const onLeave = () => { current = ''; el.classList.remove('is-visible') }

    rafId = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div ref={elRef} className="custom-cursor" aria-hidden="true">
      <span className="cc-label" />
    </div>
  )
}
