'use strict';
const initialData = [{ id: 1, dedaline: '', description: 'some not important task' }];
let listItems;
const endSelection = document.querySelector('#end').value;

const sessionKey = 'toDoList';
if (!JSON.parse(sessionStorage.getItem(sessionKey))) {
    listItems = initialData;
    sessionStorage.setItem(sessionKey, JSON.stringify(listItems));
    console.log('newly set', listItems);
} else {
    listItems = JSON.parse(sessionStorage.getItem(sessionKey));
    console.log('already set', listItems);
}
