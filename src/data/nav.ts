export interface NavItem {
  id: string;
  sectionId: string;
  translationKey: 'home' | 'about' | 'services' | 'portfolio' | 'process' | 'video' | 'contact';
}

export const navItems: NavItem[] = [
  { id: 'home', sectionId: 'inicio', translationKey: 'home' },
  { id: 'about', sectionId: 'sobre-nos', translationKey: 'about' },
  { id: 'services', sectionId: 'servicos', translationKey: 'services' },
  { id: 'portfolio', sectionId: 'portfolio', translationKey: 'portfolio' },
  { id: 'process', sectionId: 'como-trabalhamos', translationKey: 'process' },
  { id: 'video', sectionId: 'video', translationKey: 'video' },
  { id: 'contact', sectionId: 'contactos', translationKey: 'contact' },
];
