'use strict';

import getTime from './components/getTime.js';
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
    const textArea = document.getElementById('description').value;
    const dateInput = new Date(document.getElementById('deadline').value).getTime();
    const currentTime = new Date();

    if (
        ![...textArea].some(
            symbol => symbol.toLowerCase().charCodeAt() >= 97 && symbol.toLowerCase().charCodeAt() <= 122
        )
    ) {
        alert('Input field should contain at least some letters!');
    } else if (dateInput <= new Date(currentTime.getTime())) {
        alert(`Task deadline cannot be earlier than present (${getTime(currentTime)}) time`);
    } else {
        const newItem = {
            deadline: dateInput,
            description: textArea,
            finished: false,
            id: `${taskList.length > 0 ? [...taskList].map(item => +item.id).sort((a, b) => b - a)[0] + 1 : '0'}`,
            addedDate: Date.now(),
            finishDate: '',
        };
        taskList.push(newItem);
        sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
        document.getElementById('description').value = '';
        document.getElementById('deadline').value = '';
        taskListGenerator();
    }
});

// sorting

console.log(document.getElementById('sort').value);
document.getElementById('sort').addEventListener('change', e => {
    sessionStorage.setItem(sortKey, JSON.stringify(document.getElementById('sort').value));
    taskListGenerator();
});
