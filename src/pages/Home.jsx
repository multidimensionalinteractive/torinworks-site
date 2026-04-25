import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh', color: 'white', overflow: 'hidden',
      background: 'var(--night)', display: 'flex', flexDirection: 'column', paddingTop: 88,
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, oklch(14% 0.03 240) 0%, oklch(18% 0.04 230) 40%, oklch(22% 0.06 220) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4, mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.35'/></svg>")`,
        }} />
        <div style={{
          position: 'absolute', top: '-30%', right: '-15%', width: '65%', height: '100%',
          background: 'radial-gradient(ellipse at center, oklch(42% 0.15 220 / 0.35), transparent 65%)', pointerEvents: 'none',
        }} />
      </div>

      <div className="container-wide" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ maxWidth: 880 }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 28 }}>Strategic marketing consulting · AI-enabled execution</div>
          <h1 style={{
            fontSize: 'clamp(48px, 6.2vw, 96px)', lineHeight: 1.08, letterSpacing: '-0.022em', marginBottom: 28,
          }}>
            <span style={{ display: 'block', fontStyle: 'normal', marginBottom: '0.2em' }}>Growth consulting for</span>
            <span style={{ display: 'block', fontWeight: 300, color: 'oklch(78% 0.11 215)' }}>businesses ready to scale.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'oklch(88% 0.015 230)', maxWidth: 640, marginBottom: 40, fontWeight: 300 }}>
            We align your business goals with measurable growth outcomes through deep evaluation, modern digital infrastructure, and intelligent automation — so your marketing system performs like a product, not a guessing game.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
            <Link to="/contact" className="btn btn-primary">
              Discuss your goals <Icon name="arrow" size={16} className="arrow" />
            </Link>
            <button className="btn btn-ghost" onClick={() => document.getElementById('consulting')?.scrollIntoView({ behavior: 'smooth' })}>
              See our services <Icon name="arrow" size={14} />
            </button>
          </div>
          <div style={{
            display: 'flex', gap: 40, flexWrap: 'wrap',
            fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'oklch(70% 0.03 220)',
          }}>
            <span>Strategy</span>
            <span style={{ color: 'oklch(100% 0 0 / 0.2)' }}>·</span>
            <span>Implementation</span>
            <span style={{ color: 'oklch(100% 0 0 / 0.2)' }}>·</span>
            <span>Automation</span>
            <span style={{ color: 'oklch(100% 0 0 / 0.2)' }}>·</span>
            <span>Optimization</span>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid oklch(100% 0 0 / 0.1)', padding: '18px 0' }}>
        <div className="container-wide" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'oklch(70% 0.03 220)',
        }}>
          <span>↓ Scroll · the approach</span>
          <span>Human-led. AI-enabled. Results-obsessed.</span>
        </div>
      </div>
    </section>
  )
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const caps = [
    { name: 'Strategy', icon: 'target' },
    { name: 'Creative', icon: 'spark' },
    { name: 'Automation', icon: 'bolt' },
    { name: 'Analytics', icon: 'chart' },
    { name: 'SEO', icon: 'search' },
    { name: 'AI Systems', icon: 'cpu' },
  ]
  return (
    <section style={{ background: 'var(--paper-2)', padding: '48px 0', borderBottom: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--ink-muted)', textAlign: 'center', marginBottom: 30,
        }}>One partner. Every growth lever your business needs.</div>
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

