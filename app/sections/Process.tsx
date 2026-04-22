import { Target, MessageSquare, Settings, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '1',
    icon: Target,
    title: 'Acquire',
    desc: 'Attract the right inquiries with strategy that brings quality opportunities in.',
  },
  {
    num: '2',
    icon: MessageSquare,
    title: 'Convert',
    desc: 'Respond faster, follow up smarter, and convert more inquiries into clients.',
  },
  {
    num: '3',
    icon: Settings,
    title: 'Operate',
    desc: 'Intelligent workflows and AI agents reduce manual work and improve consistency.',
  },
  {
    num: '4',
    icon: TrendingUp,
    title: 'Expand',
    desc: 'Build referrals, increase retention, and grow the lifetime value of your clients.',
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="bg-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark">
            The Intelligent Growth System
          </h2>
          <p className="mt-3 text-muted text-lg">
            A proven system to acquire, convert, and grow—powered by AI and human expertise.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.title}
              className="card-hover bg-white rounded-2xl p-6 border border-gray-100 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-sm mb-4">
                {s.num}
              </div>
              <div className="mx-auto flex h-10 w-10 items-center justify-center text-primary mb-3">
                <s.icon size={24} />
              </div>
              <h3 className="text-base font-bold text-text-dark">{s.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
