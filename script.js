async function getWeather(city) {
    inputCity = document.getElementById('city-input').value;
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c979eb95358a4f53be8121736240405&q=${inputCity}`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log({country: weatherData.location.country, city: weatherData.location.name, text: weatherData.current.condition.text,
        icon: weatherData.current.condition.icon, tempC: weatherData.current.temp_c, tempF: weatherData.current.temp_f})
    return {country: weatherData.location.country, city: weatherData.location.name, text: weatherData.current.condition.text,
        icon: weatherData.current.condition.icon, tempC: weatherData.current.temp_c, tempF: weatherData.current.temp_f}
}

// console.log(getWeather("London"))

const searchButton = document.getElementById("search-city");
searchButton.addEventListener("click", searchCity)
function searchCity(event) {
    event.preventDefault();
    inputCity = document.getElementById('city-input').value;
    getWeather(inputCity);
    return inputCity;
}