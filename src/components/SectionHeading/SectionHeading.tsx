import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../../utils/motionVariants';

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionHeading({ tag, title, subtitle, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mx-auto max-w-2xl ${align === 'center' ? 'text-center' : 'text-left'} ${
        align === 'left' ? 'mx-0' : ''
      }`}
    >
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">{tag}</span>
      <h2
        className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem] ${
          light ? 'text-white' : 'text-brand-black'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${light ? 'text-white/75' : 'text-brand-gray-600'}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
