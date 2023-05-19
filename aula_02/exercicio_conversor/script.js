const convertTemperature = () => {
    const temperatureType = document.getElementById("temperature").value;
    const temperatureValue = parseFloat(document.getElementById("value").value);

    let result;
    let message;

    if (temperatureType === "celsius") {
      const fahrenheit = (temperatureValue * 9 / 5) + 32;
      result = fahrenheit;
      if (temperatureValue < 22) {
        message = "Tá bem fresquim!";
      } else if (temperatureValue >= 22 && temperatureValue <= 28) {
        message = "Tá um sereno só o mi!";
      } else if (temperatureValue > 30 && temperatureValue <= 33) {
        message = "Tá queimando o quengo!";
      } else if (temperatureValue > 33) {
        message = "Tá pegando fogo!";
      }
    } else if (temperatureType === "fahrenheit") {
      const celsius = (temperatureValue - 32) * 5 / 9;
      result = celsius;
      if (celsius < 22) {
        message = "Tá bem fresquim!";
      } else if (celsius >= 22 && celsius <= 28) {
        message = "Tá um sereno só o mi!";
      } else if (celsius > 30 && celsius <= 33) {
        message = "Tá queimando o quengo!";
      } else if (celsius > 33) {
        message = "Tá pegando fogo!";
      }
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Resultado: ${result.toFixed(2)}<br>${message}`;
  };