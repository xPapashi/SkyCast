

const getCoordinates = (callback) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      callback(latitude, longitude);
    },
    (error) => {
      console.error("Error getting geolocation: ", error);
    }
  );
}

export default getCoordinates