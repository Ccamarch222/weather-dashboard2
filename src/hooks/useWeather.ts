'use client';

import { useState, useCallback, useEffect } from 'react';
import { fetchWeather } from '@/lib/weatherApi';
import type { WeatherState } from '@/types';

const MAX_RECENT = 3;
const STORAGE_KEY = 'weather_recent_cities';

function getRecentCities(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    return [];
  }
}

function saveRecentCity(city: string): string[] {
  const current = getRecentCities();
  const filtered = current.filter(
    (c) => c.toLowerCase() !== city.toLowerCase()
  );
  const updated = [city, ...filtered].slice(0, MAX_RECENT);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function useWeather() {
  const [weatherState, setWeatherState] = useState<WeatherState>({
    status: 'idle',
  });

  const [recentCities, setRecentCities] = useState<string[]>([]);

  //  SSR safe — client pe load
  useEffect(() => {
    setRecentCities(getRecentCities());
  }, []);

  const search = useCallback(async (city: string) => {
    const trimmed = city.trim();
    if (!trimmed) return;

    //  Duplicate request prevent
    if (weatherState.status === 'loading') return;

    setWeatherState({ status: 'loading' });

    try {
      const data = await fetchWeather(trimmed);
      setWeatherState({ status: 'success', data });
      const updated = saveRecentCity(data.city);
      setRecentCities(updated);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong.';
      setWeatherState({ status: 'error', message });
    }
  }, [weatherState.status]);

  const reset = useCallback(() => {
    setWeatherState({ status: 'idle' });
  }, []);

  return { weatherState, recentCities, search, reset };
}


