import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'
import { PRICING_TIERS } from '../data/content.js'

export default function Pricing() {
  return (
    <div>
      <section style={{ background: 'var(--night)', color: 'white', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, backgroundImage: `linear-gradient(oklch(100% 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(100% 0 0 / 0.04) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        <div className="container-wide" style={{ position: 'relative' }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>Pricing</div>
          <h1 style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 700 }}>
            Simple pricing. No contracts.
          </h1>
          <p style={{ fontSize: 18, color: 'oklch(82% 0.015 230)', lineHeight: 1.6, maxWidth: 540, marginTop: 20 }}>
            Month-to-month from day one. Upgrade, downgrade, or walk away any time. No setup fees, no hidden costs.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 2vw, 24px)' }}>
            {PRICING_TIERS.map((tier) => (
              <div key={tier.name} style={{
                background: tier.popular ? 'var(--night)' : 'var(--paper)',
                color: tier.popular ? 'white' : 'var(--ink)',
                border: '1px solid var(--line)',
                padding: '40px 32px',
                position: 'relative',
              }}>
                {tier.popular && (
                  <div style={{
                    position: 'absolute', top: -1, right: -1,
                    background: 'var(--accent)', color: 'white',
                    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '6px 12px',
                  }}>Most popular</div>
                )}
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: tier.popular ? 'oklch(78% 0.11 215)' : 'var(--accent-deep)', marginBottom: 12 }}>{tier.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: 48, letterSpacing: '-0.02em' }}>{tier.price}</span>
                  <span style={{ fontSize: 15, color: tier.popular ? 'oklch(82% 0.015 230)' : 'var(--ink-muted)' }}>{tier.period}</span>
                </div>
                <p style={{ fontSize: 15, color: tier.popular ? 'oklch(82% 0.015 230)' : 'var(--ink-muted)', lineHeight: 1.55, marginBottom: 28, minHeight: 48 }}>{tier.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                  {tier.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5 }}>
                      <span style={{ color: tier.popular ? 'oklch(78% 0.11 215)' : 'var(--accent-deep)', flexShrink: 0 }}><Icon name="check" size={16} /></span>
                      {f}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn" style={{
                  width: '100%', justifyContent: 'center',
                  background: tier.popular ? 'white' : 'transparent',
                  color: tier.popular ? 'var(--night)' : 'var(--ink)',
                  border: '1px solid ' + (tier.popular ? 'white' : 'var(--line)'),
                  fontSize: 14, fontWeight: 500,
                }}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-2)', padding: '80px 0', borderTop: '1px solid var(--line)' }}>
        <div className="container-wide" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h3 style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 16 }}>
            Not sure which tier fits?
          </h3>
          <p style={{ fontSize: 16, color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: 24 }}>
            Book a free assessment. We'll recommend the right starting point based on your volume, team size, and goals.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Book a free assessment <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
