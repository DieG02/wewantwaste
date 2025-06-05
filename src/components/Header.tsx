import {
  MapPin,
  Trash2,
  Truck,
  ShieldCheck,
  Calendar,
  CreditCard,
} from "lucide-react";

const items = [
  { label: "Postcode", icon: MapPin, active: true },
  { label: "Waste Type", icon: Trash2, active: true },
  { label: "Select Skip", icon: Truck, active: true },
  { label: "Permit Check", icon: ShieldCheck, active: false },
  { label: "Choose Date", icon: Calendar, active: false },
  { label: "Payment", icon: CreditCard, active: false },
];

const Header = () => {
  return (
    <nav className="flex items-center justify-center gap-0 sm:gap-2 py-4 sm:py-6 bg-white border-b border-gray-200 overflow-x-auto px-2">
      {items.map((step, i: number) => {
        const Icon = step.icon;
        const isActive = step.active;

        return (
          <div key={step.label} className="flex items-center flex-shrink-0">
            <div
              className={`flex items-center justify-center rounded-full transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-400 border border-gray-200"
                }
                w-9 h-9 sm:w-11 sm:h-11 shadow
              `}
            >
              <Icon size={20} className="sm:w-5 sm:h-5" />
            </div>
            <span
              className={`ml-2 mr-4 text-xs sm:text-sm font-semibold ${
                isActive ? "text-indigo-500" : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
            {i < items.length - 1 && (
              <span
                className={`w-6 sm:w-10 h-0.5 ${
                  isActive ? "bg-indigo-500" : "bg-gray-200"
                } rounded-full mx-1 sm:mx-2`}
              ></span>
            )}
          </div>
        );
      })}
    </nav>
  );
};
export default Header;
