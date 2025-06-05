import { ArrowRight, Check } from "lucide-react";
import type { SkipCardProps } from "../../types";

const SkipCard = ({ skip, selected, onSelect }: SkipCardProps) => {
  const skipTitle = `${skip.size} Yard Skip`;
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);
  };

  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-2xl max-w-2xs shadow-md overflow-hidden transition-all duration-300 border-2 cursor-pointer transform hover:scale-[1.05] ${
        selected
          ? "border-indigo-600 scale-[1.02]"
          : "border-transparent hover:border-indigo-200"
      }`}
    >
      <div className="relative">
        <div className="absolute top-2 right-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          <p className="text-xs">{skip.size} yards</p>
        </div>
        <img
          src={skip.image}
          alt={skipTitle}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{skipTitle}</h3>

        <p className="text-gray-600 text-sm mb-4">
          {skip.hirePeriod} days hire period
        </p>

        <div className="flex gap-2 mb-4">
          {skip.allowsHeavyWaste && (
            <span className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs">
              Heavy Waste
            </span>
          )}
          {skip.notAllowedOnRoad && (
            <span className="bg-amber-50 text-amber-600 px-2 py-1 rounded-full text-xs">
              Not Allowed On Road
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-indigo-600">
            {formatPrice(skip.price)}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className={`flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-300 ${
              selected
                ? "bg-green-600 text-white"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            {selected ? (
              <>
                <span>Selected</span>
                <Check size={16} className="ml-2" />
              </>
            ) : (
              <>
                <span>Select skip</span>
                <ArrowRight size={16} className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
