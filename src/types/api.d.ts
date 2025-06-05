export interface Skip {
  id: string;
  name: string;
  size: number;
  image: string;
  price: number;
  hirePeriod: number;
  notAllowedOnRoad?: boolean;
  allowsHeavyWaste: boolean;
}

export interface SkipResponse {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
