import { ClipboardList, Compass, PenTool, Truck, PartyPopper, LineChart, type LucideIcon } from 'lucide-react';

export interface ProcessStep {
  id: string;
  translationKey: string;
  icon: LucideIcon;
  image: string;
}

export const processSteps: ProcessStep[] = [
  { id: 'briefing', translationKey: 'briefing', icon: ClipboardList, image: '/assets/images/process/process-briefing.webp' },
  { id: 'planning', translationKey: 'planning', icon: Compass, image: '/assets/images/process/process-planning.webp' },
  { id: 'concept', translationKey: 'concept', icon: PenTool, image: '/assets/images/process/process-concept.webp' },
  { id: 'production', translationKey: 'production', icon: Truck, image: '/assets/images/process/process-production.webp' },
  { id: 'execution', translationKey: 'execution', icon: PartyPopper, image: '/assets/images/process/process-execution.webp' },
  { id: 'evaluation', translationKey: 'evaluation', icon: LineChart, image: '/assets/images/process/process-evaluation.webp' },
];
