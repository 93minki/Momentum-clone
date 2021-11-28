const API_KEY = "8b38548607d46202dca00bd98d2cff7b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector("#weather__icon");
      const weather = document.querySelector("#weather__state");
      const city = document.querySelector("#weather__city");
      icon.src =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No Weather info for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
