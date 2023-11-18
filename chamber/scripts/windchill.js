// get weather data from OpenWeatherMap API

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=21.39&lon=-157.74&appid=41e39c6822b08a51e8ed1380a679393d&units=imperial';
const dailyURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=21.39&lon=-157.74&appid=41e39c6822b08a51e8ed1380a679393d&units=imperial';



async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
        // console.log(data); //output for testing only
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

async function dailyFetch() {
    try {
        let response = await fetch(dailyURL);
        if (response.ok) {
            let dailyData = await response.json();
        console.log(dailyData); //output for testing only
        displayForecast(dailyData);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
}

dailyFetch();

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



// create forecast

function displayForecast(dailyData) {
    forecastBlock = document.getElementById('forecast');
        
    for (i = 0; i < 24; i++) {
        const weatherDiv = document.createElement('div');
        const dtLabel = document.createElement('p');

        // add the time stamp
        let unix_timestamp = dailyData.list[i].dt;
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds
        let date = new Date(unix_timestamp * 1000);
        // Date part from the timestamp
        let day = date.getDay();
        if (day == 0) {
            day = 'Sunday';
        } else if (day == 1) {
            day = 'Monday';
        } else if (day == 2) {
            day = 'Tuesday';
        } else if (day == 3) {
            day = 'Wednesday';
        } else if (day == 4) {
            day = 'Thursday';
        } else if (day == 5) {
            day = 'Friday';
        } else {
            day = 'Saturday';
        }
        // Hours part from the timestamp
        let hours = date.getHours();
            if (hours > 12) {hours -= 12;}
        dtLabel.innerText = day + ' ' + hours + ' p.m.';
        weatherDiv.appendChild(dtLabel);

        // add the high and low temp
        const highLow = document.createElement('p');
        highLow.innerHTML = `High: ${dailyData.list[i].main.temp_max} &deg;F | Low: ${dailyData.list[i].main.temp_min} &deg;F`;
        weatherDiv.appendChild(highLow);

        // add the icon and caption
        const fig = document.createElement('figure');
        const figcap = document.createElement('figcaption');
        const figicon = document.createElement('img');
        const iconsrc = `https://api.openweathermap.org/img/w/${dailyData.list[i].weather[0].icon}.png`;
        const desc = dailyData.list[i].weather[0].description;
        figcap.innerText = `${desc}`;
        figicon.setAttribute('src', iconsrc);
        figicon.setAttribute('alt', desc);
        fig.appendChild(figicon);
        fig.appendChild(figcap);
        weatherDiv.appendChild(fig);

        forecastBlock.appendChild(weatherDiv);
    };

}

