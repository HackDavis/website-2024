import { Check } from 'lucide-react';

const Filters: string[] = ['Activity', 'Workshop', 'Menu'];

export default function Schedule() {
  return (
    <main className="tw-flex tw-gap-3 tw-py-5">
      {Filters.map((filter) => (
        <button
          key={filter}
          className="tw-flex tw-gap-1 tw-rounded-3xl tw-bg-cyan-600 tw-p-3 tw-font-semibold tw-text-white"
        >
          <Check />
          {filter}
        </button>
      ))}
    </main>
  );
}
