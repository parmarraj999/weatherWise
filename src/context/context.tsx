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

interface CelciusUnit{
    celcius: string,
    setCelcius : (value : string) => void;
}

export const WeatherData = createContext<WeatherData>({
    data: [],
    currentData:[],
    forecastData:[],
    setData: () => {},
    setCurrentData: () => [],
    setForecastData: () => [],
});

export const CelciusUnit = createContext<CelciusUnit>({
    celcius : "Celcius",
    setCelcius: () => "",
})