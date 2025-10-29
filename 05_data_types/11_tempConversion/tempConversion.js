// °C = (°F − 32) * 5/9

const convertToCelsius = function (num) {
  return Number(((num - 32) * 5 / 9).toPrecision(3));
};

// °F = (°C * 9/5) + 32

const convertToFahrenheit = function (num) {
  return Number(((num * 9 / 5) + 32).toPrecision(4));
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
