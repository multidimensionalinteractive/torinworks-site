import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'

const POSTS = [
  {
    date: 'April 2026',
    category: 'Strategy',
    title: 'The 5-minute rule: why speed beats everything in lead response',
    excerpt: 'Data from 10,000+ inquiries shows one clear pattern: the practice that replies first wins the patient. Here\'s how to make sure it\'s always you.',
  },
  {
    date: 'March 2026',
    category: 'Operations',
    title: 'How to audit your own intake funnel in 30 minutes',
    excerpt: 'A simple framework for finding the leaks between inquiry and booked visit — no software required.',
  },
  {
    date: 'March 2026',
    category: 'Marketing',
    title: 'AI search visibility (GEO): what practices need to know',
    excerpt: 'Patients are asking ChatGPT and Perplexity who to call. If your practice isn\'t showing up, you\'re invisible to a growing slice of search.',
  },
]

export default function Blog() {
  return (
    <div>
      <section style={{ background: 'var(--night)', color: 'white', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, backgroundImage: `linear-gradient(oklch(100% 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(100% 0 0 / 0.04) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        <div className="container-wide" style={{ position: 'relative' }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>Blog</div>
          <h1 style={{ fontSize: 'clamp(42px, 5vw, 72px)', lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 700 }}>
            Growth insights for appointment-based practices.
          </h1>
        </div>
      </section>

      <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {POSTS.map((post, i) => (
              <div key={i} style={{ background: 'var(--paper)', padding: '36px 32px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: 'clamp(20px, 3vw, 40px)', alignItems: 'start' }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: 6 }}>{post.category}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-muted)' }}>{post.date}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '-0.01em', lineHeight: 1.25, marginBottom: 10 }}>{post.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: 16 }}>{post.excerpt}</p>
                  <button className="btn btn-ghost-dark" style={{ padding: '8px 14px', fontSize: 13 }}>
                    Read more <Icon name="arrow" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
