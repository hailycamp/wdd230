
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.95&appid=41e39c6822b08a51e8ed1380a679393d&units=imperial';
const bannerElement = document.querySelector('#banner');
const bannerPara = document.querySelector('#banner-text');
const bannerX = document.querySelector('#banner-close');


bannerX.addEventListener('click', function() {
    bannerElement.classList.add('closed');
    bannerElement.classList.remove('show-banner');
});


function insertBanner(data) {
    bannerPara.innerHTML = `The High Today is ${data.main.temp_max} &deg;F`;
    bannerX.innerHTML = '×';
    bannerElement.classList.add('show-banner');
    bannerElement.classList.remove('closed');
}

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
        // console.log(data); //output for testing only
        insertBanner(data);
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