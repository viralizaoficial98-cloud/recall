import {
  Target,
  UserCog,
  Wand2,
  ClipboardCheck,
  Lightbulb,
  Clock,
  Network,
  LifeBuoy,
  type LucideIcon,
} from 'lucide-react';

export interface WhyItem {
  id: string;
  translationKey: string;
  icon: LucideIcon;
}

export const whyChooseUs: WhyItem[] = [
  { id: 'planning', translationKey: 'planning', icon: Target },
  { id: 'team', translationKey: 'team', icon: UserCog },
  { id: 'custom', translationKey: 'custom', icon: Wand2 },
  { id: 'management', translationKey: 'management', icon: ClipboardCheck },
  { id: 'creativity', translationKey: 'creativity', icon: Lightbulb },
  { id: 'deadlines', translationKey: 'deadlines', icon: Clock },
  { id: 'network', translationKey: 'network', icon: Network },
  { id: 'support', translationKey: 'support', icon: LifeBuoy },
];
