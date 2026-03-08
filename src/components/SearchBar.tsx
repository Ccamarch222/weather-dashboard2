'use client';

import { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [input, setInput] = useState('');

  const onSearchRef = useRef(onSearch);
  useEffect(() => {
    onSearchRef.current = onSearch;
  }, [onSearch]);

  useEffect(() => {
    const trimmed = input.trim();
    if (trimmed.length < 2) return;

    const timer = setTimeout(() => {
      onSearchRef.current(trimmed);
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed) onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg gap-2" role="search">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search city... e.g. Lahore, London"
        disabled={isLoading}
        aria-label="City search input"
        autoComplete="off"
        className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:opacity-50 transition-all"
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        aria-label="Search weather"
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}