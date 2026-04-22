export const metadata = {
  title: 'Torin Works — Intelligent Workflows. Better Business Results.',
  description:
    'We help high-value, appointment-based businesses attract, convert, and follow up on more inquiries using AI and intelligent workflows.',
};

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
