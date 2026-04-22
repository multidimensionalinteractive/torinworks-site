import { MailX, Unlink, UserX, Puzzle } from 'lucide-react';

const problems = [
  {
    icon: MailX,
    title: 'Missed or delayed follow-up',
    desc: 'Inquiries go unanswered or lose momentum.',
  },
  {
    icon: Unlink,
    title: 'Leads that never convert',
    desc: 'Opportunities fall through the cracks.',
  },
  {
    icon: UserX,
    title: 'Staff buried in manual tasks',
    desc: 'Time is spent on repetitive work, not revenue.',
  },
  {
    icon: Puzzle,
    title: 'Tools that don\'t work together',
    desc: 'Disconnected systems create friction and gaps.',
  },
];

export default function Problem() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: headline */}
          <div className="lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark leading-tight">
              Most businesses aren&apos;t short on leads.{" "}
              <span className="text-primary">They&apos;re not getting enough from them.</span>
            </h2>
            <p className="mt-5 text-muted text-lg leading-relaxed">
              Opportunities are lost in small gaps that add up to significant revenue left behind.
            </p>
          </div>

          {/* RIGHT: problem items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {problems.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-3.5 p-4 rounded-xl border border-gray-100 bg-light"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-dark">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
