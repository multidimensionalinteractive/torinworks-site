import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'

const STUDIES = [
  {
    vertical: 'Dental',
    title: 'How a 3-location dental group added $38k/mo in recovered revenue.',
    teaser: 'They were already spending on ads — but 60% of inquiries never got a same-day response. We fixed the follow-up, and the calendar filled itself.',
    stats: [
      { k: '+38%', v: 'Lift in booked consults' },
      { k: '< 60s', v: 'Avg. response time' },
      { k: '$38k', v: 'Monthly revenue recovered' },
    ],
  },
  {
    vertical: 'Medspa',
    title: 'A medspa that turned after-hours DMs into $24k in new monthly bookings.',
    teaser: 'Most of their inquiries arrived after 7pm. Their team went home. We didn\'t. Within 30 days, after-hours response became their top conversion channel.',
    stats: [
      { k: '+42%', v: 'Consult show-rate' },
      { k: '24/7', v: 'Text coverage' },
      { k: '$24k', v: 'New monthly bookings' },
    ],
  },
  {
    vertical: 'Legal',
    title: 'A personal injury firm cut intake response time from 6 hours to under a minute.',
    teaser: 'In PI, speed wins cases. We built an always-on intake layer that qualified and routed hot leads before the competition even opened the email.',
    stats: [
      { k: '+31%', v: 'Signed-case rate' },
      { k: '47s', v: 'Avg. response time' },
      { k: '3x', v: 'Lead-to-client speed' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <div>
      <section style={{ background: 'var(--night)', color: 'white', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, backgroundImage: `linear-gradient(oklch(100% 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(100% 0 0 / 0.04) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        <div className="container-wide" style={{ position: 'relative' }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>Results</div>
          <h1 style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 800 }}>
            Real practices. Real numbers.
          </h1>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 4vw, 60px)' }}>
            {STUDIES.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'center', paddingBottom: 60, borderBottom: i < STUDIES.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 16 }}>{s.vertical}</div>
                  <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 36px)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16 }}>{s.title}</h2>
                  <p style={{ fontSize: 16, color: 'var(--ink-muted)', lineHeight: 1.65, marginBottom: 24 }}>{s.teaser}</p>
                  <Link to="/contact" className="btn btn-ghost-dark" style={{ padding: '10px 18px', fontSize: 13.5 }}>
                    Read the full story <Icon name="arrow" size={14} />
                  </Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
                  {s.stats.map((stat, j) => (
                    <div key={j} style={{ background: 'var(--paper)', padding: '28px 22px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 32, letterSpacing: '-0.02em', color: 'var(--accent-deep)', marginBottom: 6 }}>{stat.k}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{stat.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
