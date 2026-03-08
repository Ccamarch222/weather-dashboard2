type WeatherCodntion = 'Clear' | 'Rain' | 'Clouds' | 'Snow' | 'Thunderstorm';

export interface WeatherData {
    readonly city: string;
    readonly country: string;
    readonly temperature: number;
    readonly condition: WeatherCodntion;
    readonly description: string;
    readonly icon: string;
    readonly humidity: number;
    readonly windSpeed: number;



}

export interface WeatherAPIResponse {
    name: string;
    sys: {
        country: string;
    };
    main: {
        temp: number;
        humidity: number;
    };
    weather: Array<{
        main:string;
        description: string;
        icon: string;
    }>;
    wind: {
        speed: number;
    };


}

export type WeatherState = 
   | { status: 'idle'}
   | { status: 'loading'}
   | { status: 'success'; data: WeatherData }
   | { status: 'error'; message: string}