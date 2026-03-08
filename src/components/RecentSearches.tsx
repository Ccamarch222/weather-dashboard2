'use client'

interface RecentSearchesProps {
  cities: string[];
  onSelect: (city: string) => void;
}

export default function RecentSearches({
  cities,
  onSelect,
}: RecentSearchesProps) {
  if (cities.length === 0) return null;

  return (
    <div className="flex w-full max-w-lg flex-wrap items-center gap-2">
      <span className="text-sm text-gray-500">Recent:</span>
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => onSelect(city)}
          type="button"
          aria-label={`Search ${city} again`}
          className="rounded-full border border-gray-200 bg-gray-100 px-4 py-1 
                     text-sm text-gray-700 transition-all hover:border-blue-300 
                     hover:bg-blue-50 hover:text-blue-700"
        >
          {city}
        </button>
      ))}
    </div>
  );
}

