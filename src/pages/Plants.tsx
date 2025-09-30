import { useState } from "react";
import Card from "../components/Card";
import Filters from "../components/Filters";
import SearchField from "../components/SearchField";
import { plants } from "../data/plants";
import type { Category } from "../types/types";

const Home = () => {
  const [plantSearch, setPlantSearch] = useState<string>("");
  const [plantFilter, setPlantFilter] = useState<Category | "all">("all");

  const filteredPlants = plants.filter((plant) => {
    const matchesFilter =
      plantFilter === "all" || plant.category === plantFilter;

    const matchesSearch = plant.name
      .toLowerCase()
      .includes(plantSearch.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4">
      <h2 className="text-lg font-semibold">Planter 🌱</h2>
      <Filters onChange={(v) => setPlantFilter(v)} />
      <SearchField onChange={(v) => setPlantSearch(v)} value={plantSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {filteredPlants.map((plant) => (
          <Card key={plant.id} plant={plant} />
        ))}
        {filteredPlants.length === 0 && (
          <p className="col-span-full text-gray-500">
            Ingen planter matcher søket eller filteret 🌿
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
