import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '../../data/config';
import { useLanguage } from '../../hooks/useLanguage';

export default function WhatsAppButton() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const [hover, setHover] = useState(false);

  return (
    <a
      href={getWhatsAppLink(lang)}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={t('whatsapp.tooltip')}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 sm:bottom-7 sm:right-7"
    >
      {hover && (
        <span className="hidden rounded-lg bg-brand-black px-3 py-2 text-xs font-semibold text-white shadow-md sm:block">
          {t('whatsapp.tooltip')}
        </span>
      )}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium transition-transform hover:scale-110 active:scale-95">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
        <FaWhatsapp size={28} className="relative" />
      </span>
    </a>
  );
}
