import { Link } from 'react-router-dom'
import { Icon, Logo } from './Icon.jsx'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--night-2)', color: 'white', padding: '72px 0 40px', marginTop: 'auto' }}>
      <div className="container-wide">
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 60,
          paddingBottom: 48, borderBottom: '1px solid oklch(100% 0 0 / 0.08)',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <Logo color="white" size={28} />
              <div style={{ fontFamily: 'var(--serif)', fontSize: 19 }}>Torin Works</div>
            </div>
            <p style={{ fontSize: 14, color: 'oklch(75% 0.02 230)', lineHeight: 1.6, maxWidth: 300, marginBottom: 24 }}>
              A growth partner for appointment-based practices. More booked visits, less chasing leads — without adding staff.
            </p>
            <Link to="/contact" className="btn btn-ghost" style={{ padding: '10px 16px', fontSize: 13 }}>
              Book an assessment <Icon name="arrow" size={14} />
            </Link>
          </div>

          {[
            { h: 'Solutions', items: [
              { label: 'Capture & respond', to: '/#solutions' },
              { label: 'SMS follow-up', to: '/#solutions' },
              { label: 'After-hours coverage', to: '/#solutions' },
              { label: 'Nurture sequences', to: '/#solutions' },
              { label: 'Reactivation', to: '/#solutions' },
            ]},
            { h: 'Where we work', items: [
              { label: 'Appointment-based', to: '/#upstream' },
              { label: 'Professional services', to: '/#upstream' },
              { label: 'Home services', to: '/#upstream' },
              { label: 'Local & regional', to: '/#upstream' },
            ]},
            { h: 'Company', items: [
              { label: 'About', to: '/about' },
              { label: 'Results', to: '/#results' },
              { label: 'Case studies', to: '/case-studies' },
              { label: 'Contact', to: '/contact' },
            ]},
            { h: 'Resources', items: [
              { label: 'Blog', to: '/blog' },
              { label: 'Pricing', to: '/pricing' },
              { label: 'FAQ', to: '/faq' },
            ]},
          ].map(col => (
            <div key={col.h}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(65% 0.03 220)', marginBottom: 16 }}>
                {col.h}
              </div>
              {col.items.map(it => (
                <Link key={it.label} to={it.to} style={{ display: 'block', fontSize: 14, color: 'oklch(85% 0.015 230)', padding: '6px 0' }}>
                  {it.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'oklch(60% 0.03 220)',
          flexWrap: 'wrap', gap: 12,
        }}>
          <div>© 2026 Torin Works · All rights reserved</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/privacy" style={{ color: 'inherit' }}>Privacy</Link>
            <Link to="/terms" style={{ color: 'inherit' }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
