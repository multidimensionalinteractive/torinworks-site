import { Bot, ArrowRight } from 'lucide-react';

export default function FeatureCard() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="bg-gradient-soft rounded-2xl border border-gray-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg">
              <Bot size={28} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-dark">
                AI Agents + Intelligent Workflows
              </h2>
              <p className="mt-2 text-muted text-base md:text-lg max-w-2xl leading-relaxed">
                AI agents handle the repetitive work—capturing leads, following up, and scheduling—so nothing slips through the cracks and your team can focus on what matters most.
              </p>
            </div>
            <a
              href="#assessment"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline shrink-0"
            >
              Learn more about our approach
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
