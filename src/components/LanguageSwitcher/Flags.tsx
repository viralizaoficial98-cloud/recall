export function FlagPT({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} role="img" aria-label="Português">
      <rect width="30" height="20" fill="#FF0000" />
      <rect width="12" height="20" fill="#046A38" />
      <circle cx="12" cy="10" r="4.2" fill="#FFCC00" stroke="#046A38" strokeWidth="0.6" />
    </svg>
  );
}

export function FlagGB({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} role="img" aria-label="English">
      <rect width="30" height="20" fill="#00247D" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#CF142B" strokeWidth="1.6" />
      <path d="M15,0 V20 M0,10 H30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M15,0 V20 M0,10 H30" stroke="#CF142B" strokeWidth="3.2" />
    </svg>
  );
}
