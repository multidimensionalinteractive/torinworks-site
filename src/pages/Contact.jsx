import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  const [form, setForm] = useState({ name: '', email: '', phone: '', practice: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', practice: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <section style={{ background: 'var(--night)', color: 'white', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, backgroundImage: `linear-gradient(oklch(100% 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(100% 0 0 / 0.04) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        <div className="container-wide" style={{ position: 'relative' }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>Contact</div>
          <h1 style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 700 }}>
            Book your free Growth &amp; Workflow Assessment.
          </h1>
          <p style={{ fontSize: 18, color: 'oklch(82% 0.015 230)', lineHeight: 1.6, maxWidth: 540, marginTop: 20 }}>
            45 minutes. We'll audit how your practice captures, responds to, and converts inquiries — and leave you with a clear plan.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'start' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>What to expect</div>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 24 }}>
                No pitch. No pressure. Just a plan.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { step: '01', title: 'Share your situation', body: 'Tell us about your practice, your current follow-up process, and where you think leads are leaking.' },
                  { step: '02', title: 'We audit live', body: 'We look at your current site, response times, and funnel — and identify the highest-impact fixes.' },
                  { step: '03', title: 'You get a written plan', body: 'Whether you work with us or not, you leave with a clear, prioritized roadmap you can act on immediately.' },
                ].map((s) => (
                  <div key={s.step} style={{ display: 'flex', gap: 16 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--accent-deep)', flexShrink: 0, paddingTop: 2 }}>{s.step}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 18, letterSpacing: '-0.01em', marginBottom: 4 }}>{s.title}</div>
                      <div style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{s.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--paper-2)', border: '1px solid var(--line)', padding: '36px 32px' }}>
              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--accent-soft)', color: 'var(--accent-deep)', display: 'grid', placeItems: 'center', margin: '0 auto 20px' }}>
                    <Icon name="check" size={28} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, marginBottom: 8 }}>Request received</h3>
                  <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.55 }}>
                    We'll be in touch within 24 hours to schedule your assessment.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn btn-ghost-dark" style={{ marginTop: 20 }}>
                    Send another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                >
                  <div>
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@practice.com" />
                  </div>
                  <div>
                    <label>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" />
                  </div>
                  <div>
                    <label>Practice name</label>
                    <input name="practice" value={form.practice} onChange={handleChange} placeholder="Your practice" />
                  </div>
                  <div>
                    <label>What are you hoping to fix?</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us briefly about your biggest challenge..." />
                  </div>
                  <button type="submit" disabled={status === 'sending'} className="btn btn-primary" style={{ justifyContent: 'center', marginTop: 4 }}>
                    {status === 'sending' ? 'Sending...' : 'Book my assessment'} <Icon name="arrow" size={16} />
                  </button>
                  {status === 'error' && (
                    <div style={{ fontSize: 14, color: '#c44', textAlign: 'center' }}>
                      Something went wrong. Please email us directly at <a href="mailto:hi@mdi.io" style={{ color: 'var(--accent-deep)', textDecoration: 'underline' }}>hi@mdi.io</a>.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
