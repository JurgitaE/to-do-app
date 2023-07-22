import checkBoxElement from './task_container_elements/checkBoxElement.js';
import getDeadline from './getDeadline.js';
import { sessionKey, sortKey } from './initialData.js';
import taskSort from './taskSort.js';

function taskListGenerator() {
    document.getElementById('sort').value = JSON.parse(sessionStorage.getItem(sortKey));

    let taskList = taskSort();

    document.getElementById('list').innerHTML = null;
    for (let task of taskList) {
        const toDo = document.createElement('div');
        toDo.setAttribute('class', 'listItem');
        toDo.setAttribute('id', task.id);

        const description = document.createElement('h3');
        description.textContent = task.description;

        const checkbox = checkBoxElement(task, taskList);

        const endDate = document.createElement('p');
        endDate.setAttribute('class', 'date');
        endDate.textContent = task.finished ? 'Completed' : getDeadline(task.deadline);

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
