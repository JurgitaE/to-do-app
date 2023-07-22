'use strict';

import { initialData, sessionKey, sortKey } from './components/initialData.js';
import taskListGenerator from './components/taskListGenerator.js';

let taskList = [];

if (!JSON.parse(sessionStorage.getItem(sessionKey))) {
    taskList = initialData;
    sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
} else {
    taskList = JSON.parse(sessionStorage.getItem(sessionKey));
}

if (!JSON.parse(sessionStorage.getItem(sortKey))) {
    sessionStorage.setItem(sortKey, JSON.stringify('new'));
}
taskList = taskListGenerator();

// Add event listener
const btnAdd = document.getElementById('add');

btnAdd.addEventListener('click', function (e) {
    e.preventDefault();
    const newItem = {
        deadline: document.getElementById('end').value,
        description: document.getElementById('description').value,
        finished: false,
        id: `${taskList.length > 0 ? [...taskList].map(item => +item.id).sort((a, b) => b - a)[0] + 1 : '0'}`,
        startDate: Date.now(),
    };
    taskList.push(newItem);
    sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
    taskListGenerator();
});

// sorting

console.log(document.getElementById('sort').value);
document.getElementById('sort').addEventListener('change', e => {
    sessionStorage.setItem(sortKey, JSON.stringify(document.getElementById('sort').value));
});
