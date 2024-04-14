import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface FiltersProps {
  onFilterChange: (value: React.SetStateAction<string[]>) => void;
  FilterItems: string[];
}

export default function Filters({ onFilterChange, FilterItems }: FiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(FilterItems);

  const handleFilterClick = (filter: string) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  return (
    <main className="tw-flex tw-gap-3 tw-py-5">
      {FilterItems.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className="tw-flex tw-gap-1 tw-rounded-3xl tw-bg-cyan-600 
          tw-p-3 tw-font-semibold tw-text-white hover:tw-cursor-pointer hover:tw-shadow-lg"
        >
          <Check />
          {filter}
        </button>
      ))}
    </main>
  );
}
