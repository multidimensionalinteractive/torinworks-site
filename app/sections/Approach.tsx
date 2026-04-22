import { ArrowRight, Target, MessageSquare, Settings, TrendingUp, Bot } from 'lucide-react';

const steps = [
  { num: '1', icon: Target, title: 'Acquire', desc: 'Attract the right inquiries with strategy that brings quality opportunities in.' },
  { num: '2', icon: MessageSquare, title: 'Convert', desc: 'Respond faster, follow up smarter, and convert more inquiries into clients.' },
  { num: '3', icon: Settings, title: 'Operate', desc: 'Intelligent workflows and AI agents reduce manual work and improve consistency.' },
  { num: '4', icon: TrendingUp, title: 'Expand', desc: 'Build referrals, increase retention, and grow the lifetime value of your clients.' },
];

export default function Approach() {
  return (
    <section id="how-it-works" className="bg-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: process steps */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark leading-tight">
              The Intelligent Growth System
            </h2>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              A proven system to acquire, convert, and grow—powered by AI and human expertise.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {steps.map((s, i) => (
                <div key={s.title} className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white text-xs font-bold">
                      {s.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <s.icon size={16} className="text-primary" />
                    <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Powered By card */}
          <div className="relative rounded-2xl border border-gray-100 bg-white overflow-hidden">
            <div className="absolute inset-0 pattern-curves opacity-60" />
            <div className="relative p-8 md:p-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-3">
                Powered By
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-dark">
                AI Agents + Intelligent Workflows
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                AI agents handle the repetitive work, so nothing slips through the cracks and your team can focus on what matters most.
              </p>
              <a
                href="#assessment"
                className="mt-6 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
              >
                Learn more about our approach
                <ArrowRight size={16} />
              </a>

              <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                <Bot size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
