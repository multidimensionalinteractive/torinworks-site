import { ArrowRight, FileCheck } from 'lucide-react';

export default function StartWithClarity() {
  return (
    <section id="assessment" className="bg-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT */}
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-3">
              Start With Clarity
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Start with a Growth & Workflow Assessment
            </h2>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-lg">
              We&apos;ll analyze how your business attracts, responds to, and converts inquiries.
              You&apos;ll get a clear plan showing where improvements will have the biggest impact.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            <div className="hidden md:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
              <FileCheck size={26} />
            </div>
            <a
              href="#assessment"
              className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base"
            >
              Book Your Free Assessment
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
