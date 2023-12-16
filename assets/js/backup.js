 
console.log("app4");

// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data))
var cityName = document.querySelector("#cityName");
var temp = document.querySelector("#temp");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
var searchBtn = document.querySelector("#searchBtn");
var searchCity = document.querySelector("#searchCity");
var wConditon = document.querySelector("#w-condition");
var wImage = document.querySelector(".weather-image");

// function defaultCity() {
//     var city = "Cleveland";

//     var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ mykey + "&units=imperial";

//     fetch(url)
//     .then(response => response.json())
//     .then (function(data) {
//             console.log(data);
//             console.log(data.name);
//             cityName.textContent = data.name;
//             temp.textContent = data.main.temp;
//             humidity.textContent = data.main.humidity;
//             wind.textContent = data.wind.speed;
//     });

// }
var city = "Cleveland";
  fetchWeather(city);

//"https://api.openweathermap.org/data/2.5/weather?q=London&appid=58c9977be249fb42b0380f28d92218ca";
function fetchWeather(city){
    
    var mykey = "58c9977be249fb42b0380f28d92218ca";

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ mykey + "&units=imperial";


    fetch(url)
    .then(response => response.json())
    .then (function(data) {
            console.log(data);
            console.log(data.name);
            cityName.textContent = data.name;
            temp.textContent = data.main.temp;
            humidity.textContent = data.main.humidity;
            wind.textContent = data.wind.speed;
            wConditon.textContent = data.weather[0].main;

            if (data.weather[0].main == "Clear"){
                   wImage.src = "https://openweathermap.org/img/wn/01d@2x.png";
            }
             else if (data.weather[0].main == "Clouds"){
                   wImage.src = "https://openweathermap.org/img/wn/02d@2x.png";
            }
             else if (data.weather[0].main == "Rain"){
                   wImage.src = "https://openweathermap.org/img/wn/10d@2x.png";
            }
             else if (data.weather[0].main == "Drizzle"){
                   wImage.src = "https://openweathermap.org/img/wn/09d@2x.png";
            }
             else if (data.weather[0].main == "Thunderstorm"){
                   wImage.src = "https://openweathermap.org/img/wn/11d@2x.png";
            }
             else if (data.weather[0].main == "Snow" || data.weather[1].main == "Snow"){
                   wImage.src = "https://openweathermap.org/img/wn/13d@2x.png";
            }
            else {
              wImage.src = "https://openweathermap.org/img/wn/50d@2x.png";
       }
           
    });
    //.then(data => console.log(data.main.temp));
    

}


searchBtn.addEventListener("click", ()=> {
    fetchWeather(searchCity.value);
})


  

