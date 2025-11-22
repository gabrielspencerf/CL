import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'Strategy' | 'Tech' | 'Growth';
}

export interface NavItem {
  label: string;
  id: string;
}

export enum AnalysisStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}

export interface StrategicPlanResponse {
  executionPlan: string;
  techStack: string[];
  kpiFocus: string;
}