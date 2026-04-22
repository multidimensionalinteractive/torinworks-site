import { ArrowRight, BarChart3, Clock, Users, DollarSign } from 'lucide-react';

const benefits = [
  { icon: BarChart3, title: 'Convert More', desc: 'Turn more inquiries into high-value clients.' },
  { icon: Clock, title: 'Save Time', desc: 'Automate busywork and follow up consistently.' },
  { icon: Users, title: 'Better Client Experience', desc: 'Faster responses and a smoother journey.' },
  { icon: DollarSign, title: 'Stronger Growth', desc: 'More referrals, repeat business, and revenue.' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[720px] flex items-center overflow-hidden bg-dark">
      {/* Abstract dark background with subtle orbs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-20 md:py-28 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* LEFT: copy */}
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">
              A Human-Led, AI-Enabled Partner
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.1] tracking-tight">
              Intelligent workflows.{" "}
              <span className="text-secondary">Better business results.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
              We help high-value, appointment-based businesses attract, convert, and follow up
              on more inquiries—using AI and intelligent workflows to make better use of time,
              effort, and marketing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#assessment"
                className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base"
              >
                Book a Free Assessment
                <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-base border border-white/20 hover:bg-white/5 transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* RIGHT: frosted glass panel with benefits */}
          <div className="flex-1 w-full lg:max-w-[440px]">
            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="space-y-5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <b.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{b.title}</h3>
                      <p className="mt-0.5 text-sm text-white/60 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
