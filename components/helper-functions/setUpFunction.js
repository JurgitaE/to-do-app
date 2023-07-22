import { initialData, sessionKey, sortKey } from '../initialData.js';
import getFormattedTime from './getFormattedTime.js';
import taskListDisplay from './taskListDisplay.js';

function setUpFunction() {
    if (!JSON.parse(sessionStorage.getItem(sessionKey))) {
        sessionStorage.setItem(sessionKey, JSON.stringify(initialData));
    }
    if (!JSON.parse(sessionStorage.getItem(sortKey))) {
        sessionStorage.setItem(sortKey, JSON.stringify('new'));
    }
    document.getElementById('sort').value = JSON.parse(sessionStorage.getItem(sortKey));

    document.getElementById('add').addEventListener('click', function (e) {
        e.preventDefault();
        const textArea = document.getElementById('description').value;
        const dateInput = new Date(document.getElementById('deadline').value).getTime();
        const currentTime = new Date();
        let taskList = JSON.parse(sessionStorage.getItem(sessionKey));
        if (
            ![...textArea].some(
                symbol => symbol.toLowerCase().charCodeAt() >= 97 && symbol.toLowerCase().charCodeAt() <= 122
            )
        ) {
            alert('Input field should include text!');
        } else if (dateInput <= currentTime.getTime()) {
            alert(`Task deadline cannot be earlier than present (${getFormattedTime(currentTime)}) time`);
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
            taskListDisplay();
        }
    });

    document.getElementById('sort').addEventListener('change', e => {
        sessionStorage.setItem(sortKey, JSON.stringify(document.getElementById('sort').value));
        taskListDisplay();
    });
    taskListDisplay();
}

export default setUpFunction;
