const col1 = [
  { label: 'Patient Acquisition', href: '#' },
  { label: 'Workflow Automation', href: '#' },
  { label: 'AI Agents', href: '#' },
  { label: 'Growth Strategy', href: '#' },
];

const col2 = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Our Approach', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'Pricing', href: '#' },
];

const col3 = [
  { label: 'Blog', href: '#' },
  { label: 'Guides', href: '#' },
  { label: 'Free Assessment', href: '#assessment' },
];

const col4 = [
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80 py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 font-bold text-lg text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white text-sm font-extrabold">
                TW
              </span>
              <span>Torin Works</span>
            </a>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Intelligent workflows for high-value, appointment-based businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {col1.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">How It Works</h4>
            <ul className="space-y-2.5">
              {col2.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {col3.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {col4.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Torin Works. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
