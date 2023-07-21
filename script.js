'use strict';

import listItem from './components/listItem.js';

const initialData = [{ deadline: '', description: 'some not important task', finished: false }];
let listItems;
const text = document.getElementById('description').value;
const endSelection = document.getElementById('end').value;
console.log(endSelection);

const sessionKey = 'toDoList';
if (!JSON.parse(sessionStorage.getItem(sessionKey))) {
    listItems = initialData;
    sessionStorage.setItem(sessionKey, JSON.stringify(listItems));
} else {
    listItems = JSON.parse(sessionStorage.getItem(sessionKey));
}

console.log(listItem);
for (let i of listItems) {
    listItem(i);
}
// Add event listener

const btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', function (e) {
    e.preventDefault();

    listItems.push({
        deadline: document.getElementById('end').value,
        description: document.getElementById('description').value,
        finished: false,
    });
    sessionStorage.setItem(sessionKey, JSON.stringify(listItems));
});

// const toDo = document.createElement('div');
// const checkbox = document.createElement('input');
// checkbox.setAttribute()
