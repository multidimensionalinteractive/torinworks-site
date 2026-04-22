import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="assessment" className="bg-dark py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Start with a Growth & Workflow Assessment
        </h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          We analyze your funnel and show where automation can increase revenue.
          You&apos;ll get a clear plan showing where improvements will have the biggest impact.
        </p>
        <a
          href="#assessment"
          className="mt-8 inline-flex items-center gap-2 btn-gradient text-white font-semibold px-8 py-4 rounded-xl text-base"
        >
          Book Your Free Assessment
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
