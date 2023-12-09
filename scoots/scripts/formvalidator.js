// range value display

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("period");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}