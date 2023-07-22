import { sessionKey } from '../initialData.js';
import taskListGenerator from '../taskListGenerator.js';

function checkBoxElement(task, taskList) {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.finished;
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
    });

    return checkbox;
}

export default checkBoxElement;
