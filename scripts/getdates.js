
let currYear = document.getElementById('copyrightInfo');

let date = new Date();
let year = date.getFullYear();
currYear.innerHTML = `&copy;${year} | Haily McGhie | Idaho`;


let modDateLabel = document.getElementById('lastModified');
let lastMod = document.lastModified;
modDateLabel.innerHTML = lastMod;