// get weather data from OpenWeatherMap API

// const apiKey = "41e39c6822b08a51e8ed1380a679393d";
// const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

// fetch(`${apiEndpoint}?appid=${apiKey}&q=${encodeURIComponent('kailua')}&units=metric`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(`The temperature in ${data.name} is ${data.main.temp}°C`);
//   })
//   .catch(error => console.error(error));


// extract elements from the document and assign them to variables

const tempSpan = document.getElementById('temperature');
const windSpan = document.getElementById('windspeed');
const chillSpan = document.getElementById('windchill');
const degreeSpan = document.getElementById('degree');

// make calculations

// let currTemp = (data.main.temp) * (9/5) + 32;
const currTemp = 80;
// let currWind = data.main.wind;
const currWind = 7;
let currChill = 0;
if (currTemp <= 50) {
    currChill = Math.round(35.74 + (0.6215 * currTemp) - (35.75 * Math.pow(currWind, 0.16)) + (0.4275 * currTemp * (Math.pow(currWind, 0.16))));
    degreeSpan.innerText = 'º'
} 
else {
    currChill = 'Temperatures are warm and pleasant. No windchill right now.';
};

// insert correct weather data into the document

tempSpan.innerText = currTemp;
windSpan.innerText = currWind;
chillSpan.innerText = currChill;