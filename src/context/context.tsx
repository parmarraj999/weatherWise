import { create } from "domain";
import { createContext } from "react";

interface WeatherData{
    data: any,
    currentData : any,
    forecastData: any,
    setData : (value : any) => void;
    setCurrentData : (value : any) => void;
    setForecastData : (value : any) => void;
}

export const WeatherData = createContext<WeatherData>({
    data: [],
    currentData:[],
    forecastData:[],
    setData: () => {},
    setCurrentData: () => [],
    setForecastData: () => [],
});
