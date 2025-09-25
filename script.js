document.getElementById('convertBtn').addEventListener('click', convertirTemperatura); // Agrega un evento al botón

function convertirTemperatura() {
    const celsius = parseFloat(document.getElementById('celsius').value); // Obtiene el valor en Celsius
    if (isNaN(celsius)) { // Verifica si la entrada es un número válido
        document.getElementById('result').innerText = 'Por favor, ingresa un número válido.'; // Maneja entradas no numéricas
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32; // Convierte a Fahrenheit
    const kelvin = celsius + 273.15; // Convierte a Kelvin

    document.getElementById('result').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}, Kelvin: ${kelvin.toFixed(2)}`; // Muestra el resultado con dos decimales
}