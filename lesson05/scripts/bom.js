const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value == '') {
        alert('No chapter has been selected. Please try again.');
        input.focus();
    }
    else {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        listItem.innerHTML = input.value;
        deleteButton.textContent = '×';
        listItem.append(deleteButton);
        list.append(listItem);
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
            input.focus();
            input.value = '';
        });
    }
});