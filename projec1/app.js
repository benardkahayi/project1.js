document.getElementById('get-weather').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const apiKey = 'c1e7974e4f131437e2c228e5de8548b9'; // Replace with your OpenWeather API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      const weatherResult = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Description: ${data.weather[0].description}</p>
      `;
      document.getElementById('weather-result').innerHTML = weatherResult;
    })
    .catch(error => {
      document.getElementById('weather-result').innerHTML = `<p>${error.message}</p>`;
    });
});
