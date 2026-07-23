export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { id: 'pn1', name: 'Sociedade Mineira de Catoca, Lda.', logo: '/assets/images/partners/partner-catoca.webp' },
  { id: 'pn2', name: 'ENDIAMA — Empresa Nacional de Diamantes de Angola, E.P.', logo: '/assets/images/partners/partner-endiama.webp' },
  { id: 'pn3', name: 'Ministério das Relações Exteriores de Angola', logo: '/assets/images/partners/partner-mirex.webp' },
  { id: 'pn4', name: 'FILDA — Feira Internacional de Luanda', logo: '/assets/images/partners/partner-filda.webp' },
  { id: 'pn5', name: 'ANGOTIC — Angola ICT Forum', logo: '/assets/images/partners/partner-angotic.webp' },
];
