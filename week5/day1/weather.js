const getWeather = async () => {
  const weather = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?zip=76051,us&appid=3f13f8ca2ba61051250b3c015ae9067a"
  );
  const formattedWeather = await weather.json();
  console.log(formattedWeather);
};

getWeather();

const getLocation = async () => {
  const location = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?zip=76051,us&appid=3f13f8ca2ba61051250b3c015ae9067a"
  );
  const formattedLocation = await location.json();
  const locationForPage = formattedLocation.name;
  console.log(locationForPage);
  const locationHeader = document.querySelector(".location");
  locationHeader.innerHTML = locationForPage;
};

getLocation();

const getTemperature = async () => {
  const temperature = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?zip=76051,us&appid=3f13f8ca2ba61051250b3c015ae9067a"
  );
  const pulledTemperature = await temperature.json();
  const rawTemperature = pulledTemperature.main.temp;
  const tempInDegreesF = (rawTemperature - 273.15) * (9 / 5) + 32;
  const tempForPage = tempInDegreesF.toFixed(0);
  console.log(tempForPage);
  const temperatureHeader = document.querySelector(".temperature");
  temperatureHeader.innerHTML = tempForPage;
};

getTemperature();
