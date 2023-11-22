function getDay(day) {
    // convert day num to day string
    if (day == 0) {
        dayThree = 'Sunday';
    } else if (day == 1) {
        dayThree = 'Monday';
    } else if (day == 2) {
        dayThree = 'Tuesday';
    } else if (day == 3) {
        dayThree = 'Wednesday';
    } else if (day == 4) {
        dayThree = 'Thursday';
    } else if (day == 5) {
        dayThree = 'Friday';
    } else {
        dayThree = 'Saturday';
    }
}


let dayStr = ['', '', ''];
let dayHigh = [0, 0, 0];
let dayLow = [150, 150, 150];
let dayIcon = ['', '', ''];
let dayIconDesc = ['', '', ''];


// create forecast

function displayForecast(dailyData) {
    forecastBlock = document.getElementById('forecast');

    let today = new Date().getDay;

    for (i = 0; i < 24; i++) {
        // get the time stamp from the current 3-hour forecast
        let unix_timestamp = dailyData.list[i].dt;
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds
        let date = new Date(unix_timestamp * 1000);
        // Day part from the timestamp
        let day = date.getDay();
        let time = date.getHours();

        //adjust the high and low temp trackers for the correct day
        if (day == today) {
            dayStr[0] = getDay(day);
            if ((dailyData.list[i].main.temp_max) > dayHigh[0]) {
                dayHigh[0] = dailyData.list[i].main.temp_max;
            }
            if ((dailyData.list[i].main.temp_min) < dayLow[0]) {
                dayLow[0] = dailyData.list[i].main.temp_min;
            }
            if (time > 10 && time < 1) {
                dayIcon[0] = dailyData.list[i].weather[0].icon;
                dayIconDesc[0] = dailyData.list[i].weather[0].description;
            }
                 
        }
        else if (day == (today + 1)) {    
            dayStr[1] = getDay(day);   
            if ((dailyData.list[i].main.temp_max) > dayHigh[1]) {
                dayHigh[1] = dailyData.list[i].main.temp_max;
            }
            if ((dailyData.list[i].main.temp_min) < dayLow[1]) {
                dayLow[1] = dailyData.list[i].main.temp_min;
            }
            if (time > 10 && time < 1) {
                dayIcon[1] = dailyData.list[i].weather[0].icon;
                dayIconDesc[1] = dailyData.list[i].weather[0].description;
            }     
        }
        else if (day == (today + 2)) {            
            dayStr[2] = getDay(day);
            if ((dailyData.list[i].main.temp_max) > dayHigh[2]) {
                dayHigh[2] = dailyData.list[i].main.temp_max;
            }
            if ((dailyData.list[i].main.temp_min) < dayLow[2]) {
                dayLow[2] = dailyData.list[i].main.temp_min;
            }
            if (time > 10 && time < 1) {
                dayIcon[2] = dailyData.list[i].weather[0].icon;
                dayIconDesc[2] = dailyData.list[i].weather[0].description;
            }       
        }
    };

    // building the weather cards
    for (i = 0; i < 3; i++) {
        const weatherDiv = document.createElement('div');

        const dayLabel = document.createElement('p');
        dayLabel.innerText = dayStr[i];
        weatherDiv.appendChild(dayLabel);

        const highLow = document.createElement('p');
        highLow.innerHTML = `High: ${dayHigh[i]} &deg;F | Low: ${dayLow[i]} &deg;F`;
        weatherDiv.appendChild(highLow);

        const fig = document.createElement('figure');
        const figcap = document.createElement('figcaption');
        const figicon = document.createElement('img');
        const iconsrc = `https://api.openweathermap.org/img/w/${dayIcon[i]}.png`;
        const desc = dayIconDesc[i];
        figcap.innerText = `${desc}`;
        figicon.setAttribute('src', iconsrc);
        figicon.setAttribute('alt', desc);
        fig.appendChild(figicon);
        fig.appendChild(figcap);
        weatherDiv.appendChild(fig);

        forecastBlock.appendChild(weatherDiv);
    }    

}

