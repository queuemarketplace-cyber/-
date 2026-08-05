export interface AgentTier {
  id: string;
  name: string;
  agentShare: number; // percentage
  qhubShare: number; // percentage
  badgeColor: string;
  gradient: string;
  description: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
