import { motion } from "framer-motion";
import Searchbar from "./Search/Searchbar";
import useWeather from "../hooks/useWeather";

function WeatherContainer() {
  const { weatherData, loading, error, fetchWeather } = useWeather();

  return (
    <motion.div
      className="flex flex-col w-[400px] h-[500px] bg-gradient-to-b from-cyan-400 to-blue-500 rounded-xl "
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{scale: 1.01}}
    >
      <Searchbar onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && console.log({ weatherData })}
    </motion.div>
  );
}

export default WeatherContainer;
