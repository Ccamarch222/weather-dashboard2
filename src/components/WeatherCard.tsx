// src/components/WeatherCard.tsx
import Image from 'next/image';
import type { WeatherData } from '@/types';

interface WeatherCardProps {
  data: WeatherData;
}

export default function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="w-full max-w-lg rounded-2xl bg-gradient-to-br 
                    from-blue-500 to-indigo-600 p-6 text-white shadow-xl">

      {/* ─── City & Country ─── */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold">{data.city}</h2>
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
        <p className="text-7xl font-thin tracking-tight">
          {data.temperature}°C
        </p>
        <p className="mt-2 capitalize text-blue-100 text-lg">
          {data.description}
        </p>
      </div>

      {/* ─── Stats ─── */}
      <div className="mt-6 flex gap-8 border-t border-blue-400 pt-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-blue-300">
            Humidity
          </p>
          <p className="text-2xl font-semibold mt-1">{data.humidity}%</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-blue-300">
            Wind Speed
          </p>
          <p className="text-2xl font-semibold mt-1">{data.windSpeed} km/h</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-blue-300">
            Condition
          </p>
          <p className="text-2xl font-semibold mt-1">{data.condition}</p>
        </div>
      </div>
    </div>
  );
}