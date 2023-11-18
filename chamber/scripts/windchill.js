// get weather data from OpenWeatherMap API

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&appid=41e39c6822b08a51e8ed1380a679393d&units=imperial';

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
        console.log(data); //output for testing only
        displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
}

apiFetch();

// extract elements from the document and assign them to variables

const weatherIcon = document.getElementById('icon');
const captionDesc = document.getElementById('iconcap');
const tempSpan = document.getElementById('temperature');
const windSpan = document.getElementById('windspeed');
const chillSpan = document.getElementById('windchill');

// make calculations

let currChill = 0;
let currTemp = 0;
let currWind = 0;

function displayResults(data) {
    tempSpan.innerHTML = `${data.main.temp} &deg;F`;
    currTemp = data.main.temp;
    const iconsrc = `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

    currWind = data.wind.speed;

    if (currTemp <= 50 && currWind > 3) {
        const chillNum = Math.round(35.74 + (0.6215 * currTemp) - (35.75 * Math.pow(currWind, 0.16)) + (0.4275 * currTemp * (Math.pow(currWind, 0.16))), 1);
        currChill = `${chillNum} &deg;F`;
    } 
    else if (currWind < 3 || currTemp > 50) {
        currChill = 'No windchill right now.';
    };

    tempSpan.innerText = currTemp;
    windSpan.innerText = currWind;
    chillSpan.innerHTML = currChill;
}



// insert correct weather data into the document

