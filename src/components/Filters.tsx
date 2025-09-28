import { useState } from "react";
import type { Category } from "../types/types";

const Filters = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    "all"
  );

  const isSelected = (category: Category | "all") =>
    selectedCategory === category;

  const handleClick = (category: string) => {
    console.log("Category filter clicked:", category);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        className={`border cursor-pointer p-2 rounded-md ${
          isSelected("all")
            ? "bg-primary border-primary text-white"
            : "bg-transparent border-gray-300 text-text"
        }`}
        onClick={() => handleClick("all")}
      >
        Alle
      </button>
      <button
        className={`border cursor-pointer p-2 rounded-md ${
          isSelected("indoor")
            ? "bg-primary border-primary text-white"
            : "bg-transparent border-gray-300 text-text"
        }`}
        onClick={() => handleClick("indoor")}
      >
        Indoor
      </button>
      <button
        className={`border cursor-pointer p-2 rounded-md ${
          isSelected("outdoor")
            ? "bg-primary border-primary text-white"
            : "bg-transparent border-gray-300 text-text"
        }`}
        onClick={() => handleClick("outdoor")}
      >
        Outdoor
      </button>
      <button
        className={`border cursor-pointer p-2 rounded-md ${
          isSelected("spice")
            ? "bg-primary border-primary text-white"
            : "bg-transparent border-gray-300 text-text"
        }`}
        onClick={() => handleClick("spice")}
      >
        Spice
      </button>
    </div>
  );
};

export default Filters;
