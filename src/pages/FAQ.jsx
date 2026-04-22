import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'
import { FAQS } from '../data/content.js'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <div>
      <section style={{ background: 'var(--night)', color: 'white', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, backgroundImage: `linear-gradient(oklch(100% 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(100% 0 0 / 0.04) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        <div className="container-wide" style={{ position: 'relative' }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>FAQ</div>
          <h1 style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 700 }}>
            Questions we get asked a lot.
          </h1>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="container-wide" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {FAQS.map((faq, i) => {
              const isOpen = openIdx === i
              return (
                <div key={i} style={{ background: 'var(--paper)' }}>
                  <button onClick={() => setOpenIdx(isOpen ? null : i)} style={{
                    width: '100%', textAlign: 'left', padding: '24px 28px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: 'none', border: 'none', color: 'var(--ink)', cursor: 'pointer',
                  }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 20, letterSpacing: '-0.01em', paddingRight: 16 }}>{faq.q}</span>
                    <span style={{ color: 'var(--accent-deep)', flexShrink: 0, transition: 'transform 0.2s', transform: isOpen ? 'rotate(45deg)' : 'none' }}>
                      <Icon name="plus" size={20} />
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 28px 24px', fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.65, maxWidth: 640 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-2)', padding: '80px 0', borderTop: '1px solid var(--line)' }}>
        <div className="container-wide" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h3 style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 16 }}>
            Still have questions?
          </h3>
          <p style={{ fontSize: 16, color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: 24 }}>
            We're happy to answer them directly. No forms, no bots — just a quick conversation.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in touch <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
