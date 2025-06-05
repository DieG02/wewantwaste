import { ArrowRight, Truck } from "lucide-react";
import type { Skip } from "../types";

interface SelectionToastProps {
  skip: Skip;
  onClear: () => void;
}

const SelectionToast = ({ skip, onClear }: SelectionToastProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 transition-transform duration-300 animate-slide-up z-20">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <Truck size={24} className="text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{skip.name}</h4>
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-indigo-600 font-bold">
                    {formatPrice(skip.price)}
                  </span>
                  <span className="text-sm text-indigo-600">inc.VAT</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Available for {skip.hirePeriod} days hire
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={onClear}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back
            </button>

            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
              Continue
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionToast;
