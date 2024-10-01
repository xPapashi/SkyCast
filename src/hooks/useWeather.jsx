import { useState } from "react";
import { toast } from "react-toastify";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_WEATHER_BASEURL}${city}/?unitGroup=metric&key=${
          import.meta.env.VITE_REACT_WEATHER_API_KEY
        }`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      toast.error("Error fetching weather data", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoordinates = async (latitude, longitude) => {
    const location = `${latitude},${longitude}`;
    await fetchWeather(location);
  };

  return {
    weatherData,
    loading,
    error,
    fetchWeather,
    fetchWeatherByCoordinates,
  };
};

export default useWeather;
