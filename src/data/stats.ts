import { CalendarCheck, Users2, Handshake, Award, type LucideIcon } from 'lucide-react';

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  translationKey: 'events' | 'clients' | 'partners' | 'years';
  icon: LucideIcon;
}

/** Demonstrative figures — edit freely, all sourced from this single file. */
export const stats: StatItem[] = [
  { id: 'events', value: 250, suffix: '+', translationKey: 'events', icon: CalendarCheck },
  { id: 'clients', value: 120, suffix: '+', translationKey: 'clients', icon: Users2 },
  { id: 'partners', value: 40, suffix: '+', translationKey: 'partners', icon: Handshake },
  { id: 'years', value: 12, suffix: '', translationKey: 'years', icon: Award },
];
