import type { WeatherData, WeatherAPIResponse } from '@/types';

const BASE_URL = 'https://api.openweathermap.org/data/2.5' as const;

// ─── Raw API → Clean App Type ──────────────────────────────────
function transformWeatherData(raw: WeatherAPIResponse): WeatherData {
  const weatherInfo = raw.weather[0];

  if (!weatherInfo) {
    throw new Error('Invalid API response: weather data missing');
  }

  return {
    city: raw.name,
    country: raw.sys.country,
    temperature: Math.round(raw.main.temp),
    condition: weatherInfo.main as WeatherData['condition'],
    description: weatherInfo.description,
    icon: weatherInfo.icon,
    humidity: raw.main.humidity,
    windSpeed: Math.round(raw.wind.speed * 3.6), // m/s → km/h
  };
}

// ─── Main Fetch Function ───────────────────────────────────────
export async function fetchWeather(city: string): Promise<WeatherData> {
  //  Runtime validate — Vercel build crash nahi karega
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  if (!API_KEY) {
    throw new Error('NEXT_PUBLIC_OPENWEATHER_API_KEY is not defined in .env.local');
  }

  if (!city.trim()) {
    throw new Error('City name cannot be empty');
  }

  const url = `${BASE_URL}/weather?q=${encodeURIComponent(city.trim())}&appid=${API_KEY}&units=metric`;

  //  Network error handle
  let res: Response;
  try {
    res = await fetch(url);
  } catch {
    throw new Error('Network error. Please check your internet connection.');
  }

  //  HTTP errors handle
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error(`City "${city}" not found. Please check the spelling.`);
    }
    if (res.status === 401) {
      throw new Error('Invalid API key. Check your .env.local file.');
    }
    throw new Error(`Something went wrong. Status: ${res.status}`);
  }

  const data: WeatherAPIResponse = await res.json();
  return transformWeatherData(data);
}