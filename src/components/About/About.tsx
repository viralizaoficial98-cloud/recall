import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp, zoomIn, viewportOnce } from '../../utils/motionVariants';
import { stats } from '../../data/stats';
import { scrollToSection } from '../../utils/scrollTo';
import StatCounter from './StatCounter';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="sobre-nos" className="section-y bg-white">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-brand-red/10 sm:-left-6 sm:-top-6 sm:h-32 sm:w-32" />
          <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full border-4 border-brand-red/20 sm:-bottom-6 sm:-right-6 sm:h-24 sm:w-24" />
          <img
            src="/assets/images/about-recall.png"
            alt={t('about.imageAlt')}
            loading="lazy"
            className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-premium"
          />
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">{t('about.tag')}</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-black sm:text-4xl lg:text-[2.6rem]">
              {t('about.title')}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-gray-600 sm:text-lg">{t('about.text')}</p>
            <button
              type="button"
              onClick={() => scrollToSection('contactos')}
              className="mt-7 inline-flex items-center rounded-full bg-brand-black px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-brand-red active:scale-95"
            >
              {t('about.cta')}
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.id} variants={fadeInUp}>
                <StatCounter stat={stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
