import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../Logo/Logo';

interface PreloaderProps {
  visible: boolean;
}

export default function Preloader({ visible }: PreloaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6"
          >
            <Logo variant="icon" monochrome="light" className="h-20 w-20 animate-pulse-slow" />
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/15">
              <motion.div
                className="h-full w-full bg-brand-red"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
