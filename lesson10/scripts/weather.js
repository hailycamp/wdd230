const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weatehr-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=41e39c6822b08a51e8ed1380a679393d&units=imperial';

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    // const iconsrc = `https://api.openweathermap.org/img/w/${______}._____`; //still gotta figure this one out
    let desc = data.weather[0].description;
    //weatherIcon.setAttribute('___', ____);
    //weatherIcon.setAttribute('___', ____);
    captionDesc.textContent = `${desc}`;
}

async function apiFetch() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data); //output for testing only
        displayResults(data);
    }
    catch(error) {
        response.text(); //what???
        console.log('This didn\'t work. Try again. Error:' + error);
    }
}

apiFetch();