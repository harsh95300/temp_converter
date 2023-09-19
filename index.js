function celsiusToFah() {
    const celsius = parseFloat(document.getElementById("celsius1").value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result1").textContent = fahrenheit.toFixed(2) + " °F";
    } else {
        alert("Please enter a valid number for Celsius temperature.");
    }
}
function fahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit1").value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * (5/9);
        document.getElementById("result2").textContent = celsius.toFixed(2) + " °C";
    } else {
        alert("Please enter a valid number for Fahrenheit temperature.");
    }
}

function kelvinToCelsius() {
    const kelvin = parseFloat(document.getElementById("celsius3").value);
    if (!isNaN(kelvin)) {
        const celsius = kelvin - 273.15;
        document.getElementById("result3").textContent = celsius.toFixed(2) + " °c";
    } else {
        alert("Please enter a valid number for kelvin temperature.");
    }
}


