import checkBoxElement from './task_container_elements/checkBoxElement.js';
import taskSort from './taskSort.js';
import deleteButtonElement from './task_container_elements/deleteButtonElement.js';
import timeTillDeadlineElement from './task_container_elements/timeTillDeadlineElement.js';

function taskListGenerator() {
    let taskList = taskSort();
    document.getElementById('list').innerHTML = null;
    for (let task of taskList) {
        const toDo = document.createElement('div');
        toDo.setAttribute('class', 'listItem');
        toDo.setAttribute('id', task.id);

        const description = document.createElement('h3');
        description.textContent = task.description;

        toDo.appendChild(checkBoxElement(task, taskList));
        toDo.appendChild(description);
        toDo.appendChild(timeTillDeadlineElement(task));
        toDo.appendChild(deleteButtonElement(taskList));
        document.querySelector('#list').appendChild(toDo);
    }
    return taskList;
}
export default taskListGenerator;
