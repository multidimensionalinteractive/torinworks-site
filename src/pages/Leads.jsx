import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'
import { VERTICALS, SERVICES, APPROACH, OUTCOMES } from '../data/content.js'

/* ─── Hero ─── */
function Hero() {
  const [vertical, setVertical] = useState('dental')
  const [autoRotate, setAutoRotate] = useState(true)
  const verticals = Object.keys(VERTICALS)
  const v = VERTICALS[vertical]

  useEffect(() => {
    if (!autoRotate) return
    const id = setInterval(() => {
      const idx = verticals.indexOf(vertical)
      setVertical(verticals[(idx + 1) % verticals.length])
    }, 7500)
    return () => clearInterval(id)
  }, [vertical, autoRotate])

  const pickVertical = (k) => { setAutoRotate(false); setVertical(k) }

  return (
    <section style={{
      position: 'relative', minHeight: '100dvh', color: 'white',
      background: 'var(--night)', display: 'flex', flexDirection: 'column', paddingTop: 88,
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {verticals.map(k => (
          <div key={k} style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${VERTICALS[k].photo})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: k === vertical ? 1 : 0, transition: 'opacity 2.2s ease',
          }} />
        ))}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(100deg, oklch(17% 0.025 230 / 0.95) 0%, oklch(17% 0.025 230 / 0.78) 50%, oklch(17% 0.025 230 / 0.3) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4, mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.35'/></svg>")`,
        }} />
      </div>

      <div className="container-wide" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ maxWidth: 880 }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 28 }}>Human-led. AI-enabled. Results-obsessed.</div>
          <h1 style={{
            fontSize: 'clamp(52px, 6.8vw, 104px)', lineHeight: 1.08, letterSpacing: '-0.022em', marginBottom: 28,
          }}>
            <span style={{ display: 'block', fontStyle: 'normal', marginBottom: '0.2em' }}>{v.hero.headline}</span>
            <span style={{ display: 'block', fontWeight: 300, color: 'oklch(78% 0.11 215)' }}>{v.hero.headline2}</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'oklch(88% 0.015 230)', maxWidth: 620, marginBottom: 40, fontWeight: 300 }}>
            {v.hero.sub}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 72 }}>
            <Link to="/contact" className="btn btn-primary">
              Book a free assessment <Icon name="arrow" size={16} className="arrow" />
            </Link>
            <button className="btn btn-ghost" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="play" size={14} /> See how it works
            </button>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'oklch(72% 0.04 220)', marginBottom: 14,
            }}>See it for your practice</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {verticals.map(k => {
                const active = k === vertical
                return (
                  <button key={k} onClick={() => pickVertical(k)} style={{
                    padding: '10px 18px', borderRadius: 999,
                    border: active ? '1px solid oklch(78% 0.11 215)' : '1px solid oklch(100% 0 0 / 0.18)',
                    background: active ? 'oklch(78% 0.11 215 / 0.14)' : 'transparent',
                    color: active ? 'oklch(90% 0.08 215)' : 'oklch(82% 0.01 230)',
                    fontSize: 13.5, fontWeight: 500, transition: 'all 0.25s',
                  }}>{VERTICALS[k].label}</button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid oklch(100% 0 0 / 0.1)', padding: '18px 0' }}>
        <div className="container-wide" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'oklch(70% 0.03 220)',
        }}>
          <span>↓ Scroll · the system</span>
          <span>{v.hero.kicker}</span>
        </div>
      </div>
    </section>
  )
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const caps = [
    { name: 'Voice', icon: 'phone' }, { name: 'SMS', icon: 'chat' },
    { name: 'Email', icon: 'mail' }, { name: 'Calendar', icon: 'calendar' },
    { name: 'CRM', icon: 'user' }, { name: 'Reviews', icon: 'spark' },
  ]
  return (
    <section style={{ background: 'var(--paper-2)', padding: '48px 0', borderBottom: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--ink-muted)', textAlign: 'center', marginBottom: 30,
        }}>One system. Every channel your customers already use.</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 16, alignItems: 'center' }}>
          {caps.map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: 'var(--ink)' }}>
              <span style={{ color: 'var(--accent-deep)' }}><Icon name={p.icon} size={18} /></span>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 20, letterSpacing: '-0.005em' }}>{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Problem ─── */
function Problem() {
  const gaps = [
    { icon: 'mail', title: 'Missed or delayed follow-up', body: 'Inquiries go unanswered or lose momentum in the first 5 minutes.' },
    { icon: 'refresh', title: 'Leads that never convert', body: 'Opportunities fall through the cracks between staff, systems, and shifts.' },
    { icon: 'user', title: 'Staff buried in manual tasks', body: 'Your team spends time on repetitive work instead of patient care.' },
    { icon: 'bolt', title: 'Tools that don\'t talk', body: 'Disconnected systems create friction — and leaks — across your funnel.' },
    { icon: 'spark', title: 'Budget burning on bad clicks', body: 'Ad spend drifts to channels that look busy on paper but don\'t produce booked visits.' },
    { icon: 'calendar', title: 'Great leads, wrong time', body: 'Hot inquiries arrive at 9pm Friday — and cool off before Monday morning.' },
  ]
  return (
    <section style={{ background: 'var(--paper)', padding: '120px 0' }}>
      <div className="container-wide">
        <div className="r-split" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(40px, 5vw, 90px)', alignItems: 'start' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>The real problem</div>
            <h2 style={{ fontSize: 'clamp(38px, 4vw, 56px)', lineHeight: 1.18, letterSpacing: '-0.02em' }}>
              <span style={{ display: 'block', marginBottom: '0.3em' }}>Most practices aren't short on leads.</span>
              <span style={{ display: 'block', fontWeight: 300, color: 'var(--accent-deep)', fontFeatureSettings: '"ss01"' }}>They're losing the ones they already get.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-muted)', marginTop: 24, maxWidth: 460, lineHeight: 1.55 }}>
              The gap between an inquiry and a booked visit is where revenue quietly disappears. We close that gap.
            </p>
          </div>
          <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'var(--line)', border: '1px solid var(--line)' }}>
            {gaps.map((g, i) => (
              <div key={i} style={{ background: 'var(--paper)', padding: '32px 28px' }}>
                <div style={{
                  width: 38, height: 38, display: 'grid', placeItems: 'center',
                  border: '1px solid var(--accent)', color: 'var(--accent-deep)',
                  marginBottom: 18, borderRadius: 999,
                }}><Icon name={g.icon} size={17} /></div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, letterSpacing: '-0.01em', marginBottom: 8 }}>{g.title}</div>
                <div style={{ fontSize: 14.5, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{g.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Handoff ─── */
function Handoff() {
  return (
    <section style={{ background: 'var(--paper)', padding: '120px 0', borderTop: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div className="r-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Our role</div>
            <h2 style={{ fontSize: 'clamp(38px, 4vw, 56px)', lineHeight: 1.18, letterSpacing: '-0.02em' }}>
              <span style={{ display: 'block', marginBottom: '0.3em' }}>We bring them to you.</span>
              <span style={{ display: 'block', fontWeight: 300, color: 'var(--accent-deep)' }}>Your team takes it from there.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-muted)', marginTop: 24, maxWidth: 500, lineHeight: 1.6 }}>
              You are the expert. You close the case, perform the procedure, sign the client. We handle the messy, time-sensitive middle — the follow-ups, the reminders, the after-hours replies — so every qualified inquiry actually lands on your calendar.
            </p>
          </div>
          <div style={{ background: 'var(--paper-2)', border: '1px solid var(--line)', padding: '36px 34px' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: 20 }}>Who does what</div>
            {[
              { who: 'Torin', what: 'Captures every inquiry · replies in under a minute · qualifies · books' },
              { who: 'Torin', what: 'Nurtures cold leads · reactivates dormant ones · sends review asks' },
              { who: 'Torin', what: 'Watches what converts · shifts budget toward it · cuts channels that waste spend' },
              { who: 'You', what: 'Show up for the consult · deliver great care · get referrals' },
            ].map((r, i) => (
              <div key={i} className="r-table-row" style={{
                display: 'grid', gridTemplateColumns: '90px 1fr', gap: 20,
                padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid var(--line)', alignItems: 'baseline',
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '-0.01em', color: r.who === 'Torin' ? 'var(--accent-deep)' : 'var(--ink)' }}>{r.who}</div>
                <div style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{r.what}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Approach ─── */
function Approach() {
  return (
    <section id="how-it-works" style={{ background: 'var(--night)', color: 'white', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.35,
        backgroundImage: `linear-gradient(oklch(100% 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(100% 0 0 / 0.04) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%', width: '55%', height: '90%',
        background: 'radial-gradient(ellipse at center, oklch(45% 0.14 220 / 0.35), transparent 65%)', pointerEvents: 'none',
      }} />
      <div className="container-wide" style={{ position: 'relative' }}>
        <div className="r-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 5vw, 80px)', marginBottom: 72, alignItems: 'end' }}>
          <div>
            <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>How we work</div>
            <h2 style={{ fontSize: 'clamp(38px, 4vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'white' }}>
              A revenue engine for appointment-based practices.
            </h2>
          </div>
          <p style={{ fontSize: 17, color: 'oklch(82% 0.015 230)', lineHeight: 1.6, maxWidth: 460 }}>
            Four tightly-connected stages. Run by our team, tuned to your practice, measured by what actually matters — visits, revenue, retention.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: 'oklch(100% 0 0 / 0.1)', border: '1px solid oklch(100% 0 0 / 0.1)' }}>
          {APPROACH.map((a, i) => (
            <div key={i} style={{ background: 'var(--night)', padding: '36px 28px 40px', position: 'relative', minHeight: 240 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'oklch(78% 0.11 215)', marginBottom: 24 }}>{a.step}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 30, letterSpacing: '-0.015em', marginBottom: 14, color: 'white' }}>{a.label}</div>
              <div style={{ fontSize: 14.5, color: 'oklch(78% 0.015 230)', lineHeight: 1.55 }}>{a.body}</div>
              {i < APPROACH.length - 1 && (
                <div style={{ position: 'absolute', right: -10, top: '50%', transform: 'translateY(-50%)', background: 'var(--night)', padding: '4px', color: 'oklch(78% 0.11 215)', zIndex: 2, display: 'none' }}>
                  <Icon name="arrow" size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Services ─── */
function Services() {
  const [hover, setHover] = useState(null)
  return (
    <section id="solutions" style={{ background: 'var(--paper)', padding: '120px 0' }}>
      <div className="container-wide">
        <div style={{ marginBottom: 64, maxWidth: 760 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>What we deliver</div>
          <h2 style={{ fontSize: 'clamp(38px, 4vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            Eight plays that close the gap between inquiry and booked visit.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-muted)', marginTop: 20, lineHeight: 1.6, maxWidth: 620 }}>
            Run as a full system, or bolt on the pieces you need. Either way, the scoreboard is the same: more booked visits, faster response, happier teams.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {SERVICES.map(s => (
            <div key={s.id}
              onMouseEnter={() => setHover(s.id)} onMouseLeave={() => setHover(null)}
              style={{
                background: hover === s.id ? 'var(--accent-tint)' : 'var(--paper)',
                padding: '32px 26px 36px', cursor: 'default', transition: 'background 0.3s', minHeight: 260, display: 'flex', flexDirection: 'column',
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 28 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--accent-deep)' }}>{s.num}</div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '4px 8px', border: '1px solid var(--line)', color: 'var(--ink-muted)', background: 'var(--paper-2)',
                }}>{s.tag}</div>
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '-0.012em', lineHeight: 1.25, marginBottom: 22, flex: 1, paddingBottom: '0.1em' }}>{s.title}</div>
              <div style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Upstream ─── */
function Upstream() {
  const tiles = [
    { num: '01', title: 'Site audit & tune-up', body: 'We find the conversion leaks in your current site — slow load, dead CTAs, confusing flow — and fix them.' },
    { num: '02', title: 'Landing pages & funnels', body: 'Built to book, not just look good. Each page earns its keep or gets rewritten.' },
    { num: '03', title: 'Ad creative & graphics', body: 'On-brand assets for Meta, Google, and local. Tested, iterated, swapped before they go stale.' },
    { num: '04', title: 'SEO that still matters', body: 'Local rankings, map-pack visibility, and the on-page fundamentals that keep Google sending you patients.' },
    { num: '05', title: 'AI search visibility (GEO)', body: 'Show up when patients ask ChatGPT, Perplexity, or Gemini who to call. It\'s where most first searches now start.' },
  ]
  return (
    <section id="upstream" style={{ background: 'var(--paper-2)', padding: '120px 0', borderTop: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div className="r-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 5vw, 80px)', marginBottom: 56, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>And everything upstream</div>
            <h2 style={{ fontSize: 'clamp(36px, 3.8vw, 52px)', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
              <span style={{ display: 'block', marginBottom: '0.3em' }}>The leaks start before the inquiry.</span>
              <span style={{ display: 'block', fontWeight: 300, color: 'var(--accent-deep)' }}>We fix those too.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--ink-muted)', lineHeight: 1.6, maxWidth: 480 }}>
            A great intake system can only do so much if it's fed by a site, funnel, or ad that's quietly working against you. We'll audit what you have, fix what's broken, and build what's missing — so the whole thing pulls in the same direction.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {tiles.map(t => (
            <div key={t.num} style={{ background: 'var(--paper)', padding: '30px 24px 34px', display: 'flex', flexDirection: 'column', minHeight: 220 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--accent-deep)', marginBottom: 22 }}>{t.num}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 20, letterSpacing: '-0.01em', lineHeight: 1.25, marginBottom: 14 }}>{t.title}</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{t.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Trust & Safety ─── */
function TrustSafety() {
  const pillars = [
    { t: 'HIPAA-aware by default', b: 'Medical and legal workflows built with encryption, access controls, and BAAs where required.' },
    { t: 'Every voice is yours', b: 'You approve the scripts, the tone, the boundaries. Nothing goes out that doesn\'t sound like your practice.' },
    { t: 'Humans in the loop', b: 'Our team reviews conversations daily. Anything sensitive routes to a real person — never a dead-end bot.' },
    { t: 'Your data stays yours', b: 'We don\'t train on it, sell it, or leak it. Full export and off-boarding any time, no lock-in.' },
  ]
  return (
    <section style={{ background: 'var(--paper-2)', padding: '100px 0', borderTop: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div style={{ marginBottom: 48, maxWidth: 700 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Trust &amp; safety</div>
          <h2 style={{ fontSize: 'clamp(32px, 3.4vw, 46px)', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
            Built for practices where one misstep is a real problem.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ background: 'var(--paper)', padding: '30px 26px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 20, letterSpacing: '-0.01em', marginBottom: 10, lineHeight: 1.25 }}>{p.t}</div>
              <div style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{p.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pipeline / Results ─── */
function Pipeline() {
  const [mode, setMode] = useState('after')
  const before = [
    { stage: 'Inquiries', count: 100, lost: 0 }, { stage: 'Responded', count: 62, lost: 38 },
    { stage: 'Qualified', count: 41, lost: 21 }, { stage: 'Booked', count: 18, lost: 23 },
    { stage: 'Showed', count: 12, lost: 6 },
  ]
  const after = [
    { stage: 'Inquiries', count: 100, lost: 0 }, { stage: 'Responded', count: 98, lost: 2 },
    { stage: 'Qualified', count: 78, lost: 20 }, { stage: 'Booked', count: 54, lost: 24 },
    { stage: 'Showed', count: 47, lost: 7 },
  ]
  const data = mode === 'after' ? after : before
  const max = 100

  return (
    <section id="results" style={{ background: 'var(--night)', color: 'white', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        backgroundImage: `linear-gradient(oklch(100% 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(100% 0 0 / 0.04) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />
      <div className="container-wide" style={{ position: 'relative' }}>
        <div className="r-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 5vw, 60px)', alignItems: 'end', marginBottom: 56 }}>
          <div>
            <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>Before / after</div>
            <h2 style={{ fontSize: 'clamp(38px, 4vw, 56px)', lineHeight: 1.18, letterSpacing: '-0.02em', color: 'white' }}>
              <span style={{ display: 'block', marginBottom: '0.3em' }}>Same 100 inquiries.</span>
              <span style={{ display: 'block', fontWeight: 300, color: 'oklch(78% 0.11 215)' }}>Very different outcome.</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 17, color: 'oklch(82% 0.015 230)', lineHeight: 1.6, maxWidth: 440, marginBottom: 24 }}>
              Here's what happens to 100 inquiries at a typical practice — and what changes when our system runs alongside your team.
            </p>
            <div style={{ display: 'inline-flex', border: '1px solid oklch(100% 0 0 / 0.15)', background: 'oklch(100% 0 0 / 0.04)', padding: 3 }}>
              {['before', 'after'].map(k => (
                <button key={k} onClick={() => setMode(k)} style={{
                  padding: '9px 22px', fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: mode === k ? 'var(--night)' : 'oklch(82% 0.015 230)',
                  background: mode === k ? 'white' : 'transparent', transition: 'all 0.25s',
                }}>{k === 'before' ? 'Before Torin' : 'With Torin'}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="r-pad-sm" style={{ border: '1px solid oklch(100% 0 0 / 0.12)', padding: '40px 44px 44px', background: 'oklch(100% 0 0 / 0.02)' }}>
          <div className="r-table-row" style={{
            display: 'grid', gridTemplateColumns: '130px 1fr 80px', gap: 24, alignItems: 'center',
            fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'oklch(65% 0.03 220)', marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid oklch(100% 0 0 / 0.08)',
          }}>
            <div>Stage</div><div>Volume</div><div style={{ textAlign: 'right' }}>Remaining</div>
          </div>
          {data.map((d, i) => {
            const pct = (d.count / max) * 100
            const prevCount = i === 0 ? max : data[i - 1].count
            const lostPct = ((prevCount - d.count) / max) * 100
            return (
              <div key={d.stage} className="r-table-row" style={{ display: 'grid', gridTemplateColumns: '130px 1fr 80px', gap: 24, alignItems: 'center', padding: '16px 0', borderTop: i === 0 ? 'none' : '1px solid oklch(100% 0 0 / 0.05)' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 19, letterSpacing: '-0.01em' }}>{d.stage}</div>
                <div style={{ position: 'relative', height: 32, display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: `${pct}%`, height: '100%',
                    background: mode === 'after' ? 'linear-gradient(90deg, oklch(58% 0.14 215), oklch(72% 0.12 205))' : 'linear-gradient(90deg, oklch(48% 0.08 225), oklch(58% 0.09 220))',
                    transition: 'width 0.9s cubic-bezier(.2,.7,.2,1)', position: 'relative',
                  }}>
                    <div style={{ position: 'absolute', right: -2, top: 0, bottom: 0, width: 2, background: 'oklch(100% 0 0 / 0.3)' }} />
                  </div>
                  {lostPct > 0 && (
                    <div style={{
                      width: `${lostPct}%`, height: '100%',
                      background: `repeating-linear-gradient(135deg, oklch(100% 0 0 / 0.04) 0 6px, transparent 6px 12px)`,
                      borderTop: '1px dashed oklch(100% 0 0 / 0.2)', borderBottom: '1px dashed oklch(100% 0 0 / 0.2)',
                      transition: 'width 0.9s cubic-bezier(.2,.7,.2,1)',
                    }} />
                  )}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24, letterSpacing: '-0.015em', textAlign: 'right', color: mode === 'after' ? 'oklch(88% 0.08 210)' : 'oklch(80% 0.015 230)' }}>
                  {d.count}
                </div>
              </div>
            )
          })}
          <div className="r-grid-2" style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid oklch(100% 0 0 / 0.1)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32 }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(65% 0.03 220)', marginBottom: 8 }}>Booked visits</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 40, letterSpacing: '-0.02em' }}>
                {mode === 'after' ? '54' : '18'}
                <span style={{ fontSize: 18, color: 'oklch(75% 0.05 215)', marginLeft: 10, fontFamily: 'var(--sans)' }}>{mode === 'after' ? '+3x' : 'baseline'}</span>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(65% 0.03 220)', marginBottom: 8 }}>Response time</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 40, letterSpacing: '-0.02em' }}>{mode === 'after' ? '47s' : '6h 20m'}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(65% 0.03 220)', marginBottom: 8 }}>Revenue recovered*</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 40, letterSpacing: '-0.02em' }}>{mode === 'after' ? '$54k/mo' : '—'}</div>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', color: 'oklch(55% 0.02 220)', marginTop: 14 }}>
            * Illustrative — based on $1k avg. case value
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Outcomes ─── */
function Outcomes() {
  return (
    <section style={{ background: 'var(--paper)', padding: '120px 0' }}>
      <div className="container-wide">
        <div style={{ marginBottom: 56, maxWidth: 700 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>What changes</div>
          <h2 style={{ fontSize: 'clamp(38px, 4vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            The difference you'll feel in 30 days.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {OUTCOMES.map((o, i) => (
            <div key={i} style={{ background: 'var(--paper)', padding: '44px 34px' }}>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 64, lineHeight: 1, letterSpacing: '-0.025em',
                color: 'var(--accent-deep)', marginBottom: 16, fontWeight: 300,
              }}>{o.stat}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '-0.01em', marginBottom: 10 }}>{o.label}</div>
              <div style={{ fontSize: 14.5, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{o.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section style={{ background: 'var(--night)', color: 'white', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 50%, oklch(45% 0.14 220 / 0.4), transparent 60%)',
      }} />
      <div className="container-wide" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 'clamp(40px, 5vw, 60px)', alignItems: 'center' }}>
        <div>
          <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>Start with clarity</div>
          <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'white' }}>
            Book a free Growth &amp; Workflow Assessment.
          </h2>
          <p style={{ fontSize: 17, color: 'oklch(85% 0.015 230)', marginTop: 20, lineHeight: 1.6, maxWidth: 520 }}>
            45 minutes. We audit how your practice captures, responds to, and converts inquiries — and leave you with a clear, written plan, whether you work with us or not.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 28, maxWidth: 520 }}>
            {[
              { t: 'Pilot with confidence', b: 'Month-to-month from day one. If it\'s not the right fit, walk away any time — no contracts, no exit fees.' },
              { t: 'Transparent reporting', b: 'Weekly numbers in your inbox. No lock-in, no creative accounting. You\'ll always know if it\'s working — and so will we.' },
            ].map((x, i) => (
              <div key={i} style={{ borderTop: '1px solid oklch(100% 0 0 / 0.15)', paddingTop: 14 }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, letterSpacing: '-0.01em', color: 'white', marginBottom: 6 }}>{x.t}</div>
                <div style={{ fontSize: 13, color: 'oklch(78% 0.015 230)', lineHeight: 1.5 }}>{x.b}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 26px', fontSize: 15 }}>
            Book your free assessment <Icon name="arrow" size={16} />
          </Link>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', color: 'oklch(70% 0.03 220)', marginTop: 8 }}>
            No pitch. No pressure. Just a plan.
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Leads() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <Handoff />
      <Approach />
      <Services />
      <Upstream />
      <TrustSafety />
      <Pipeline />
      <Outcomes />
      <CTA />
    </>
  )
}
