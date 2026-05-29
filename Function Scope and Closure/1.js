let maxAltitudeMeters = 10000;

const changeAltitude = (altitudeMeters) => {
  let minAltitudeMeters = 0;
  if (
    altitudeMeters < maxAltitudeMeters &&
    altitudeMeters > minAltitudeMeters
  ) {
    console.log(`Changing altitude to ${altitudeMeters}`);
    return;
  }
  console.log("Can not change altitude. out of bounds.");
};

changeAltitude(5000); //invoking function
