export interface HeroSlideData {
  id: string;
  image: string;
}

/** Slide order maps 1:1 to hero.slides[] in the translation files. */
export const heroSlides: HeroSlideData[] = [
  { id: 'h1', image: '/assets/images/hero/hero-conferencia.webp' },
  { id: 'h2', image: '/assets/images/hero/hero-networking.webp' },
  { id: 'h3', image: '/assets/images/hero/hero-gala.webp' },
];
