async function getWeather(city) {
    inputCity = document.getElementById('city-input').value;
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c979eb95358a4f53be8121736240405&q=${inputCity}`, {mode: 'cors'});
    const weatherData = await response.json();
    let weatherObject = {country: weatherData.location.country, city: weatherData.location.name, text: weatherData.current.condition.text,
        icon: weatherData.current.condition.icon, tempC: weatherData.current.temp_c, tempF: weatherData.current.temp_f}
    return weatherObject;
}

let weatherInCity;
const searchButton = document.getElementById("search-city");
searchButton.addEventListener("click", searchCity)
async function searchCity(event) {
    event.preventDefault();
    inputCity = document.getElementById('city-input').value;
    weatherInCity = await getWeather(inputCity);
    displayWeather(weatherInCity); //no effect?
    return weatherInCity;
}

const switchTempType = document.querySelector(".switch-c-f");
const temperature = document.querySelector(".temperature"); 
function displayWeather(cityWeather) {
    const city = document.querySelector(".city");
    const country = document.querySelector(".country");
    const icon = document.querySelector(".icon");
    const text = document.querySelector(".text");
    city.innerText = cityWeather.city;
    country.innerText = cityWeather.country;
    icon.src = `http:${cityWeather.icon}`;
    text.innerText = cityWeather.text;
    temperature.innerText = cityWeather.tempC + ' °C';
    switchTempType.innerText = 'Switch to Fahrenheit'
}

switchTempType.addEventListener('click', swapTemperatureType);
async function swapTemperatureType() {
    console.log(weatherInCity)
    if (switchTempType.innerText == 'Switch to Fahrenheit') {
        temperature.innerText = weatherInCity.tempF + ' °F';
        switchTempType.innerText = 'Switch to Celsius'
    }
    else if (switchTempType.innerText == 'Switch to Celsius') {
        temperature.innerText = weatherInCity.tempC + ' °C'
        switchTempType.innerText = 'Switch to Fahrenheit'
    }
    else {
        console.log('where did i mess up');
        return;
    }
}