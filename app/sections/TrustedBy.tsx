const logos = [
  'LUMINATE AESTHETICS',
  'elevate DENTAL',
  'RADIANCE PLASTIC SURGERY',
  'Dental Care OF NAPLES',
];

export default function TrustedBy() {
  return (
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
          Trusted by businesses like yours
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((name) => (
            <span
              key={name}
              className="text-gray-800 font-semibold text-sm lg:text-base tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
