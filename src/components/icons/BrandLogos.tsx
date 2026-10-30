import React from 'react'

/** Official 4-color Google "G" Logo */
export function GoogleLogo({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Google">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  )
}

/** Official LinkedIn "in" Logo */
export function LinkedInLogo({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="LinkedIn">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        d="M19 19h-3.1v-5c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8V19H9.2s.04-8.5 0-9.4h3.1v1.3c.4-.6 1.1-1.5 2.8-1.5 2 0 3.9 1.3 3.9 4.2V19zM6.6 8.3c-1.1 0-1.8-.7-1.8-1.7S5.5 5 6.6 5s1.8.7 1.8 1.6-.7 1.7-1.8 1.7zM5 19h3.2V9.6H5V19z"
      />
    </svg>
  )
}

/** Official Instagram Colored App Icon */
export function InstagramLogo({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Instagram">
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
      <rect width="16" height="16" x="4" y="4" rx="4.5" fill="none" stroke="#FFFFFF" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.8" fill="none" stroke="#FFFFFF" strokeWidth="1.7" />
      <circle cx="16.5" cy="7.5" r="1.1" fill="#FFFFFF" />
    </svg>
  )
}

/** Official 5-color Figma Logo */
export function FigmaLogo({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 57" className={className} aria-label="Figma">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  )
}

/** Official Java Cup Logo */
export function JavaLogo({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Java">
      <path
        fill="#E76F00"
        d="M8.8 17.5s-.8.1-.5.7c.3.6 1.4.9 2.4.9 1.8 0 3.3-.8 3.3-.8s-.6.4-1.3.6c-1.1.3-2.3.2-3.1-.2-.6-.3-.8-1.2-.8-1.2zm-.3-3.6s-1 .3-.3 1.2c.8.9 2.4 1.3 4.1 1.2 1.3 0 2.8-.5 2.8-.5s-.7.3-1.6.5c-1.6.3-3.1.2-4.1-.3-.9-.6-.9-2.1-.9-2.1zm5.8-3.4c.5 1.5-1.1 2.8-1.1 2.8s1.6-.7 1.2-2.1c-.4-1.2-1.7-1.8-1.7-1.8s1.3.4 1.6 1.1zm-3.4-3.1c.4 1.1-.9 2.2-.9 2.2s1.3-.5 1-1.7c-.3-1-1.4-1.5-1.4-1.5s1.1.3 1.3 1z"
      />
      <path
        fill="#5382A1"
        d="M17.8 18.7c.3-.4.5-.8.5-1.2 0-1.3-1.5-2.1-3.6-2.6 0 0 .8.5.5 1.1-.4.8-2 1.5-4.4 1.6-2.5.1-4.2-.8-4.2-.8s.6.5 1.8.8c3.2.7 7.7.3 9.4-1.1v2.2zm-12.6 1.8c.8.6 3.1 1.2 6.5 1.2s5.8-.6 6.8-1.3c0 0-1 .4-2.6.6-2.3.3-6.1.3-8.3-.1-1.5-.2-2.4-.4-2.4-.4z"
      />
    </svg>
  )
}

/** AKTU University Crest / Academic Shield Emblem */
export function AktuLogo({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-label="AKTU">
      {/* Shield background */}
      <path
        d="M20 2L6 8v12c0 9 6 15 14 18 8-3 14-9 14-18V8L20 2z"
        fill="#1833FF"
        stroke="#111111"
        strokeWidth="2"
      />
      {/* Gold inner accent */}
      <path
        d="M20 5L9 10v10c0 7 5 12 11 14.5 6-2.5 11-7.5 11-14.5V10L20 5z"
        fill="#FACC15"
      />
      {/* Graduation cap glyph inside shield */}
      <path
        d="M20 12l-8 4 8 4 8-4-8-4z"
        fill="#111111"
      />
      <path
        d="M14 18.5v4c0 1.5 2.7 3.5 6 3.5s6-2 6-3.5v-4"
        fill="none"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26 17v4.5"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="26" cy="22" r="1.2" fill="#111111" />
    </svg>
  )
}

/** CorelDRAW Precision Vector Logo Badge */
export function CorelLogo({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-label="CorelDRAW">
      <rect width="40" height="40" rx="10" fill="#00965E" stroke="#111111" strokeWidth="2" />
      {/* Hot air balloon / vector pen silhouette */}
      <path
        d="M20 7c-6.1 0-11 4.9-11 11 0 4.2 2.3 7.8 5.8 9.7l1.7 4.3h7l1.7-4.3c3.5-1.9 5.8-5.5 5.8-9.7 0-6.1-4.9-11-11-11z"
        fill="#FFFFFF"
      />
      <path
        d="M17 33h6v2h-6z"
        fill="#FED7AA"
        stroke="#111111"
        strokeWidth="1"
      />
      {/* Inner segments */}
      <path
        d="M20 7v19.5M15 9.5c2 4 2 12 0 15M25 9.5c-2 4-2 12 0 15"
        stroke="#00965E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Full-Stack Independent Practice Logo Badge */
export function FullStackLogo({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-label="Full-Stack Freelance">
      <rect width="40" height="40" rx="10" fill="#111111" stroke="#111111" strokeWidth="2" />
      {/* Code brackets and lightning */}
      <path
        d="M14 14l-5 6 5 6M26 14l5 6-5 6"
        fill="none"
        stroke="#74DEB6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 13l-4 14"
        stroke="#FED01B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Next.js Monogram Badge */
export function NextjsLogo({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Next.js">
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#111111" strokeWidth="1" />
      <path
        d="M14.5 8.5v7m-5-7v7l7-7"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** React Atom Logo */
export function ReactLogo({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="React">
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.3" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  )
}

/** TypeScript Logo */
export function TypeScriptLogo({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="TypeScript">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        fill="#FFFFFF"
        d="M11.5 11h-3v8h-2v-8h-3V9.5h8V11zm4.8 2.3c-.6-.4-1.3-.7-2-.9-.5-.2-.9-.4-.9-.8 0-.4.3-.6.9-.6.7 0 1.4.3 2 .8l1-1.3c-.8-.7-1.9-1-3-1-1.8 0-3 1.1-3 2.6 0 1.1.7 1.8 2 2.3.8.3 1.4.5 1.7.7.4.3.5.6.5 1 0 .5-.5.9-1.2.9-.9 0-1.8-.4-2.5-1.2l-1.1 1.4c1 1.1 2.3 1.6 3.6 1.6 2.1 0 3.3-1.1 3.3-2.7 0-1.2-.7-2-2.3-2.6z"
      />
    </svg>
  )
}
