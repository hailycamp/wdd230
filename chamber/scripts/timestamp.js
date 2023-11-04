const date = new Date();

const timestamp = document.getElementById('timestamp');
const form = document.querySelector('form');

form.onload = () => {timestamp.value = date;};
