import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import TrustLogos from './sections/TrustLogos';
import Problem from './sections/Problem';
import Approach from './sections/Approach';
import StartWithClarity from './sections/StartWithClarity';
import WhatChanges from './sections/WhatChanges';
import ReadyCTA from './sections/ReadyCTA';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustLogos />
        <Problem />
        <Approach />
        <StartWithClarity />
        <WhatChanges />
        <ReadyCTA />
      </main>
      <Footer />
    </>
  );
}
