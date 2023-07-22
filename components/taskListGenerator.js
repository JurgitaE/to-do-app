import checkBoxElement from './task_container_elements/checkBoxElement.js';
import taskSort from './helper-functions/taskSort.js';
import deleteButtonElement from './task_container_elements/deleteButtonElement.js';
import timeTillDeadlineElement from './task_container_elements/timeTillDeadlineElement.js';
import taskItemContainer from './task_container_elements/tasktemContainer.js';

function taskListGenerator() {
    let taskList = taskSort();
    document.getElementById('list').innerHTML = null;
    for (let task of taskList) {
        let container = taskItemContainer(task);

        const description = document.createElement('h3');
        description.textContent = task.description;

        container.appendChild(checkBoxElement(task, taskList));
        container.appendChild(description);
        container.appendChild(timeTillDeadlineElement(task));
        container.appendChild(deleteButtonElement(taskList));
        document.querySelector('#list').appendChild(container);
    }
    return taskList;
}
export default taskListGenerator;
