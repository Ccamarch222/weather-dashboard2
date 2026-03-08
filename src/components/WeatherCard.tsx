// src/components/WeatherCard.tsx
import Image from 'next/image';
import type { WeatherData } from '@/types';

interface WeatherCardProps {
  data: WeatherData;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-4 text-white shadow-xl sm:p-6">

      {/* ─── City & Country ─── */}
      <div className="flex items-start justify-between">
        <div className="flex-1 pr-2">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">{data.city}</h2>
          <p className="text-blue-200 text-sm mt-1">{data.country}</p>
        </div>

        {/* ─── Weather Icon ─── */}
        <Image
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.condition}
          width={64}
          height={64}
          className="drop-shadow-lg"
          priority                  
        />
      </div>

      {/* ─── Temperature ─── */}
      <div className="mt-4">
        <p className="text-5xl md:text-7xl font-thin tracking-tight">
          {data.temperature}°C
        </p>
        <p className="mt-1 capitalize text-blue-100 text-sm sm:text-base md:text-lg">
          {data.description}
        </p>
      </div>

      {/* ─── Stats ─── */}
      <div className="mt-6 grid grid-cols-3 gap-2 border-t border-blue-400 pt-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-blue-300">
            Humidity
          </p>
          <p className="mt-1 text-lg font-semibold sm:text-2xl">{data.humidity}%</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-blue-300">
            Wind Speed
          </p>
          <p className="mt-1 text-lg font-semibold sm:text-2xl">{data.windSpeed} km/h</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-blue-300">
            Condition
          </p>
          <p className="mt-1 text-lg font-semibold sm:text-2xl">{data.condition}</p>
        </div>
      </div>
    </div>
  );
}