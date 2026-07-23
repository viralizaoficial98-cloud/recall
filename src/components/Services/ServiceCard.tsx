import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../../data/services';
import { zoomIn } from '../../utils/motionVariants';
import { scrollToSection } from '../../utils/scrollTo';

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const { t } = useTranslation();
  const Icon = service.icon;
  const title = t(`services.items.${service.translationKey}.title`);

  return (
    <motion.div
      variants={zoomIn}
      className="group relative overflow-hidden rounded-2xl border border-brand-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
    >
      <span className="absolute bottom-0 left-0 z-10 h-1 w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />

      {service.image ? (
        <>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
              <img
                src={service.image}
                alt={title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
            </div>
            <div className="absolute -bottom-6 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-red shadow-md transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
              <Icon size={22} strokeWidth={1.8} />
            </div>
          </div>

          <div className="p-6 pt-9">
            <h3 className="text-lg font-bold text-brand-black">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
              {t(`services.items.${service.translationKey}.description`)}
            </p>
            <button
              type="button"
              onClick={() => scrollToSection('contactos')}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red transition-all group-hover:gap-2.5"
            >
              {t('services.more')}
              <ArrowRight size={16} />
            </button>
          </div>
        </>
      ) : (
        <div className="p-7">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
            <Icon size={28} strokeWidth={1.8} />
          </div>

          <h3 className="text-lg font-bold text-brand-black">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
            {t(`services.items.${service.translationKey}.description`)}
          </p>

          <button
            type="button"
            onClick={() => scrollToSection('contactos')}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red transition-all group-hover:gap-2.5"
          >
            {t('services.more')}
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </motion.div>
  );
}
