import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon.jsx'
import { useResponsiveGrid } from '../hooks/useResponsiveGrid.js'

/* ─── Industry content overrides per pillar ─── */
const INDUSTRY = {
  dental: {
    label: 'Dental',
    bullets: {
      Evaluation: [
        'Assess new patient acquisition costs, case acceptance rates, and chair utilization',
        'Audit Google Ads, social, referrals, and SEO channels for ROI by procedure type',
        'Analyze patient journey from inquiry → consult → treatment → referral loop',
      ],
      Strategy: [
        'Build a patient acquisition funnel optimized for high-value procedures (implants, ortho, cosmetic)',
        'Develop local SEO and Google Business Profile strategy for map-pack dominance',
        'Create content strategy targeting patient intent — from "dentist near me" to procedure research',
      ],
      Implementation: [
        'Design conversion-optimized practice websites with online scheduling and intake forms',
        'Set up patient reactivation campaigns for unscheduled treatment plans and hygiene recall',
        'Integrate practice management software (e.g., Dentrix, Eaglesoft) with marketing automation',
      ],
    },
  },
  legal: {
    label: 'Legal',
    bullets: {
      Evaluation: [
        'Evaluate lead sources — organic, paid, referral networks, and directory listings (Avvo, FindLaw)',
        'Assess case intake workflow from first contact to consultation to retainer',
        'Analyze practice area mix and market positioning against local competitors',
      ],
      Strategy: [
        'Develop multi-channel strategy combining SEO, PPC, content marketing, and referral partnerships',
        'Create authority-building content pipeline targeting practice area keywords and intent',
        'Build budget allocation model balancing brand awareness vs. direct response campaigns',
      ],
      Implementation: [
        'Build practice-area-focused landing pages with clear intake paths and trust signals',
        'Integrate case management systems (Clio, MyCase) with intake automation and follow-up sequences',
        'Deploy AI-powered intake chatbots for after-hours lead qualification and scheduling',
      ],
    },
  },
  saas: {
    label: 'SaaS',
    bullets: {
      Evaluation: [
        'Analyze CAC, LTV, churn rate, and funnel conversion metrics across acquisition channels',
        'Audit product-led growth motions, self-serve signups, and sales-assisted conversion paths',
        'Evaluate existing tech stack — analytics, CRM, attribution, and marketing automation maturity',
      ],
      Strategy: [
        'Design integrated demand generation engine combining content, paid, SEO, and community',
        'Build funnel architecture from top-of-funnel awareness through trial/ demo to expansion revenue',
        'Develop PLG + sales hybrid model with trigger-based handoffs and nurture sequences',
      ],
      Implementation: [
        'Optimize product landing pages, pricing pages, and conversion paths with A/B testing',
        'Build automated trial activation, onboarding, and expansion email/messaging sequences',
        'Integrate CRM (Salesforce, HubSpot) with product analytics (Mixpanel, Amplitude) for attribution',
      ],
    },
  },
  realestate: {
    label: 'Real Estate',
    bullets: {
      Evaluation: [
        'Assess lead generation channels — Zillow, Realtor.com, social, open houses, referrals, IDX',
        'Audit existing brand positioning, geographic coverage, and team/agent value proposition',
        'Analyze conversion rates from lead capture → showing → offer → closed deal',
      ],
      Strategy: [
        'Develop data-driven content strategy for specific neighborhoods, property types, and buyer segments',
        'Build multi-channel strategy combining paid ads, SEO, email, and sphere-of-influence marketing',
        'Create consistent brand voice across team, social, and listing content',
      ],
      Implementation: [
        'Build IDX-integrated websites with intelligent listing search, lead capture, and CMA tools',
        'Deploy automated follow-up systems — drip campaigns, listing alerts, and market reports',
        'Integrate CRM (Follow Up Boss, kvCore) with marketing automation for lead scoring and routing',
      ],
    },
  },
}

const INDUSTRIES = Object.keys(INDUSTRY)

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100dvh', color: 'white',
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

/* ─── PILLAR DEFINITIONS (generic + industry overrides) ─── */

const PILLARS = [
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
]

