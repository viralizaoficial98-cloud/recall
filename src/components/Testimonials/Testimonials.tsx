import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { testimonials } from '../../data/testimonials';
import { useLanguage } from '../../hooks/useLanguage';
import SectionHeading from '../SectionHeading/SectionHeading';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const { t } = useTranslation();
  const { pick } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <SectionHeading tag={t('testimonials.tag')} title={t('testimonials.title')} subtitle={t('testimonials.subtitle')} />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            speed={700}
            onSwiper={(s) => (swiperRef.current = s)}
            className="pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-2xl border border-brand-gray-200 bg-brand-gray-50 p-8 text-center shadow-sm sm:p-10">
                  <Quote className="mx-auto mb-4 text-brand-red/40" size={36} />
                  <p className="text-base italic leading-relaxed text-brand-gray-700 sm:text-lg">
                    “{pick(item.text)}”
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-brand-red text-brand-red" />
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="text-sm font-bold text-brand-black">{item.name}</div>
                      <div className="text-xs text-brand-gray-500">
                        {pick(item.role)} · {item.company}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Previous"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-2 top-1/3 hidden h-10 w-10 items-center justify-center rounded-full border border-brand-gray-300 bg-white text-brand-black transition-colors hover:border-brand-red hover:text-brand-red sm:-left-5 sm:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-2 top-1/3 hidden h-10 w-10 items-center justify-center rounded-full border border-brand-gray-300 bg-white text-brand-black transition-colors hover:border-brand-red hover:text-brand-red sm:-right-5 sm:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
