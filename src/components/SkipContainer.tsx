import SkipCard from "./common/SkipCard";
import type { Skip, SkipCardsProps } from "../types";

const SkipCards = ({ skips, selectedSkip, onSelectSkip }: SkipCardsProps) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center mb-32 sm:mb-24">
      {skips.map((skip: Skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          selected={selectedSkip?.id === skip.id}
          onSelect={() => onSelectSkip(skip)}
        />
      ))}
    </div>
  );
};

export default SkipCards;
