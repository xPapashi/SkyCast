import { motion } from "framer-motion";
import Searchbar from "./Search/Searchbar";
import WeatherData from "./Weather/WeatherData";
import useWeather from "../hooks/useWeather";
import getCoordinates from "../utils/userCoordinates";
import { useEffect } from "react";

function WeatherContainer() {
  const { weatherData, loading, error, fetchWeather, fetchWeatherByCoordinates } = useWeather();

  useEffect(() => {
    getCoordinates(fetchWeatherByCoordinates)
  }, []);

  return (
    <motion.div
      className="flex flex-col w-[400px] h-[500px] bg-gradient-to-b from-cyan-400 to-blue-500 rounded-xl "
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.01 }}
    >
      <Searchbar onSearch={fetchWeather} />
      <WeatherData data={[weatherData, loading, error]} />
    </motion.div>
  );
}

export default WeatherContainer;
