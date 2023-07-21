'use strict';

import taskListGenerator from './components/taskListGenerator.js';

const initialData = [
    { deadline: '', description: 'some not important task', finished: false, id: '0', finishDate: '', startDate: '' },
];
let taskList = [];

const sessionKey = 'toDoList';
if (!JSON.parse(sessionStorage.getItem(sessionKey))) {
    taskList = initialData;
    sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
} else {
    taskList = JSON.parse(sessionStorage.getItem(sessionKey));
}

// generate list
taskList = taskListGenerator(taskList);
sessionStorage.setItem(sessionKey, JSON.stringify(taskList));

// Add event listener
const btnAdd = document.getElementById('add');

btnAdd.addEventListener('click', function (e) {
    e.preventDefault();
    const newItem = {
        deadline: document.getElementById('end').value,
        description: document.getElementById('description').value,
        finished: false,
        id: `${taskList.length > 0 ? [...taskList].map(item => +item.id).sort((a, b) => b - a)[0] + 1 : '0'}`,
        finishDate: '',
        startDate: '',
    };
    taskList.push(newItem);
    sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
    document.getElementById('list').innerHTML = '';
    taskListGenerator(taskList);
});