/* ─── Consulting ─── */
function Consulting() {
  const [isMobile, setIsMobile] = useState(false)
  const [expanded, setExpanded] = useState(new Set())
  const [industry, setIndustry] = useState(null) // null = general
  const headerGridRef = useResponsiveGrid('1fr 1fr')
  const outcomeGridRef = useResponsiveGrid('1fr 1fr')

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

  /* Resolve bullets: if industry selected and has overrides for this pillar, merge them in */
  const getItems = (p) => {
    if (!industry) return p.items
    const ind = INDUSTRY[industry]
    if (!ind) return p.items
    const override = ind.bullets[p.kicker]
    if (!override) return p.items
    // Prepend industry bullets, then fill remainder with generic
    const merged = [...override]
    for (const item of p.items) {
      if (merged.length >= 5) break
      if (!override.includes(item)) merged.push(item)
    }
    return merged
  }

  return (
    <section id="consulting" style={{ background: 'var(--paper-2)', padding: '120px 0', borderTop: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div ref={headerGridRef} style={{ display: 'grid', gap: 'clamp(40px, 5vw, 80px)', marginBottom: 48, alignItems: 'end' }}>
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

        {/* Industry tabs */}
        <div style={{ marginBottom: 36 }}>
          <div style={{
            display: 'flex', gap: 4, flexWrap: 'wrap',
            fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            <button onClick={() => setIndustry(null)} style={{
              padding: '9px 18px', background: industry === null ? 'var(--accent-deep)' : 'transparent',
              color: industry === null ? 'white' : 'var(--ink-muted)',
              border: `1px solid ${industry === null ? 'var(--accent-deep)' : 'var(--line)'}`,
              cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500,
            }}>General</button>
            {INDUSTRIES.map(k => (
              <button key={k} onClick={() => setIndustry(k)} style={{
                padding: '9px 18px',
                background: industry === k ? 'var(--accent-deep)' : 'transparent',
                color: industry === k ? 'white' : 'var(--ink-muted)',
                border: `1px solid ${industry === k ? 'var(--accent-deep)' : 'var(--line)'}`,
                cursor: 'pointer', transition: 'all 0.2s',
              }}>{INDUSTRY[k].label}</button>
            ))}
          </div>
          {industry && (
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.1em', color: 'var(--accent-deep)', marginTop: 12 }}>
              Showing industry-specific priorities for {INDUSTRY[industry].label}
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {PILLARS.map((p, i) => {
            const items = getItems(p)
            return (
              <div key={i} style={{ background: 'var(--paper)', padding: '34px 28px 36px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: 14 }}>{p.kicker}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '-0.012em', lineHeight: 1.25, marginBottom: 18 }}>{p.title}</div>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {(isMobile && !expanded.has(i) ? items.slice(0, 2) : items).map((item, j) => (
                    <li key={j} style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{item}</li>
                  ))}
                </ul>
                {isMobile && items.length > 2 && (
                  <button onClick={() => toggle(i)} style={{
                    marginTop: 14, alignSelf: 'flex-start',
                    fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--accent-deep)', background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                  }}>
                    {expanded.has(i) ? 'Show less' : `Show all (${items.length})`}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <div ref={outcomeGridRef} className="r-pad-sm" style={{ marginTop: 40, background: 'var(--paper)', border: '1px solid var(--line)', padding: '32px 34px', gap: 32, alignItems: 'center', display: 'grid' }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, letterSpacing: '-0.01em', marginBottom: 8 }}>Outcome</div>
            <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0, maxWidth: 720 }}>
              A cohesive, data-driven marketing ecosystem that connects strategy, execution, and automation — enabling sustainable growth, improved efficiency, and measurable ROI.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary r-btn-full r-btn-text-sm">
            Discuss your goals <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Not sure? (Productized vs Consulting toggle / comparison) ─── */
function NotSure() {
  const [mode, setMode] = useState('consulting')
  return (
    <section style={{ background: 'var(--paper)', padding: '100px 0', borderTop: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div style={{ marginBottom: 48, maxWidth: 700 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Two ways to work with us</div>
          <h2 style={{ fontSize: 'clamp(32px, 3.4vw, 46px)', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
            <span style={{ display: 'block', marginBottom: '0.3em' }}>Not sure which fits?</span>
            <span style={{ display: 'block', fontWeight: 300, color: 'var(--accent-deep)' }}>Here's how they compare.</span>
          </h2>
        </div>

        <div style={{ display: 'inline-flex', border: '1px solid var(--line)', background: 'var(--paper-2)', padding: 3, marginBottom: 40 }}>
          {[
            { key: 'consulting', label: 'Custom Consulting' },
            { key: 'system', label: 'Torin System' },
          ].map(k => (
            <button key={k.key} onClick={() => setMode(k.key)} style={{
              padding: '10px 24px', fontFamily: 'var(--mono)', fontSize: 11.5, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: mode === k.key ? 'white' : 'var(--ink-muted)',
              background: mode === k.key ? 'var(--accent-deep)' : 'transparent',
              border: 'none', cursor: 'pointer', transition: 'all 0.25s', fontWeight: 500,
            }}>{k.label}</button>
          ))}
        </div>

        <div className={mode === 'both' ? 'r-grid-2' : ''} style={{ display: 'grid', gridTemplateColumns: mode === 'both' ? '1fr 1fr' : '1fr', gap: 40 }}>
          {mode === 'consulting' && (
            <div className="r-pad-sm" style={{ border: '1px solid var(--line)', padding: '40px 36px', background: 'var(--paper-2)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: 16 }}>Custom Consulting</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 26, letterSpacing: '-0.015em', marginBottom: 8 }}>Strategy-led. Scoped to you.</div>
              <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.6, maxWidth: 600, margin: '0 0 28px' }}>
                For businesses that need deep strategic work — market entry, rebranding, full-stack buildout, or complex integrations. We design and execute custom growth systems.
              </p>
              <div className="r-grid-2" style={{ gap: 20 }}>
                {[
                  { t: 'Best for', b: 'Established businesses with specific growth challenges or strategic transitions' },
                  { t: 'Engagement', b: 'Project-based or ongoing retainer (typically $3.5K–$25K/mo)' },
                  { t: 'Output', b: 'Custom strategy, buildout, and managed execution with regular reporting' },
                  { t: 'Process', b: 'Deep audit → strategy → implementation → optimization cycle' },
                ].map((x, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 16, letterSpacing: '-0.01em', marginBottom: 4 }}>{x.t}</div>
                    <div style={{ fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.5 }}>{x.b}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Link to="/contact" className="btn btn-primary">
                  Discuss your needs <Icon name="arrow" size={16} />
                </Link>
              </div>
            </div>
          )}
          {mode === 'system' && (
            <div className="r-pad-sm" style={{ border: '1px solid var(--line)', padding: '40px 36px', background: 'var(--paper-2)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-deep)', marginBottom: 16 }}>Torin System</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 26, letterSpacing: '-0.015em', marginBottom: 8 }}>Productized. Ready to run.</div>
              <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.6, maxWidth: 600, margin: '0 0 28px' }}>
                For appointment-based practices that need a proven lead-capture-to-conversion engine. A complete system, operated by our team, at a predictable monthly cost.
              </p>
              <div className="r-grid-2" style={{ gap: 20 }}>
                {[
                  { t: 'Best for', b: 'Dental, medical, and legal practices that rely on inbound inquiries' },
                  { t: 'Pricing', b: 'Flat monthly fee from $1,200/mo — predictable, scalable' },
                  { t: 'Output', b: 'Instant response, automated follow-up, 24/7 coverage, weekly reporting' },
                  { t: 'Process', b: 'Setup (1 week) → live operations → continuous optimization' },
                ].map((x, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 16, letterSpacing: '-0.01em', marginBottom: 4 }}>{x.t}</div>
                    <div style={{ fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.5 }}>{x.b}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Link to="/leads" className="btn btn-primary">
                  Explore the system <Icon name="arrow" size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── System Teaser ─── */
function SystemTeaser() {
  const outerGridRef = useResponsiveGrid('1fr 1fr')
  const innerGridRef = useResponsiveGrid('1fr 1fr')
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
        <div ref={outerGridRef} style={{ display: 'grid', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'center' }}>
          <div>
            <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>Lead capture & conversion</div>
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
          <div ref={innerGridRef} style={{ display: 'grid', gap: 1, background: 'oklch(100% 0 0 / 0.1)', border: '1px solid oklch(100% 0 0 / 0.1)' }}>
            {[
              { num: '< 60s', label: 'First response', body: 'Every inquiry answered before your competitor even sees it.' },
              { num: '+38%', label: 'Booked consults', body: 'More of the leads you already pay for turn into appointments.' },
              { num: '24/7', label: 'Coverage', body: 'Nights, weekends, holidays — never miss another inquiry.' },
              { num: '$54k', label: 'Revenue recovered', body: 'Illustrative monthly lift for a typical practice.' },
            ].map((s, i) => (
              <div className="r-pad-sm" key={i} style={{ background: 'oklch(100% 0 0 / 0.03)', padding: '32px 26px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 5vw, 40px)', letterSpacing: '-0.025em', color: 'oklch(78% 0.11 215)', marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, letterSpacing: '-0.01em', color: 'white', marginBottom: 8 }}>{s.label}</div>
                <div style={{ fontSize: 'clamp(12.5px, 3.5vw, 13.5px)', color: 'oklch(78% 0.015 230)', lineHeight: 1.55 }}>{s.body}</div>
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
  const outerGridRef = useResponsiveGrid('1fr 1fr')
  const innerGridRef = useResponsiveGrid('1fr 1fr')
  const ctaBtnRef = useRef(null)
  useEffect(() => {
    const el = ctaBtnRef.current
    if (!el) return
    const mq = window.matchMedia('(max-width: 760px)')
    const apply = () => { el.style.alignItems = mq.matches ? 'stretch' : 'flex-start' }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return (
    <section style={{ background: 'var(--night)', color: 'white', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 50%, oklch(45% 0.14 220 / 0.4), transparent 60%)',
      }} />
      <div ref={outerGridRef} className="container-wide" style={{ position: 'relative', display: 'grid', gap: 'clamp(40px, 5vw, 60px)', alignItems: 'center' }}>
        <div>
          <div className="eyebrow on-dark" style={{ marginBottom: 20 }}>Start with clarity</div>
          <h2 style={{ fontSize: 'clamp(34px, 3.6vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'white' }}>
            Book a free Growth Assessment.
          </h2>
          <p style={{ fontSize: 17, color: 'oklch(85% 0.015 230)', marginTop: 20, lineHeight: 1.6, maxWidth: 520 }}>
            45 minutes. We evaluate your current marketing stack, identify the highest-leverage opportunities, and leave you with a clear, written roadmap — whether you work with us or not.
          </p>
          <div ref={innerGridRef} style={{ display: 'grid', gap: 16, marginTop: 28, maxWidth: 520 }}>
            {[
              { t: 'No commitment', b: "This is a real assessment, not a disguised sales pitch. Walk away with actionable insights either way." },
              { t: 'Tailored to you', b: "We don't use templates. Every recommendation is based on your business model, market, and current data." },
            ].map((x, i) => (
              <div key={i} style={{ borderTop: '1px solid oklch(100% 0 0 / 0.15)', paddingTop: 14 }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, letterSpacing: '-0.01em', color: 'white', marginBottom: 6 }}>{x.t}</div>
                <div style={{ fontSize: 13, color: 'oklch(78% 0.015 230)', lineHeight: 1.5 }}>{x.b}</div>
              </div>
            ))}
          </div>
        </div>
        <div ref={ctaBtnRef} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link to="/contact" className="btn btn-primary r-btn-full r-btn-text-sm" style={{ padding: '18px 26px', fontSize: 15 }}>
            Book your free assessment <Icon name="arrow" size={16} />
          </Link>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', color: 'oklch(70% 0.03 220)', marginTop: 8, lineHeight: 1.5 }}>
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
      <NotSure />
      <SystemTeaser />
      <Outcomes />
      <CTA />
    </>
  )
}