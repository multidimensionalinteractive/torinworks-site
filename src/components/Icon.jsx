const paths = {
  arrow: <><path d="M5 12h14M13 5l7 7-7 7"/></>,
  arrowRight: <><path d="M5 12h14M13 5l7 7-7 7"/></>,
  check: <><path d="M5 12l5 5L20 7"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  chat: <><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></>,
  phone: <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M8 3v4M16 3v4M3 10h18"/></>,
  refresh: <><path d="M21 12a9 9 0 11-3-6.7L21 8M21 3v5h-5"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>,
  spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1"/></>,
  play: <><path d="M7 4v16l14-8L7 4z"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  bolt: <><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></>,
  trend: <><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></>,
  menu: <><path d="M4 8h16M4 16h16"/></>,
  close: <><path d="M18 6L6 18M6 6l12 12"/></>,
}

export function Icon({ name, size = 20, stroke = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{display:'block'}}>
      {paths[name]}
    </svg>
  )
}

export function Logo({ color = 'currentColor', size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{display:'block'}}>
      <rect x="1" y="1" width="38" height="38" rx="3" stroke={color} strokeWidth="1.2" opacity="0.9"/>
      <path d="M8 14h10M13 14v14" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M20 14l3 11 3-7 3 7 3-11" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}
