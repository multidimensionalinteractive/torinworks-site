import { BarChart3, TrendingUp, UserCheck, Heart } from 'lucide-react';

const items = [
  { icon: BarChart3, title: 'More high-value clients', desc: 'from existing inquiries' },
  { icon: TrendingUp, title: 'Better conversion', desc: 'without increasing spend' },
  { icon: UserCheck, title: 'Less manual work', desc: 'for your team' },
  { icon: Heart, title: 'More time focused', desc: 'on your clients' },
];

export default function WhatChanges() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark text-center">
          What changes
        </h2>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center px-4 py-6 ${
                i < items.length - 1 ? 'lg:border-r lg:border-gray-100' : ''
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary mb-4">
                <item.icon size={22} />
              </div>
              <h3 className="text-sm font-bold text-text-dark">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
