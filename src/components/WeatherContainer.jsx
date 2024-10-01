import { motion } from "framer-motion";
import Searchbar from "./Search/Searchbar";
import WeatherData from "./Weather/WeatherData";
import useWeather from "../hooks/useWeather";
import getCoordinates from "../utils/userCoordinates";
import { useEffect, useState } from "react";

function WeatherContainer() {
  const {
    weatherData,
    loading,
    error,
    fetchWeather,
    fetchWeatherByCoordinates,
  } = useWeather();

  const [searched, setSearched] = useState(false);

  useEffect(() => {
    getCoordinates(fetchWeatherByCoordinates);
  }, []);

  return (
    <motion.div
      className="flex flex-col w-[400px] bg-gradient-to-b from-cyan-400 to-blue-500 rounded-xl shadow-2xl shadow-blue-700"
      initial={{ opacity: 0, scale: 0, height: "90px" }}
      animate={{ opacity: 1, scale: 1, height: searched ? "500px" : "90px" }}
      whileHover={{ scale: 1.01 }}
    >
      <Searchbar fetchWeather={fetchWeather} setSearched={setSearched} />
      {searched && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <WeatherData data={[weatherData, loading, error]} />
        </motion.div>
      )}
    </motion.div>
  );
}

export default WeatherContainer;
