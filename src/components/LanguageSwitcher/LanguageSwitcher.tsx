import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { FlagPT, FlagGB } from './Flags';

interface LanguageSwitcherProps {
  dark?: boolean;
}

const OPTIONS = [
  { code: 'pt' as const, label: 'PT', Flag: FlagPT },
  { code: 'en' as const, label: 'EN', Flag: FlagGB },
];

export default function LanguageSwitcher({ dark = false }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = OPTIONS.find((o) => o.code === lang) ?? OPTIONS[0];

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${
          dark
            ? 'border-white/25 text-white hover:border-white/50'
            : 'border-brand-gray-300 text-brand-black hover:border-brand-red'
        }`}
      >
        <current.Flag className="h-4 w-5 rounded-sm object-cover" />
        {current.label}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-32 overflow-hidden rounded-lg border border-brand-gray-200 bg-white py-1 shadow-premium"
        >
          {OPTIONS.map(({ code, label, Flag }) => (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={lang === code}
              onClick={() => {
                setLang(code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-brand-gray-100 ${
                lang === code ? 'text-brand-red' : 'text-brand-black'
              }`}
            >
              <Flag className="h-4 w-5 rounded-sm object-cover" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
