'use client';
import { useWeather } from '@/hooks/useWeather';
import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import RecentSearches from '@/components/RecentSearches';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import ErrorMessage from '@/components/ErrorMessage';

export default function Home() {
  const { weatherState, recentCities, search, reset } = useWeather();

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 px-4 py-8 md:py-16">
        
        {/* ─── Header ─── */}
        <div className="text-center w-full px-2">
          <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl md:text-4xl">
            🌤️ Weather Dashboard
          </h1>
          <p className="mt-2 text-slate-500 text-sm">
            Search any city to get current weather
          </p>
        </div>

        {/* ─── Search Bar ─── */}
        <SearchBar
          onSearch={search}
          isLoading={weatherState.status === 'loading'}
        />

        {/* ─── Recent Searches ─── */}
        <RecentSearches
          cities={recentCities}
          onSelect={search}
        />

        {/* ─── States ─── */}
        {weatherState.status === 'loading' && <LoadingSkeleton />}

        {weatherState.status === 'error' && (
          <ErrorMessage
            message={weatherState.message}
            onRetry={reset}
          />
        )}

        {weatherState.status === 'success' && (
          <WeatherCard data={weatherState.data} />
        )}

        {/* ─── Idle State ─── */}
        {weatherState.status === 'idle' && (
          <div className="mt-8 text-center text-slate-400">
            <p className="text-5xl">🔍</p>
            <p className="mt-3 text-sm">Enter a city name to see weather</p>
          </div>
        )}

      </div>
    </main>
  );
}
