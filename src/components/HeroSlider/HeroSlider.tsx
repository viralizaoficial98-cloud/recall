import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation, Parallax, Keyboard } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { heroSlides } from '../../data/hero';
import { scrollToSection } from '../../utils/scrollTo';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const textItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSlider() {
  const { t } = useTranslation();
  const slidesText = t('hero.slides', { returnObjects: true }) as {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  }[];

  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goto = (action: 'primary' | 'secondary', index: number) => {
    if (index === 0) return action === 'primary' ? scrollToSection('contactos') : scrollToSection('servicos');
    if (index === 1) return action === 'primary' ? scrollToSection('portfolio') : scrollToSection('contactos');
    return action === 'primary' ? scrollToSection('como-trabalhamos') : scrollToSection('contactos');
  };

  return (
    <section id="inicio" className="relative h-[100svh] w-full overflow-hidden bg-brand-black">
      <Swiper
        modules={[Autoplay, Navigation, Parallax, Keyboard]}
        parallax
        keyboard={{ enabled: true }}
        loop
        speed={1100}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        onSwiper={(s) => (swiperRef.current = s)}
        onRealIndexChange={(s) => setActiveIndex(s.realIndex)}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="kenburns absolute inset-0 -z-10" data-swiper-parallax="-30%">
              <img
                src={slide.image}
                alt={slidesText[index]?.title ?? ''}
                className="h-full w-full object-cover object-center"
                // @ts-expect-error fetchpriority is a valid HTML attribute not yet in this React version's JSX types
                fetchpriority={index === 0 ? 'high' : undefined}
                loading={index === 0 ? undefined : 'lazy'}
                decoding={index === 0 ? undefined : 'async'}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.52) 45%, rgba(0,0,0,0.20) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

            <div className="container-x relative flex h-full items-center">
              {activeIndex === index && (
                <motion.div
                  key={index}
                  variants={textContainer}
                  initial="hidden"
                  animate="visible"
                  className="max-w-2xl text-white"
                >
                  <motion.h1
                    variants={textItem}
                    className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    {slidesText[index]?.title}
                  </motion.h1>
                  <motion.p variants={textItem} className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
                    {slidesText[index]?.description}
                  </motion.p>
                  <motion.div variants={textItem} className="mt-8 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => goto('primary', index)}
                      className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-premium transition-transform hover:scale-105 active:scale-95 sm:text-base"
                    >
                      {slidesText[index]?.primary}
                    </button>
                    <button
                      type="button"
                      onClick={() => goto('secondary', index)}
                      className="rounded-full border-2 border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:text-base"
                    >
                      {slidesText[index]?.secondary}
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-brand-red sm:flex"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-brand-red sm:flex"
      >
        <ChevronRight size={22} />
      </button>

      {/* Pagination + counter */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === i ? 'w-8 bg-brand-red' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-semibold tracking-widest text-white/70">
          {String(activeIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </span>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection('sobre-nos')}
        className="absolute bottom-8 right-6 z-20 hidden animate-bounce flex-col items-center gap-1 text-white/70 md:flex"
        aria-label={t('hero.scrollHint')}
      >
        <ChevronDown size={22} />
      </button>
    </section>
  );
}
