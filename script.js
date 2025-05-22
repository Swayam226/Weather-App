/*
how to approach?

so i have different divs for different visible components 

i will use the api of openweathermap

using the api i will have to render:
    image of weather condition (.weathericon #cloudimg)
    temperature (.tempdiv #temptext)
    city name  (.citydiv #citytext)
    humidity   (.humiditydiv (.humiddata -> p tag))
    wind speed (.humiditydiv (.winddata -> p tag))

all this will be updated throught the first ACTION OF SEARCHING A PARTICULAR CITY BY THE USER


*/
const searchbox = document.querySelector("#searchbox");
const search = document.querySelector("#searchbutton");
const weatherimg = document.querySelector("#cloudimg");
const tempdetail = document.querySelector("#temptext");
const citydetail = document.querySelector("#citytext");
const humiddetail = document.querySelector(".humiddata");
const winddetail = document.querySelector(".winddata");


console.log(API_KEY);


search.addEventListener("click", async () => {

    // fetching city name from geocoding api
    const searchdata = searchbox.value;

    // empty box check
    if (searchdata == "") {
        alert("Please enter a city name...")
        return;
    }

    try {
        const cityapi = `http://api.openweathermap.org/geo/1.0/direct?q=${searchdata}&appid=${API_KEY}&units=metric`
        let cityresponse = await fetch(cityapi);
        let citydata = await cityresponse.json();
        // console.log(citydata);
        if (citydata.length === 0) {
            alert('City not found, Please enter a valid city name');
        }

        // fetching actual weather data
        const lat = citydata[0].lat;
        const lon = citydata[0].lon;
        const weatherapi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        let weatherresponse = await fetch(weatherapi);
        let weatherdata = await weatherresponse.json();
        // console.log(weatherdata);
        // console.log(weatherdata.weather[0].main);
        let condition = weatherdata.weather[0].main;
        let desc = weatherdata.weather[0].description;
        let tempdata = weatherdata.main.temp;
        let humidityvalue = weatherdata.main.humidity;
        let windvalue = weatherdata.wind.speed;
        let cityname = weatherdata.name;

        // displaying required weather icon
        if (condition == "Clouds")
            cloudimg.src = "/Weather App/assets/cloudy.png";
        else if (condition == "Rain")
            cloudimg.src = "/Weather App/assets/rainy.png";
        else if (condition == "Snow")
            cloudimg.src = "/Weather App/assets/snowy.png"
        else if (condition == "Clear")
            cloudimg.src = "/Weather App/assets/sunny.png"
        else if (desc == "Shower rain")
            cloudimg.src = "/Weather App/assets/light rain.png"

        // displaying temperature
        tempdetail.textContent = `${tempdata}°C`;

        // displaying city name 
        citydetail.textContent = `${cityname}`;

        // displaying humidity data
        humiddetail.textContent = `${humidityvalue} %`;

        // displaying wind speed
        winddetail.textContent = `${windvalue} m/s`;
    } catch (error) {
        alert("Something went wrong, Please try again");
    }

})
