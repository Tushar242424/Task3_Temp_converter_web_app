function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("input-value").value);
    const inputUnit = document.getElementById("input-unit").value;
  
    let celsius, fahrenheit, kelvin;
  
    if (isNaN(inputValue)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    switch (inputUnit) {
      case "celsius":
        celsius = inputValue;
        fahrenheit = (inputValue * 9/5) + 32;
        kelvin = inputValue + 273.15;
        break;
      case "fahrenheit":
        celsius = (inputValue - 32) * 5/9;
        fahrenheit = inputValue;
        kelvin = (inputValue - 32) * 5/9 + 273.15;
        break;
      case "kelvin":
        celsius = inputValue - 273.15;
        fahrenheit = (inputValue - 273.15) * 9/5 + 32;
        kelvin = inputValue;
        break;
    }
  
    document.getElementById("celsius-output").textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById("fahrenheit-output").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById("kelvin-output").textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
  }
  