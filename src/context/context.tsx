import { createContext } from "react";

interface WeatherData{
    data: string[],
    setData : (value : string[]) => void;
}

export const WeatherData = createContext<WeatherData>({
    data: [],
    setData: () => {}
});