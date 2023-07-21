'use strict';

const initialData = [
    { deadline: '', description: 'some not important task', finished: false, id: '0', finishDate: '', startDate: '' },
];
let taskList;

const sessionKey = 'toDoList';
if (!JSON.parse(sessionStorage.getItem(sessionKey))) {
    taskList = initialData;
    sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
} else {
    taskList = JSON.parse(sessionStorage.getItem(sessionKey));
}

// generate list
taskListGenerator();

// Add event listener
const btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', function (e) {
    e.preventDefault();
    const newItem = {
        deadline: document.getElementById('end').value,
        description: document.getElementById('description').value,
        finished: false,
        id: `${taskList.length > 0 ? [...taskList].map(item => +item.id).sort((a, b) => b - a)[0] + 1 : '0'}`,
    };
    taskList.push(newItem);
    sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
    document.getElementById('list').innerHTML = '';
    taskListGenerator();
});

function taskListGenerator() {
    document.getElementById('list').innerHTML = null;
    for (let item of taskList) {
        const toDo = document.createElement('div');
        toDo.setAttribute('class', 'listItem');
        toDo.setAttribute('id', item.id);

        const description = document.createElement('h3');
        description.textContent = item.description;

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = item.finished;

        const endDate = document.createElement('p');
        endDate.setAttribute('class', 'date');
        endDate.textContent = item.deadline ? item.deadline.toLocaleString('lt-LT').split('T').join(' ') : 'N/A';

        const deleteBtn = document.createElement('a');
        deleteBtn.setAttribute('class', 'delete');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', e => {
            taskList.splice(
                taskList.findIndex(item => '' + item.id === '' + e.target.parentElement.id),
                1
            );
            sessionStorage.setItem('toDoList', JSON.stringify(taskList));
            taskListGenerator();
        });

        toDo.appendChild(checkbox);
        toDo.appendChild(description);
        toDo.appendChild(endDate);
        toDo.appendChild(deleteBtn);
        document.querySelector('#list').appendChild(toDo);
    }
}
