import { useState } from "react";
import { motion } from "framer-motion";

const Searchbar = ({ fetchWeather, setSearched }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeather(query);
      setSearched(true);
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center gap-4 mt-5"
        >
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Enter City Name"
            className="w-64 h-11 rounded-[20px] bg-white text-gray-400 pl-[15px] outline-none"
          />
          <motion.button 
          type="submit" 
          className="flex items-center justify-center bg-white w-11 h-11 rounded-[50%]"  
          whileHover={{rotate: 45}}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </motion.button>
        </form>
      </div>
    </>
  );
};

export default Searchbar;