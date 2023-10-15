const darkBtn = document.querySelector('.switch');
const btnTxt = document.querySelector('.darkbtn')
const page = document.querySelector('.page');

darkBtn.addEventListener('click', () => {
    if (btnTxt.textContent == 'Dark') {
        btnTxt.textContent = 'Light';
        page.classList.add('dark');
    }
    else {
        btnTxt.textContent = 'Dark';
        page.classList.remove('dark');
    }
});