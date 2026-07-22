interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  monochrome?: 'light' | 'dark' | false;
}

/**
 * Recreated RE-CALL wordmark as a crisp, resolution-independent SVG.
 * Keeps brand proportions/colors intact across every size (header, footer, preloader, favicon).
 */
export default function Logo({ className = '', variant = 'full', monochrome = false }: LogoProps) {
  const red = monochrome ? (monochrome === 'light' ? '#FFFFFF' : '#1A1A1A') : '#E31E24';
  const dark = monochrome ? (monochrome === 'light' ? '#FFFFFF' : '#1A1A1A') : '#1A1A1A';
  const white = monochrome === 'light' ? '#1A1A1A' : '#FFFFFF';

  if (variant === 'icon') {
    return (
      <svg viewBox="0 0 240 240" className={className} role="img" aria-label="RE-CALL">
        <circle cx="150" cy="38" r="34" fill={red} />
        <path d="M118 38 L178 22 L178 54 Z" fill={white} />
        <circle cx="204" cy="50" r="28" fill={dark} />
        <path d="M176 50 L236 42 L236 58 Z" fill={white} />
        <rect x="20" y="66" width="168" height="168" fill={red} />
        <path
          d="M62 100 h56 c26 0 42 14 42 36 c0 18 -10 30 -26 34 l34 46 h-40 l-28 -40 h-10 v40 h-28 z M90 122 v28 h24 c12 0 18 -6 18 -14 c0 -8 -6 -14 -18 -14 z"
          fill={white}
          fillRule="evenodd"
        />
        <circle cx="76" cy="196" r="10" fill={white} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 980 260" className={className} role="img" aria-label="RE-CALL Business & Services, Lda">
      <circle cx="150" cy="38" r="34" fill={red} />
      <path d="M118 38 L178 22 L178 54 Z" fill={white} />
      <circle cx="204" cy="50" r="28" fill={dark} />
      <path d="M176 50 L236 42 L236 58 Z" fill={white} />
      <rect x="20" y="66" width="168" height="168" fill={red} />
      <path
        d="M62 100 h56 c26 0 42 14 42 36 c0 18 -10 30 -26 34 l34 46 h-40 l-28 -40 h-10 v40 h-28 z M90 122 v28 h24 c12 0 18 -6 18 -14 c0 -8 -6 -14 -18 -14 z"
        fill={white}
        fillRule="evenodd"
      />
      <circle cx="76" cy="196" r="10" fill={white} />

      <text x="228" y="150" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="108" fill={red} letterSpacing="1">
        RE-
      </text>
      <text x="410" y="150" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="108" fill={dark} letterSpacing="1">
        CALL
      </text>

      <text
        x="228"
        y="196"
        fontFamily="Montserrat, sans-serif"
        fontWeight="700"
        fontSize="30"
        fill={dark}
        letterSpacing="4"
      >
        BUSINESS &amp; SERVICES, LDA
      </text>

      <line x1="228" y1="222" x2="300" y2="222" stroke={red} strokeWidth="2" />
      <text
        x="316"
        y="230"
        fontFamily="Montserrat, sans-serif"
        fontWeight="600"
        fontSize="22"
        fill={red}
        letterSpacing="5"
      >
        EVENTOS CORPORATIVOS
      </text>
      <line x1="716" y1="222" x2="788" y2="222" stroke={red} strokeWidth="2" />
    </svg>
  );
}
