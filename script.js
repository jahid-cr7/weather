const apiKey = "aef8ddae67491e8eeac76a3c12e0a608";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.getElementById("temparature").innerHTML =
    Math.floor(data.main.temp) + "° c";
  document.getElementById("city-name").innerHTML = data.name;
  document.getElementById("humidity-rate").innerHTML = data.main.humidity + "%";
  document.getElementById("wind-speed").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = "./images/clouds.png";
    }else if(data.weather[0].main === 'Rain'){
        weatherIcon.src = "./images/rain.png";
    }else if(data.weather[0].main === 'Mist'){
        weatherIcon.src = "./images/mist.png";
    }
    else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main === 'Clear'){
        weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main === 'Haze'){
        weatherIcon.src = "./images/humidity.png";
    }
    


}


searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});
