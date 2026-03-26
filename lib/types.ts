export interface NavLink {
  name: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  trend: string;
}

export interface RecentScan {
  file: string;
  type: string;
  result: string;
  confidence: string;
  date: string;
}

export interface UseCase {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface ThreatPoint {
  t: string;
  l: string;
  c: string;
  score: number;
}

export interface AnalysisResult {
  score: number;
  status: string;
  feedback: string;
  key_info?: string;
}
