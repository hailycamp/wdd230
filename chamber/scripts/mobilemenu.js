const hamicon = document.querySelector('.ham-button');
const navigation = document.querySelector('nav');

// add an event listener to the hamicon on click to open or shut the nav

hamicon.addEventListener('click', () => {
    hamicon.classList.toggle('open');
    navigation.classList.toggle('open');
});