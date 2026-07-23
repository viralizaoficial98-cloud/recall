import {
  Presentation,
  Users,
  GlassWater,
  Rocket,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Store,
  Video,
  Settings,
  Palette,
  BadgeCheck,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  translationKey: string;
  icon: LucideIcon;
  /** Optional real photograph shown as the card's main visual (icon becomes a small accent badge). */
  image?: string;
}

/**
 * Structural service data. Titles/descriptions live in the translation
 * files under services.items.<translationKey> so both languages stay in sync.
 */
export const services: ServiceItem[] = [
  { id: 'conferences', translationKey: 'conferences', icon: Presentation, image: '/assets/images/services/service-conferencias.webp' },
  { id: 'congresses', translationKey: 'congresses', icon: Users, image: '/assets/images/services/service-congressos.webp' },
  { id: 'galas', translationKey: 'galas', icon: GlassWater, image: '/assets/images/services/service-galas.webp' },
  { id: 'launches', translationKey: 'launches', icon: Rocket, image: '/assets/images/services/service-lancamentos.webp' },
  { id: 'workshops', translationKey: 'workshops', icon: GraduationCap, image: '/assets/images/services/service-workshops.webp' },
  { id: 'teambuilding', translationKey: 'teambuilding', icon: HeartHandshake, image: '/assets/images/services/service-teambuilding.webp' },
  { id: 'institutional', translationKey: 'institutional', icon: Landmark, image: '/assets/images/services/service-institucional.webp' },
  { id: 'fairs', translationKey: 'fairs', icon: Store, image: '/assets/images/services/service-feiras.webp' },
  { id: 'audiovisual', translationKey: 'audiovisual', icon: Video, image: '/assets/images/services/service-audiovisual.webp' },
  { id: 'logistics', translationKey: 'logistics', icon: Settings, image: '/assets/images/services/service-logistica.webp' },
  { id: 'scenography', translationKey: 'scenography', icon: Palette },
  { id: 'accreditation', translationKey: 'accreditation', icon: BadgeCheck, image: '/assets/images/services/service-credenciamento.webp' },
];
