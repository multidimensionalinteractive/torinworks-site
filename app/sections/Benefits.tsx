import { Users, BarChart3, Clock, Heart } from 'lucide-react';

const outcomes = [
  {
    icon: Users,
    title: 'More high-value clients',
    desc: 'from existing inquiries',
  },
  {
    icon: BarChart3,
    title: 'Better conversion rates',
    desc: 'without increasing spend',
  },
  {
    icon: Clock,
    title: 'Less manual work',
    desc: 'for your team',
  },
  {
    icon: Heart,
    title: 'More time focused',
    desc: 'on your clients',
  },
];

export default function Benefits() {
  return (
    <section className="bg-light py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark">
            What changes
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="card-hover bg-white rounded-2xl p-6 border border-gray-100 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary mb-4">
                <o.icon size={22} />
              </div>
              <h3 className="text-base font-bold text-text-dark">{o.title}</h3>
              <p className="mt-1 text-sm text-muted">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
