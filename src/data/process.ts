import { ClipboardList, Compass, PenTool, Truck, PartyPopper, LineChart, type LucideIcon } from 'lucide-react';

export interface ProcessStep {
  id: string;
  translationKey: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  { id: 'briefing', translationKey: 'briefing', icon: ClipboardList },
  { id: 'planning', translationKey: 'planning', icon: Compass },
  { id: 'concept', translationKey: 'concept', icon: PenTool },
  { id: 'production', translationKey: 'production', icon: Truck },
  { id: 'execution', translationKey: 'execution', icon: PartyPopper },
  { id: 'evaluation', translationKey: 'evaluation', icon: LineChart },
];
