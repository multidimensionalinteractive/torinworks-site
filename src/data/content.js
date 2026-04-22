export const VERTICALS = {
  dental: {
    label: 'Dental Practices',
    hero: {
      kicker: 'For dental practices',
      headline: 'More booked chairs.',
      headline2: 'Less chasing leads.',
      sub: 'We help high-value, appointment-based practices capture, respond to, and convert more inquiries \u2014 so your front desk stops playing phone tag and your chairs stay full.',
    },
    stats: [
      { k: '< 60 sec', v: 'Average first-response time' },
      { k: '+38%', v: 'Lift in booked consults' },
      { k: '24/7', v: 'After-hours coverage' },
    ],
    photo: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80',
    photoAlt: 'Modern dental operatory',
  },
  medspa: {
    label: 'Medspa & Aesthetics',
    hero: {
      kicker: 'For medspas & aesthetics',
      headline: 'More booked treatments.',
      headline2: 'Fewer inquiries left on read.',
      sub: 'Aesthetics buyers shop late, text first, and expect instant answers. We help you meet them there \u2014 and turn inquiries into consultations before they cool off.',
    },
    stats: [
      { k: '< 60 sec', v: 'Average first-response time' },
      { k: '+42%', v: 'Lift in consult show-rate' },
      { k: '24/7', v: 'Text & after-hours coverage' },
    ],
    photo: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1600&q=80',
    photoAlt: 'Medspa reception',
  },
  legal: {
    label: 'Law Firms',
    hero: {
      kicker: 'For law firms',
      headline: 'More signed clients.',
      headline2: 'Less lost intake.',
      sub: 'The firm that calls back first usually wins the case. We capture every inquiry, qualify it, and route hot leads to your intake team \u2014 day, night, and weekends.',
    },
    stats: [
      { k: '< 60 sec', v: 'Average first-response time' },
      { k: '+31%', v: 'Lift in signed-case rate' },
      { k: '24/7', v: 'Intake coverage' },
    ],
    photo: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1600&q=80',
    photoAlt: 'Law firm interior',
  },
  derm: {
    label: 'Dermatology',
    hero: {
      kicker: 'For dermatology & plastic surgery',
      headline: 'More high-value procedures.',
      headline2: 'Less follow-up friction.',
      sub: 'We nurture cosmetic inquiries from first click to booked consultation, recover dormant leads, and keep your surgical calendar full without adding staff.',
    },
    stats: [
      { k: '< 60 sec', v: 'Average first-response time' },
      { k: '+45%', v: 'Dormant-lead reactivation' },
      { k: '24/7', v: 'Always-on coverage' },
    ],
    photo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
    photoAlt: 'Consultation setting',
  },
};

export const SERVICES = [
  { id: 'capture', num: '01', title: 'Lead capture & instant response', body: 'Every form, call, and DM gets answered in under a minute \u2014 from anywhere they found you.', tag: 'Response' },
  { id: 'sms', num: '02', title: 'SMS follow-up that feels personal', body: 'Real conversations by text, with handoff to your team the moment someone wants to book.', tag: 'Conversion' },
  { id: 'afterhours', num: '03', title: 'After-hours coverage', body: 'Nights, weekends, lunch breaks \u2014 inquiries get qualified so no one hears crickets.', tag: 'Coverage' },
  { id: 'missedcall', num: '04', title: 'Missed-call text-back', body: 'When a call goes unanswered, a text lands before they scroll to the next result.', tag: 'Recovery' },
  { id: 'reactivation', num: '05', title: 'Dormant-lead reactivation', body: 'We re-warm the contacts already sitting in your CRM and turn them into booked visits.', tag: 'Recovery' },
  { id: 'nurture', num: '06', title: 'Email nurture that converts', body: 'Sequences written for your practice \u2014 not a template library \u2014 that keep you top-of-mind.', tag: 'Nurture' },
  { id: 'booking', num: '07', title: 'Booking & calendar automation', body: 'Direct-to-calendar scheduling with reminders that cut no-shows without annoying patients.', tag: 'Operations' },
  { id: 'optimize', num: '08', title: 'Lead quality & spend optimization', body: 'We watch what actually produces booked visits, double down on it, and quietly cut the channels burning your budget.', tag: 'Optimization' },
];

export const APPROACH = [
  { step: '01', label: 'Capture', body: 'Every inquiry \u2014 form, call, text, DM \u2014 caught in one place the moment it comes in.' },
  { step: '02', label: 'Respond', body: 'First reply in under a minute, by text, day or night, in a voice that sounds like your practice.' },
  { step: '03', label: 'Convert', body: 'Qualified leads handed to your team warm, with context, ready to book.' },
  { step: '04', label: 'Grow', body: 'Amplify what\'s producing booked visits, cut what\'s not, and compound the wins with reviews and referrals.' },
];

export const OUTCOMES = [
  { stat: 'Faster', label: 'Every first response', body: 'The firm that replies first usually wins. We make sure yours does \u2014 day or night, every time.' },
  { stat: 'Fuller', label: 'Calendar and chairs', body: 'More of the inquiries you already pay for turn into booked, kept appointments.' },
  { stat: 'Lighter', label: 'Workload on your team', body: 'Your front desk stops chasing ghosts and gets back to taking care of patients in the room.' },
];

export const FAQS = [
  { q: 'How quickly can you start?', a: 'Most practices are live within 7\u201310 business days. We handle setup, integration, and scripting \u2014 your team just shows up for the kickoff call.' },
  { q: 'Do you require long-term contracts?', a: 'No. Everything is month-to-month. If it\'s not the right fit, walk away any time with no exit fees.' },
  { q: 'What channels do you cover?', a: 'Phone, SMS, email, web forms, and DMs \u2014 all routed into one unified response system.' },
  { q: 'Is this HIPAA-compliant?', a: 'Yes. We build with encryption, access controls, and BAAs where required. Medical and legal workflows are our default.' },
  { q: 'How do you measure success?', a: 'Weekly reports in your inbox: response times, conversion rates, booked visits, and revenue attribution. No creative accounting.' },
  { q: 'Will this replace my front desk?', a: 'No. We handle the follow-up, after-hours, and nurturing so your team can focus on patients in the room.' },
];

export const PRICING_TIERS = [
  {
    name: 'Core',
    price: '$1,200',
    period: '/month',
    desc: 'For practices ready to stop losing leads.',
    features: ['Instant response (< 60 sec)', 'SMS & email follow-up', 'After-hours coverage', 'Missed-call text-back', 'Weekly reporting', 'Month-to-month'],
    cta: 'Get started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$2,400',
    period: '/month',
    desc: 'For practices that want to scale intentionally.',
    features: ['Everything in Core', 'Dormant-lead reactivation', 'Email nurture sequences', 'Booking & calendar automation', 'Lead quality optimization', 'Priority support', 'Monthly strategy review'],
    cta: 'Get started',
    popular: true,
  },
  {
    name: 'Partner',
    price: 'Custom',
    period: '',
    desc: 'For multi-location practices and brands.',
    features: ['Everything in Growth', 'Multi-location rollout', 'Upstream creative & SEO', 'AI search visibility (GEO)', 'Dedicated account lead', 'Custom integrations', 'Quarterly business reviews'],
    cta: 'Book a call',
    popular: false,
  },
];
