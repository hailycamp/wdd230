// get dates and print last modified info to footer

let date = new Date();
let year = date.getFullYear();

let modDateLabel = document.getElementById('last-mod');
let lastMod = document.lastModified;
modDateLabel.innerHTML = lastMod;

// get the date right now in ms

const theDateToday = new Date();
const currDateInMs = Date.now();
let lastVisit = 0;
let msSinceVisit = 0;

// calculate ms since last visit

if (localStorage.getItem('lastVisitDate') == null) {
    msSinceVisit = 0;
}
else {
    lastVisit = JSON.parse(localStorage.getItem('lastVisitDate'));msSinceVisit = currDateInMs - lastVisit;
}

//display one of three possible messages based on how many times they have visited

let visitsDisplay = document.querySelector('#visits-display')

if (msSinceVisit < 600) {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} 
else if (msSinceVisit < (24 * 3600000)) {
    visitsDisplay.textContent = `Back so soon! Awesome!`;
}
else {
    // calculate days since last visit
    let daysSince = Math.round(msSinceVisit / 60 / 60 / 24);
    if (daysSince < 2) {
        visitsDisplay.textContent = `You last visited 1 day ago.`;
    }
    else {
        visitsDisplay.textContent = `You last visited ${daysSince} days ago.`;
    }
}


// set the local storage 'last visit' to current date 

localStorage.setItem('lastVisitDate', JSON.stringify(currDateInMs));
