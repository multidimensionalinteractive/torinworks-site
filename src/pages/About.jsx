import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'

export default function About() {
  return (
    <div>
      <section style={{ background: 'var(--night)', color: 'white', padding: '140px 0 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, backgroundImage: `linear-gradient(oklch(100% 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(100% 0 0 / 0.04) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        <div className="container-wide" style={{ position: 'relative' }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>Company</div>
          <h1 style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 800 }}>
            Built by operators. Run by humans. Powered by AI.
          </h1>
          <p style={{ fontSize: 18, color: 'oklch(82% 0.015 230)', lineHeight: 1.6, maxWidth: 600, marginTop: 24 }}>
            Torin Works was built after watching too many great practices lose revenue to slow follow-up, leaky funnels, and tools that promised automation but created more work.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'start' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>What we believe</div>
              <h2 style={{ fontSize: 'clamp(32px, 3.4vw, 46px)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: 24 }}>
                The best growth is invisible.
              </h2>
              <p style={{ fontSize: 16, color: 'var(--ink-muted)', lineHeight: 1.65, marginBottom: 16 }}>
                Your patients shouldn't know we're here. They should just notice that your team is faster, more responsive, and easier to reach than every other practice they considered.
              </p>
              <p style={{ fontSize: 16, color: 'var(--ink-muted)', lineHeight: 1.65, marginBottom: 16 }}>
                We don't sell software. We run a system — tuned to your practice, measured by your metrics, optimized week over week by people who understand what a booked visit is worth.
              </p>
            </div>
            <div style={{ background: 'var(--paper-2)', border: '1px solid var(--line)', padding: '36px 34px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: 24 }}>How we're different</div>
              {[
                { title: 'Operators, not just engineers', body: 'Our team has run marketing and ops for dental, medspa, and legal practices. We know the difference between a lead and a booked consultation.' },
                  { title: 'Month-to-month, always', body: "No annual contracts. No exit fees. If we're not delivering, you should leave \u2014 and we'll help you transition." },
                  { title: 'AI in the background, humans upfront', body: "We use AI to scale what works. But sensitive conversations, escalations, and strategy always route to a real person." },
              ].map((item, i) => (
                <div key={i} style={{ padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 20, letterSpacing: '-0.01em', marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 14.5, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-2)', padding: '100px 0', borderTop: '1px solid var(--line)' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Ready to talk?</div>
            <h2 style={{ fontSize: 'clamp(32px, 3.4vw, 46px)', lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: 24 }}>
              Let's see if Torin is the right fit.
            </h2>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 28px', fontSize: 15 }}>
              Book a free assessment <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
