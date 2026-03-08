# 🌤️ Weather Dashboard

A responsive single-page weather application built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Live Demo
[View Live App](your-vercel-link-here)

## ⚙️ Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- OpenWeatherMap API

## 🛠️ Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/weather-dashboard
cd weather-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup API Key
Get your free API key from [openweathermap.org](https://openweathermap.org/api)

Create `.env.local` file in root:
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

### 4. Run the app
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✨ Features
- Search any city for current weather
- Debounced search input
- Recent searches (last 3 cities)
- Loading skeleton screen
- Error handling