export type PortfolioCategory =
  | 'conferences'
  | 'galas'
  | 'launches'
  | 'workshops'
  | 'teambuilding'
  | 'institutional';

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  title: { pt: string; en: string };
  image: string;
}

/** Demonstrative portfolio entries — swap `image` for real event photography. */
export const portfolioItems: PortfolioItem[] = [
  { id: 'p1', category: 'conferences', title: { pt: 'Conferência Anual de Liderança', en: 'Annual Leadership Conference' }, image: '/assets/images/portfolio/portfolio-conferencia-01.webp' },
  { id: 'p2', category: 'conferences', title: { pt: 'Fórum de Inovação Empresarial', en: 'Business Innovation Forum' }, image: '/assets/images/portfolio/portfolio-conferencia-02.webp' },
  { id: 'p3', category: 'galas', title: { pt: 'Gala de Aniversário Corporativo', en: 'Corporate Anniversary Gala' }, image: '/assets/images/portfolio/portfolio-gala-01.webp' },
  { id: 'p4', category: 'galas', title: { pt: 'Jantar de Reconhecimento Anual', en: 'Annual Recognition Dinner' }, image: '/assets/images/portfolio/portfolio-gala-02.webp' },
  { id: 'p5', category: 'launches', title: { pt: 'Lançamento de Nova Marca', en: 'New Brand Launch' }, image: '/assets/images/portfolio/portfolio-lancamento-01.webp' },
  { id: 'p7', category: 'workshops', title: { pt: 'Workshop de Liderança Executiva', en: 'Executive Leadership Workshop' }, image: '/assets/images/portfolio/portfolio-workshop-01.webp' },
  { id: 'p8', category: 'workshops', title: { pt: 'Formação de Alta Performance', en: 'High-Performance Training' }, image: '/assets/images/portfolio/portfolio-workshop-02.webp' },
  { id: 'p9', category: 'teambuilding', title: { pt: 'Team Building Corporativo', en: 'Corporate Team Building' }, image: '/assets/images/portfolio/portfolio-teambuilding-01.webp' },
  { id: 'p10', category: 'teambuilding', title: { pt: 'Retiro de Equipas', en: 'Team Retreat' }, image: '/assets/images/portfolio/portfolio-teambuilding-02.webp' },
  { id: 'p11', category: 'institutional', title: { pt: 'Cerimónia de Assinatura Institucional', en: 'Institutional Signing Ceremony' }, image: '/assets/images/portfolio/portfolio-institucional-01.webp' },
];
