import type { SkipResponse, Skip } from "../types";

/**
 * Transforms a raw API SkipResponse object into a frontend-friendly Skip object
 */
export const skipFormatter = (response: SkipResponse[]): Skip[] => {
  const template =
    "https://images.pexels.com/photos/2362357/pexels-photo-2362357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return response.map((data: SkipResponse) => {
    const totalPrice =
      data.price_before_vat + data.price_before_vat * (data.vat / 100);

    return {
      id: String(data.id),
      name: `${data.size} Yard Skip`,
      size: data.size,
      image: template,
      price: parseFloat(totalPrice.toFixed(2)),
      hirePeriod: data.hire_period_days,
      onRoad: data.allowed_on_road,
      heavyWaste: data.allows_heavy_waste,
    };
  });
};
