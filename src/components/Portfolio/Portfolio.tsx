import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand } from 'lucide-react';
import { portfolioItems, type PortfolioCategory } from '../../data/portfolio';
import { useLanguage } from '../../hooks/useLanguage';
import { zoomIn, viewportOnce } from '../../utils/motionVariants';
import SectionHeading from '../SectionHeading/SectionHeading';
import Lightbox from './Lightbox';

type FilterKey = PortfolioCategory | 'all';

const FILTERS: FilterKey[] = ['all', 'conferences', 'galas', 'launches', 'workshops', 'teambuilding', 'institutional'];
const INITIAL_COUNT = 6;

export default function Portfolio() {
  const { t } = useTranslation();
  const { pick } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>('all');
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === 'all' ? portfolioItems : portfolioItems.filter((item) => item.category === filter)),
    [filter]
  );

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="portfolio" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading tag={t('portfolio.tag')} title={t('portfolio.title')} subtitle={t('portfolio.subtitle')} />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setShowAll(false);
              }}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                filter === f
                  ? 'border-brand-red bg-brand-red text-white'
                  : 'border-brand-gray-300 text-brand-gray-600 hover:border-brand-red hover:text-brand-red'
              }`}
            >
              {t(`portfolio.filters.${f}`)}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.button
                type="button"
                layout
                key={item.id}
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: (i % 3) * 0.08 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl text-left shadow-sm"
              >
                <img
                  src={item.image}
                  alt={pick(item.title)}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-red">
                    {t(`portfolio.filters.${item.category}`)}
                  </span>
                  <span className="mt-1 text-base font-bold text-white">{pick(item.title)}</span>
                </div>
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Expand size={16} />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && filtered.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-full bg-brand-black px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-brand-red active:scale-95"
            >
              {t('portfolio.viewAll')}
            </button>
          </div>
        )}
      </div>

      <Lightbox
        items={visible}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
