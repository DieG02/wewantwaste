import { useState, useEffect } from "react";
import type { Skip, SkipResponse, UseSkips } from "../types";
import { skipFormatter } from "../utils";

/**
 * @param postcode The postcode to query
 * @param area The area/town to query
 * @returns An object containing skips data, loading state, and error message
 */
const useSkips = (postcode: string, area: string): UseSkips => {
  const [skips, setSkips] = useState<Skip[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const api = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    setLoading(true);
    setError(null);
    setSkips(null);

    const fetchSkips = async () => {
      if (!postcode || !area) {
        setError("Please provide a valid postcode and area");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${api}/skips/by-location?postcode=${postcode}&area=${area}`
        );

        if (!response.ok) {
          const errorDetail = await response.text();
          throw new Error(
            `Failed to fetch skips data: ${response.status} ${response.statusText} - ${errorDetail}`
          );
        }

        const rawData: SkipResponse[] = await response.json();
        const data = skipFormatter(rawData);
        setSkips(data);
      } catch (err: any) {
        console.error("Error fetching skips:", err);
        setError(
          err.message ||
            "An unknown error occurred while loading skip data. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [postcode, area]);

  return { skips, loading, error };
};

export default useSkips;
