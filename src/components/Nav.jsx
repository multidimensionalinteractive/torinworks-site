import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon, Logo } from './Icon.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    if (window.location.pathname !== '/') {
      navigate('/#' + id)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    padding: '16px 0',
    background: scrolled ? 'oklch(18% 0.02 230 / 0.82)' : 'transparent',
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
    borderBottom: scrolled ? '1px solid oklch(100% 0 0 / 0.08)' : '1px solid transparent',
    transition: 'all 0.3s ease',
  }

  const linkItems = [
    { label: 'Solutions', action: () => scrollTo('solutions') },
    { label: 'How it works', action: () => scrollTo('how-it-works') },
    { label: 'Where we work', action: () => scrollTo('upstream') },
    { label: 'Results', action: () => scrollTo('results') },
    { label: 'About', to: '/about' },
  ]

  return (
    <nav style={navStyle}>
      <div className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'white' }}>
          <Logo color="white" size={28} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15, minWidth: 0 }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 19, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>Torin Works</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(75% 0.06 210)', marginTop: 3, whiteSpace: 'nowrap' }}>Growth Systems</span>
          </div>
        </Link>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 36, fontSize: 14, color: 'oklch(90% 0.01 230)' }}>
          {linkItems.map(item => (
            item.to ? (
              <Link key={item.label} to={item.to} style={{ transition: 'color 0.2s', color: 'oklch(90% 0.01 230)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'oklch(90% 0.01 230)'}
              >{item.label}</Link>
            ) : (
              <button key={item.label} onClick={item.action} style={{ background: 'none', border: 'none', color: 'oklch(90% 0.01 230)', fontSize: 14, cursor: 'pointer', transition: 'color 0.2s', padding: 0 }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'oklch(90% 0.01 230)'}
              >{item.label}</button>
            )
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ padding: '11px 18px', fontSize: 13.5 }}>
            Book an assessment <Icon name="arrow" size={15} />
          </Link>
        </div>

        <button className="mobile-nav" onClick={() => setOpen(!open)} style={{ color: 'white', background: 'none', border: 'none' }}>
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {open && (
        <div className="mobile-nav" style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'oklch(18% 0.02 230 / 0.96)', backdropFilter: 'blur(14px)',
          borderBottom: '1px solid oklch(100% 0 0 / 0.08)', padding: '16px 32px 24px',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {linkItems.map(item => (
            item.to ? (
              <Link key={item.label} to={item.to} onClick={() => setOpen(false)} style={{ color: 'white', fontSize: 16 }}>{item.label}</Link>
            ) : (
              <button key={item.label} onClick={() => { item.action(); setOpen(false); }} style={{ color: 'white', fontSize: 16, background: 'none', border: 'none', textAlign: 'left', padding: 0 }}>{item.label}</button>
            )
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
            Book an assessment
          </Link>
        </div>
      )}
    </nav>
  )
}
