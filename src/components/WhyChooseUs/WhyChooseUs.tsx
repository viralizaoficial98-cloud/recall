import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../../data/whyChooseUs';
import { staggerContainer, fadeInUp, viewportOnce } from '../../utils/motionVariants';
import SectionHeading from '../SectionHeading/SectionHeading';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="section-y relative overflow-hidden bg-brand-black">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />

      <div className="container-x relative">
        <SectionHeading tag={t('why.tag')} title={t('why.title')} subtitle={t('why.subtitle')} light />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-red/50 hover:bg-white/[0.08]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/15 text-brand-red transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-white">{t(`why.items.${item.translationKey}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {t(`why.items.${item.translationKey}.description`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
