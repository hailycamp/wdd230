
let date = new Date();
let year = date.getFullYear();

let modDateLabel = document.getElementById('last-mod');
let lastMod = document.lastModified;
modDateLabel.innerHTML = lastMod;