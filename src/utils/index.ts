import type { SkipResponse, Skip } from "../types";

/**
 * Transforms a raw API SkipResponse object into a frontend-friendly Skip object
 */
export const skipFormatter = (response: SkipResponse[]): Skip[] => {
  const template = "./skip-template.jpg";

  return response.map((data: SkipResponse): Skip => {
    const totalPrice =
      data.price_before_vat + data.price_before_vat * (data.vat / 100);

    return {
      id: String(data.id),
      name: `${data.size} Yard Skip`,
      size: data.size,
      image: template,
      price: parseFloat(totalPrice.toFixed(2)),
      hirePeriod: data.hire_period_days,
      notAllowedOnRoad: !data.allowed_on_road,
      allowsHeavyWaste: data.allows_heavy_waste,
    };
  });
};
