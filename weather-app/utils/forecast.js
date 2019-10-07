const request = require("request");

const forecast = (lat, long, callback) => {
  const KEY = "3414f8d4fe69622dc0e918fdbfe18ec6";
  const url = `https://api.darksky.net/forecast/${KEY}/${lat},${long}?units=si`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable find that location", undefined);
    } else {
      let resBody = body.currently;
      let forecast = `${body.daily.data[0].summary} It is currently ${resBody.temperature} degrees out. there is a ${resBody.precipProbability}% chance of rain.`;

      callback(undefined, forecast);
    }
  });
};

module.exports = forecast;
