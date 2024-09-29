
import SnowIcon from "../icons/snow";
import RainIcon from "../icons/rain";
import FogIcon from "../icons/fog";
import WindIcon from "../icons/wind";
import CloudyIcon from "../icons/cloudy";
import PartlyCloudyDayIcon from "../icons/partly-cloudy-day";
import PartlyCloudyNightIcon from "../icons/partly-cloudy-night";
import ClearDayIcon from "../icons/clear-day";

import LoadingIcon from "../icons/loading";
// import ClearNightIcon from "../icons/partly-cloudy-night";

const weatherIcons = {
    'snow': (size) => <SnowIcon size={size}/>,
    'rain': (size) =>  <RainIcon size={size}/>,
    'fog': (size) => <FogIcon size={size}/>,
    'wind': (size) => <WindIcon size={size}/>,
    'cloudy': (size) => <CloudyIcon size={size}/>,
    'partly-cloudy-day': (size) => <PartlyCloudyDayIcon size={size}/>,
    'partly-cloudy-night': (size) => <PartlyCloudyNightIcon size={size}/>,
    'clear-day': (size) => <ClearDayIcon size={size}/>,
    // 'clear-night': (size) => <ClearNightIcon size={size}/>,
};

function getWeatherIcon(condition, size=128) {
    const IconComponent = weatherIcons[condition];
    return IconComponent ? IconComponent(size) : null;
}

function displayLoadingIcon() {
    return <LoadingIcon/>;
}

export {getWeatherIcon, displayLoadingIcon}