import React, { useState } from "react";
import { format } from "date-fns";
import { getWeatherIcon, displayLoadingIcon } from "./IconSelector";
import { roundNum } from "../../utils/RoundNum";
import {getTodaysDate, formatDateToDayAndMonth} from "../../utils/FormatDate";

const WeatherDay = ({ day, index }) => (
  <div className="flex flex-col items-center" key={{ index }}>
    <div className="font-bold text-sm">
      <span>{roundNum(day.tempmin)}°C </span> - <span>{roundNum(day.tempmax)}°C</span>
    </div>
    <span className="w-[32px] h-[24px]">{getWeatherIcon(day.icon, 32)}</span>
    <span className="font-light text-sm">
      {formatDateToDayAndMonth(day.datetime)}
    </span>
  </div>
);

function WeatherData({ data }) {
  const [weatherData, loading, error] = data;

  if (loading) {
    return <div>{displayLoadingIcon()}</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!weatherData) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-col mt-[18px] font-roboto">
      <h1 className="text-[36px] font-semibold">
        {weatherData.address}
      </h1>
      <span className="">{getWeatherIcon(weatherData.currentConditions.icon)}</span>
      <span className="text-[64px] font-bold">
        {roundNum(weatherData.currentConditions.temp)}°C
      </span>
      <span className="text-[20px] mb-6">{getTodaysDate()}</span>
      <div className="flex items-center justify-center gap-4 relative before:border-t-2 before:w-[80%] before:top-[-10px] before:absolute">
        {weatherData.days.slice(1, 5).map((day, index) => (
          <WeatherDay key={index} day={day} />
        ))}
      </div>
    </div>
  );
}

export default WeatherData;
