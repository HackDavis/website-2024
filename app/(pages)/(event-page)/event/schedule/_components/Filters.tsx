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
    <main className="tw-flex tw-w-full tw-flex-wrap tw-gap-3 tw-py-5">
      {FilterItems.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className="tw-bg-teal-hack tw-flex tw-gap-1 
          tw-rounded-3xl tw-p-3 tw-px-5 tw-pr-6 tw-font-semibold tw-text-white hover:tw-cursor-pointer hover:tw-shadow-lg"
          style={{
            backgroundColor: '#005271',
            opacity: selectedFilters.includes(filter) ? 1 : 0.5,
          }}
        >
          <Check />
          {filter}
        </button>
      ))}
    </main>
  );
}
