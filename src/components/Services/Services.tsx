import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { staggerContainer, viewportOnce } from '../../utils/motionVariants';
import SectionHeading from '../SectionHeading/SectionHeading';
import ServiceCard from './ServiceCard';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="servicos" className="section-y bg-brand-gray-50">
      <div className="container-x">
        <SectionHeading tag={t('services.tag')} title={t('services.title')} subtitle={t('services.subtitle')} />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
