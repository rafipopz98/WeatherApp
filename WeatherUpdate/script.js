const inputBox = document.querySelector(".inputBox");
const submitBtn = document.querySelector(".submitBtn");
const weatherIcon = document.querySelector(".weather-icon");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather");

const weather = async (city) => {
  const key = "5a1a2812662b621901fe677403d6c7c1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  if (weather_data.cod === `404`) {
    location_not_found.style.display = "block";
    weather_body.style.display = "none";
    humidity.innerHTML="null"
    wind.innerHTML="null"
    console.log("error");
    return;
  }

  console.log("run");
  location_not_found.style.display = "none";
  weather_body.style.display = "block";
  temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  desc.innerHTML = `${weather_data.name}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";
      break;
    case "Snow":
      weatherIcon.src = "images/snow.png";
      break;
  }

  console.log(weather_data);
};

submitBtn.addEventListener("click", () => {
  weather(inputBox.value);
});
