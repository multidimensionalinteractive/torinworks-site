import { ArrowRight, CalendarCheck } from 'lucide-react';

export default function ReadyCTA() {
  return (
    <section className="bg-secondary/10 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT */}
          <div className="flex-1 flex items-start gap-5">
            <div className="hidden md:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/20 text-secondary">
              <CalendarCheck size={26} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark leading-tight">
                Ready to see what&apos;s possible?
              </h2>
              <p className="mt-4 text-muted text-lg leading-relaxed">
                Book a free assessment and walk away with clarity on what&apos;s possible for your business.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <a
            href="#assessment"
            className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base shrink-0"
          >
            Book a Free Assessment
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
