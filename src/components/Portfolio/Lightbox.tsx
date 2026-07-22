import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PortfolioItem } from '../../data/portfolio';
import { useLanguage } from '../../hooks/useLanguage';

interface LightboxProps {
  items: PortfolioItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const { t } = useTranslation();
  const { pick } = useLanguage();
  const open = index !== null;
  const item = open ? items[index!] : null;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index! + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((index! - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, index, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={t('portfolio.close')}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-red"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! - 1 + items.length) % items.length);
            }}
            aria-label="Previous"
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-red sm:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-4xl overflow-hidden rounded-xl bg-brand-black shadow-premium"
          >
            <img src={item.image} alt={pick(item.title)} className="max-h-[70vh] w-full object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-white">{pick(item.title)}</h3>
              <p className="mt-1 text-sm uppercase tracking-wide text-brand-red">
                {t(`portfolio.filters.${item.category}`)}
              </p>
            </div>
          </motion.div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! + 1) % items.length);
            }}
            aria-label="Next"
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-red sm:right-6"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
