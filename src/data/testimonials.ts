export interface Testimonial {
  id: string;
  name: string;
  role: { pt: string; en: string };
  company: string;
  text: { pt: string; en: string };
  avatar: string;
  rating: number;
}

/** Demonstrative testimonials — replace with real client feedback when available. */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ana Mendes',
    role: { pt: 'Diretora de Marketing', en: 'Marketing Director' },
    company: 'Nexus Group',
    text: {
      pt: 'A RE-CALL superou todas as expectativas na organização da nossa conferência anual. Profissionalismo do início ao fim.',
      en: 'RE-CALL exceeded every expectation organizing our annual conference. Professional from start to finish.',
    },
    avatar: '/assets/images/avatars/avatar-1.png',
    rating: 5,
  },
  {
    id: 't2',
    name: 'João Costa',
    role: { pt: 'CEO', en: 'CEO' },
    company: 'Atlas Holdings',
    text: {
      pt: 'Equipa extremamente atenta a cada detalhe. O lançamento do nosso produto foi um sucesso absoluto.',
      en: 'An extremely detail-oriented team. Our product launch was an absolute success.',
    },
    avatar: '/assets/images/avatars/avatar-2.png',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Marta Silva',
    role: { pt: 'Diretora de Recursos Humanos', en: 'HR Director' },
    company: 'Orbit Corp',
    text: {
      pt: 'O team building organizado pela RE-CALL fortaleceu verdadeiramente a nossa cultura de equipa.',
      en: 'The team building event organized by RE-CALL truly strengthened our team culture.',
    },
    avatar: '/assets/images/avatars/avatar-3.png',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Ricardo Pinto',
    role: { pt: 'Diretor Executivo', en: 'Executive Director' },
    company: 'Vertex Lda',
    text: {
      pt: 'Rigor, criatividade e cumprimento total dos prazos. Recomendamos sem qualquer hesitação.',
      en: 'Rigor, creativity and full compliance with deadlines. We recommend them without hesitation.',
    },
    avatar: '/assets/images/avatars/avatar-4.png',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Luísa Fernandes',
    role: { pt: 'Gestora de Eventos', en: 'Events Manager' },
    company: 'Prime Partners',
    text: {
      pt: 'Trabalhar com a RE-CALL trouxe tranquilidade e confiança à gestão de um evento institucional complexo.',
      en: 'Working with RE-CALL brought peace of mind and confidence to managing a complex institutional event.',
    },
    avatar: '/assets/images/avatars/avatar-5.png',
    rating: 5,
  },
];
