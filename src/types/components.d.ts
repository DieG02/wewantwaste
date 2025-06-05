import type { Skip } from "./api";
export interface SkipCardProps {
  skip: Skip;
  selected: boolean;
  onSelect: () => void;
}

export interface SkipCardsProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  onSelectSkip: (skip: Skip) => void;
}

export interface StepProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  completed?: boolean;
  first?: boolean;
  last?: boolean;
}
