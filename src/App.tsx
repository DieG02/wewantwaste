import { useState } from "react";
import Header from "./components/Header";
import SelectionToast from "./components/Toast";
import SkipCards from "./components/SkipContainer";
import useSkips from "./hooks/useSkips";
import type { Skip } from "./types";

function App() {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  // const [currentPostcode, setCurrentPostcode] = useState<string>("NR32");
  // const [currentArea, setCurrentArea] = useState<string>("Lowestoft");
  const currentPostcode = "NR32";
  const currentArea = "Lowestoft";

  const { skips, loading, error } = useSkips(currentPostcode, currentArea);

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip(skip === selectedSkip ? null : skip);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center my-24">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Choose Your Skip Size
          </h1>
          <p className="text-gray-500 text-lg">
            Select the skip size that best suits your needs
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        ) : (
          <SkipCards
            skips={skips || []}
            selectedSkip={selectedSkip}
            onSelectSkip={handleSelectSkip}
          />
        )}
      </main>

      {selectedSkip && (
        <SelectionToast
          skip={selectedSkip}
          onClear={() => setSelectedSkip(null)}
        />
      )}
    </div>
  );
}

export default App;
