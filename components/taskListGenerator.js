import getDeadline from './getDeadline.js';
import { sessionKey, sortKey } from './initialData.js';
import taskSort from './taskSort.js';

function taskListGenerator() {
    document.getElementById('sort').value = JSON.parse(sessionStorage.getItem(sortKey));
    let taskList = JSON.parse(sessionStorage.getItem(sessionKey));
    taskList = taskSort(taskList);

    console.log(taskList);
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
        checkbox.addEventListener('click', e => {
            const taskItem = taskList.find(item => '' + item.id === '' + e.target.parentElement.id);

            if (!taskItem.finished) {
                taskItem.finished = true;
                taskItem.finishDate = Date.now();
                sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
            } else {
                taskItem.finished = false;
                taskItem.finishDate = '';
                sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
            }
            taskListGenerator();
            console.log(checkbox);
        });

        const endDate = document.createElement('p');
        endDate.setAttribute('class', 'date');
        endDate.textContent = getDeadline(item.deadline);

        const deleteBtn = document.createElement('a');
        deleteBtn.setAttribute('class', 'delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', e => {
            if (confirm('Confirm item removal from the list.')) {
                taskList.splice(
                    taskList.findIndex(item => '' + item.id === '' + e.target.parentElement.id),
                    1
                );
                sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
                taskListGenerator();
            }
        });

        toDo.appendChild(checkbox);
        toDo.appendChild(description);
        toDo.appendChild(endDate);
        toDo.appendChild(deleteBtn);
        document.querySelector('#list').appendChild(toDo);
    }
    return taskList;
}
export default taskListGenerator;
