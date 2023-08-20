function convertToCelsius(F) {
  C = (F-32) * 5/9;
  rounded = Math.round(C * 10) / 10
  return rounded;
}

function convertToFahrenheit(C) {
  F = C * (9/5) + 32
  var rounded = Math.round(F * 10) / 10
  return rounded;
}

