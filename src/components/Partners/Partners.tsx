import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { partners } from '../../data/partners';
import { fadeIn, viewportOnce } from '../../utils/motionVariants';

export default function Partners() {
  const { t } = useTranslation();
  const loop = [...partners, ...partners];

  return (
    <section className="section-y bg-brand-gray-50">
      <div className="container-x text-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">{t('partners.tag')}</span>
          <h2 className="mt-3 text-2xl font-extrabold text-brand-black sm:text-3xl">{t('partners.title')}</h2>
        </motion.div>
      </div>

      <div className="group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-gray-50 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-gray-50 to-transparent sm:w-28" />

        <div className="flex w-max animate-marquee gap-14 group-hover:[animation-play-state:paused]">
          {loop.map((partner, i) => (
            <img
              key={`${partner.id}-${i}`}
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
              decoding="async"
              className="h-24 w-auto shrink-0 rounded-xl border border-brand-gray-200 bg-white object-contain shadow-sm grayscale transition-all duration-300 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
