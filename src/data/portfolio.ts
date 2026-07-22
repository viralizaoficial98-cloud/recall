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
  { id: 'p1', category: 'conferences', title: { pt: 'Conferência Anual de Liderança', en: 'Annual Leadership Conference' }, image: '/assets/images/portfolio-conferences-1.png' },
  { id: 'p2', category: 'conferences', title: { pt: 'Fórum de Inovação Empresarial', en: 'Business Innovation Forum' }, image: '/assets/images/portfolio-conferences-2.png' },
  { id: 'p3', category: 'galas', title: { pt: 'Gala de Aniversário Corporativo', en: 'Corporate Anniversary Gala' }, image: '/assets/images/portfolio-galas-1.png' },
  { id: 'p4', category: 'galas', title: { pt: 'Jantar de Reconhecimento Anual', en: 'Annual Recognition Dinner' }, image: '/assets/images/portfolio-galas-2.png' },
  { id: 'p5', category: 'launches', title: { pt: 'Lançamento de Nova Marca', en: 'New Brand Launch' }, image: '/assets/images/portfolio-launches-1.png' },
  { id: 'p6', category: 'launches', title: { pt: 'Apresentação de Produto Premium', en: 'Premium Product Showcase' }, image: '/assets/images/portfolio-launches-2.png' },
  { id: 'p7', category: 'workshops', title: { pt: 'Workshop de Liderança Executiva', en: 'Executive Leadership Workshop' }, image: '/assets/images/portfolio-workshops-1.png' },
  { id: 'p8', category: 'workshops', title: { pt: 'Formação de Alta Performance', en: 'High-Performance Training' }, image: '/assets/images/portfolio-workshops-2.png' },
  { id: 'p9', category: 'teambuilding', title: { pt: 'Team Building Corporativo', en: 'Corporate Team Building' }, image: '/assets/images/portfolio-teambuilding-1.png' },
  { id: 'p10', category: 'teambuilding', title: { pt: 'Retiro de Equipas', en: 'Team Retreat' }, image: '/assets/images/portfolio-teambuilding-2.png' },
  { id: 'p11', category: 'institutional', title: { pt: 'Cerimónia de Assinatura Institucional', en: 'Institutional Signing Ceremony' }, image: '/assets/images/portfolio-institutional-1.png' },
  { id: 'p12', category: 'institutional', title: { pt: 'Ato Solene de Aniversário', en: 'Formal Anniversary Ceremony' }, image: '/assets/images/portfolio-institutional-2.png' },
];
