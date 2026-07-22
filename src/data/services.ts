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
}

/**
 * Structural service data. Titles/descriptions live in the translation
 * files under services.items.<translationKey> so both languages stay in sync.
 */
export const services: ServiceItem[] = [
  { id: 'conferences', translationKey: 'conferences', icon: Presentation },
  { id: 'congresses', translationKey: 'congresses', icon: Users },
  { id: 'galas', translationKey: 'galas', icon: GlassWater },
  { id: 'launches', translationKey: 'launches', icon: Rocket },
  { id: 'workshops', translationKey: 'workshops', icon: GraduationCap },
  { id: 'teambuilding', translationKey: 'teambuilding', icon: HeartHandshake },
  { id: 'institutional', translationKey: 'institutional', icon: Landmark },
  { id: 'fairs', translationKey: 'fairs', icon: Store },
  { id: 'audiovisual', translationKey: 'audiovisual', icon: Video },
  { id: 'logistics', translationKey: 'logistics', icon: Settings },
  { id: 'scenography', translationKey: 'scenography', icon: Palette },
  { id: 'accreditation', translationKey: 'accreditation', icon: BadgeCheck },
];
