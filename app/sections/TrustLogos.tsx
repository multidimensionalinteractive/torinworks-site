const logos = [
  'Luminate Aesthetics',
  'Elevate Dental',
  'Radiance Plastic Surgery',
  'Dental Care of Naples',
];

export default function TrustLogos() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="mx-auto max-w-[1200px] px-5 py-10">
        <p className="text-center text-xs font-semibold text-muted uppercase tracking-widest mb-6">
          Trusted by businesses like yours
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((name) => (
            <span
              key={name}
              className="text-sm font-bold text-gray-400 uppercase tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
