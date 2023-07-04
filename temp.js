function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput");
    var temperature = parseFloat(temperatureInput.value);
    var conversionType = document.getElementById("conversionType").value;
    var resultElement = document.getElementById("conversionResult");

    var result;

    if (isNaN(temperature)) {
      result = "Please enter a valid temperature.";
    } else {
      var celsius, fahrenheit;

      if (conversionType === "toFahrenheit") {
        celsius = temperature;
        fahrenheit = (celsius * 9/5) + 32;
        result = celsius + " Celsius is equal to " + fahrenheit + " Fahrenheit.";
       //javascript is a dynamically typed language(that means it itself detect the datatype of the given variable we not have to mention it) 
      } else if (conversionType === "toCelsius") {
        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5/9;
        result = fahrenheit + " Fahrenheit is equal to " + celsius + " Celsius.";
      } 
    }

    resultElement.innerHTML = result;
  }