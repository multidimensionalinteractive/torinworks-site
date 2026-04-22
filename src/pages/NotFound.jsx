import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <section style={{ background: 'var(--paper)', padding: '180px 0 120px', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 500 }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 96, letterSpacing: '-0.03em', color: 'var(--accent-deep)', lineHeight: 1, marginBottom: 16 }}>404</div>
        <h1 style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16 }}>
          Page not found
        </h1>
        <p style={{ fontSize: 16, color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: 32 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to home <Icon name="arrow" size={16} />
        </Link>
      </div>
    </section>
  )
}
