// get weather data from OpenWeatherMap API

const dailyURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.95&appid=41e39c6822b08a51e8ed1380a679393d&units=imperial';


async function dailyFetch() {
    try {
        let response = await fetch(dailyURL);
        if (response.ok) {
            let dailyData = await response.json();
        console.log(dailyData); 
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


function displayForecast(dailyData) {
    forecastBlock = document.getElementById('weather');
    
    let currIndex = 0;
    let unix_timestamp = dailyData.list[currIndex].dt;
        let date = new Date(unix_timestamp * 1000);
        let day = date.getDay();
    buildWeatherDiv(dailyData, currIndex, day);

    for(i = 6; i < 14; i++) {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds
        let unix_timestamp = dailyData.list[i].dt;
        let date = new Date(unix_timestamp * 1000);
        let hour = date.getHours();
        let day2 = date.getDay();
        if (hour >= 14 && hour <= 16) {
            buildWeatherDiv(dailyData, i, day2);
        }
    }
}


function buildWeatherDiv(dailyData, i, day) {
    const weatherDiv = document.createElement('div');
    const dtLabel = document.createElement('p');

    if (day == 0) {
        day = 'Sunday at 3 PM';
    } else if (day == 1) {
        day = 'Monday at 3 PM';
    } else if (day == 2) {
        day = 'Tuesday at 3 PM';
    } else if (day == 3) {
        day = 'Wednesday at 3 PM';
    } else if (day == 4) {
        day = 'Thursday at 3 PM';
    } else if (day == 5) {
        day = 'Friday at 3 PM';
    } else {
        day = 'Saturday at 3 PM';
    }

    if (i==0) {day = 'Current Conditions'}

    dtLabel.innerText = day;
    weatherDiv.appendChild(dtLabel);

    // add the high and low temp
    const highLow = document.createElement('p');
    highLow.innerHTML = `${dailyData.list[i].main.temp} &deg;F`;
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

    
    const humidity = document.createElement('p');
    humidity.innerText = `${dailyData.list[i].main.humidity}% Humidity`;
    weatherDiv.appendChild(humidity);

    forecastBlock.appendChild(weatherDiv);
}