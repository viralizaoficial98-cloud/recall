import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { processSteps } from '../../data/process';
import { staggerContainer, fadeInUp, viewportOnce } from '../../utils/motionVariants';
import SectionHeading from '../SectionHeading/SectionHeading';

export default function WorkProcess() {
  const { t } = useTranslation();

  return (
    <section id="como-trabalhamos" className="section-y bg-brand-gray-50">
      <div className="container-x">
        <SectionHeading tag={t('process.tag')} title={t('process.title')} subtitle={t('process.subtitle')} />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16"
        >
          {/* connecting line: horizontal on desktop, vertical on mobile */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-brand-gray-300 sm:block lg:left-0 lg:top-10 lg:h-px lg:w-full" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-6 lg:gap-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.id} variants={fadeInUp} className="relative flex gap-5 pl-16 sm:pl-16 lg:flex-col lg:items-center lg:gap-0 lg:pl-0 lg:text-center">
                  <div className="absolute left-0 top-0 h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md lg:relative lg:left-auto lg:top-auto lg:mb-5 lg:h-20 lg:w-20">
                    <img
                      src={step.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-brand-red/70" />
                    <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-white shadow-sm lg:h-7 lg:w-7">
                      <Icon size={13} strokeWidth={2} className="lg:hidden" />
                      <Icon size={15} strokeWidth={2} className="hidden lg:block" />
                    </div>
                  </div>
                  <div className="lg:px-2">
                    <span className="text-xs font-bold text-brand-red lg:hidden">{`0${i + 1}`}</span>
                    <h3 className="mt-1 text-base font-bold text-brand-black lg:mt-0">
                      {t(`process.steps.${step.translationKey}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-gray-600">
                      {t(`process.steps.${step.translationKey}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
