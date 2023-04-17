/**
 * @param {number} celsius
 * @return {number[]}
 */

const convertToKelvin = (celsius) => {
  const kelvin = celsius + 273.15

  return kelvin
}

const convertToFahrenheit = (celsius) => {
  const fahrenheit = celsius * 1.80 + 32.00

  return fahrenheit
}

var convertTemperature = function(celsius) {
 return [convertToKelvin(celsius), convertToFahrenheit(celsius)]
};