/* ─── Consulting ─── */
function Consulting() {
  const [isMobile, setIsMobile] = useState(false)
  const [expanded, setExpanded] = useState(new Set())

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const toggle = (i) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i); else next.add(i)
      return next
    })
  }

  const pillars = [
    {
      kicker: 'Evaluation',
      title: 'Consulting & Strategic Evaluation',
      items: [
        'Assess core business objectives, revenue targets, and growth constraints',
        'Audit existing marketing channels, campaigns, and brand positioning',
        'Identify gaps in customer acquisition, conversion, and retention',
        'Analyze target audience segments, buyer journeys, and competitive landscape',
        'Evaluate current technology stack, analytics, and data utilization',
        'Develop a clear, actionable marketing roadmap aligned with business goals',
        'Establish KPIs, attribution models, and performance benchmarks',
      ],
    },
    {
      kicker: 'Strategy',
      title: 'Marketing Strategy Development',
      items: [
        'Define brand messaging, voice, and market differentiation',
        'Build integrated multi-channel strategies (organic, paid, outbound, partnerships)',
        'Develop funnel architecture from awareness to conversion and retention',
        'Create content strategy aligned with audience intent and SEO opportunities',
        'Recommend budget allocation and scaling strategies',
      ],
    },
    {
      kicker: 'Implementation',
      title: 'Project Development & Implementation',
      items: [
        'Website planning, architecture, and conversion-focused design',
        'Development of microsites and campaign-specific landing pages',
        'Social media infrastructure setup, optimization, and content systems',
        'Content production workflows including blogs, video, and multimedia assets',
        'CRM and marketing automation system integration',
      ],
    },
    {
      kicker: 'Content',
      title: 'Content & Distribution Systems',
      items: [
        'Design and implementation of scalable content delivery pipelines',
        'Editorial calendar creation and content lifecycle management',
        'SEO optimization and performance tracking',
        'Multi-platform distribution strategies (web, social, email, syndication)',
      ],
    },
    {
      kicker: 'AI & Automation',
      title: 'AI & Automation Integration',
      items: [
        'Integration of AI agents for customer engagement and support',
        'Marketing automation using AI-driven personalization and segmentation',
        'Chatbots and conversational interfaces for lead capture and qualification',
        'Workflow automation for content generation, scheduling, and analytics',
        'Data-driven optimization using predictive insights and machine learning tools',
      ],
    },
    {
      kicker: 'Optimization',
      title: 'Ongoing Optimization & Advisory',
      items: [
        'Continuous performance monitoring and reporting',
        'A/B testing and conversion rate optimization',
        'Strategy refinement based on data insights and market changes',
        'Executive-level advisory for scaling marketing operations',
      ],
    },
  ];

  return (
    <section id="consulting" style={{ background: 'var(--paper-2)', padding: '120px 0', borderTop: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 5vw, 80px)', marginBottom: 64, alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Consulting</div>
            <h2 style={{ fontSize: 'clamp(38px, 4vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
              <span style={{ display: 'block', marginBottom: '0.3em' }}>Strategic marketing consulting</span>
              <span style={{ display: 'block', fontWeight: 300, color: 'var(--accent-deep)' }}>built for measurable growth.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--ink-muted)', lineHeight: 1.6, maxWidth: 480 }}>
            We combine deep evaluation, modern digital infrastructure, and intelligent automation to build scalable, high-performing marketing systems — aligned to your business goals and measured by outcomes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ background: 'var(--paper)', padding: '34px 28px 36px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: 14 }}>{p.kicker}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '-0.012em', lineHeight: 1.25, marginBottom: 18 }}>{p.title}</div>
              <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(isMobile && !expanded.has(i) ? p.items.slice(0, 2) : p.items).map((item, j) => (
                  <li key={j} style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{item}</li>
                ))}
              </ul>
              {isMobile && p.items.length > 2 && (
                <button
                  onClick={() => toggle(i)}
                  style={{
                    marginTop: 14, alignSelf: 'flex-start',
                    fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--accent-deep)', background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                  }}
                >
                  {expanded.has(i) ? 'Show less' : `Show all (${p.items.length})`}
                </button>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, background: 'var(--paper)', border: '1px solid var(--line)', padding: '32px 34px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '-0.01em', marginBottom: 8 }}>Outcome</div>
            <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0, maxWidth: 720 }}>
              A cohesive, data-driven marketing ecosystem that connects strategy, execution, and automation — enabling sustainable growth, improved efficiency, and measurable ROI.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
            Discuss your goals <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── System Teaser ─── */
function SystemTeaser() {
  return (
    <section id="system" style={{ background: 'var(--night)', color: 'white', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'center' }}>
          <div>
            <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>Lead capture &amp; conversion</div>
            <h2 style={{ fontSize: 'clamp(36px, 3.8vw, 52px)', lineHeight: 1.12, letterSpacing: '-0.02em', color: 'white' }}>
              <span style={{ display: 'block', marginBottom: '0.3em' }}>We also run the system.</span>
              <span style={{ display: 'block', fontWeight: 300, color: 'oklch(78% 0.11 215)' }}>So you don't have to.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'oklch(82% 0.015 230)', lineHeight: 1.6, maxWidth: 480, marginTop: 24 }}>
              For appointment-based practices, we operate a complete lead-capture-to-conversion engine — instant response, SMS follow-up, after-hours coverage, and spend optimization. Your team shows up; we handle the rest.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
              <Link to="/leads" className="btn btn-primary">
                Explore the system <Icon name="arrow" size={16} />
              </Link>
              <Link to="/contact" className="btn btn-ghost" style={{ color: 'oklch(82% 0.015 230)', borderColor: 'oklch(100% 0 0 / 0.2)' }}>
                Book an assessment
              </Link>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'oklch(100% 0 0 / 0.1)', border: '1px solid oklch(100% 0 0 / 0.1)' }}>
            {[
              { num: '< 60s', label: 'First response', body: 'Every inquiry answered before your competitor even sees it.' },
              { num: '+38%', label: 'Booked consults', body: 'More of the leads you already pay for turn into appointments.' },
              { num: '24/7', label: 'Coverage', body: 'Nights, weekends, holidays — never miss another inquiry.' },
              { num: '$54k', label: 'Revenue recovered', body: 'Illustrative monthly lift for a typical practice.' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'oklch(100% 0 0 / 0.03)', padding: '32px 26px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 40, letterSpacing: '-0.025em', color: 'oklch(78% 0.11 215)', marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, letterSpacing: '-0.01em', color: 'white', marginBottom: 8 }}>{s.label}</div>
                <div style={{ fontSize: 13.5, color: 'oklch(78% 0.015 230)', lineHeight: 1.55 }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Outcomes ─── */
function Outcomes() {
  const outcomes = [
    { stat: 'Clearer', label: 'Strategy & direction', body: 'No more fragmented efforts. Every channel, campaign, and creative decision maps back to a single set of business goals.' },
    { stat: 'Faster', label: 'Execution & iteration', body: 'AI-assisted workflows, automated reporting, and agile sprints mean you ship in weeks, not quarters.' },
    { stat: 'Higher', label: 'ROI on every dollar', body: 'Data-driven budget allocation, attribution modeling, and continuous optimization turn spend into predictable returns.' },
  ]
  return (
    <section style={{ background: 'var(--paper)', padding: '120px 0' }}>
      <div className="container-wide">
        <div style={{ marginBottom: 56, maxWidth: 700 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>What changes</div>
          <h2 style={{ fontSize: 'clamp(38px, 4vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            The difference you'll feel in 90 days.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {outcomes.map((o, i) => (
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
            Book a free Growth Assessment.
          </h2>
          <p style={{ fontSize: 17, color: 'oklch(85% 0.015 230)', marginTop: 20, lineHeight: 1.6, maxWidth: 520 }}>
            45 minutes. We evaluate your current marketing stack, identify the highest-leverage opportunities, and leave you with a clear, written roadmap — whether you work with us or not.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 28, maxWidth: 520 }}>
            {[
              { t: 'No commitment', b: 'This is a real assessment, not a disguised sales pitch. Walk away with actionable insights either way.' },
              { t: 'Tailored to you', b: 'We don\'t use templates. Every recommendation is based on your business model, market, and current data.' },
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

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Consulting />
      <SystemTeaser />
      <Outcomes />
      <CTA />
    </>
  )
}
