import checkBoxElement from '../task_container_elements/checkBoxElement.js';
import taskSort from './taskSort.js';
import deleteButtonElement from '../task_container_elements/deleteButtonElement.js';
import timeTillDeadlineElement from '../task_container_elements/timeTillDeadlineElement.js';
import taskItemContainer from '../task_container_elements/taskItemContainer.js';
import descriptionElement from '../task_container_elements/descriptionElement.js';

function taskListDisplay() {
    let taskList = taskSort();
    document.getElementById('list').innerHTML = null;

    for (let task of taskList) {
        let container = taskItemContainer(task);
        container.appendChild(checkBoxElement(task, taskList));
        container.appendChild(descriptionElement(task));
        container.appendChild(timeTillDeadlineElement(task));
        container.appendChild(deleteButtonElement(taskList));
        document.querySelector('#list').appendChild(container);
    }

    return taskList;
}
export default taskListDisplay;
