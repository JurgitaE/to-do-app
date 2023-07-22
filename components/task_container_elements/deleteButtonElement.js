import { sessionKey } from '../initialData.js';
import taskListGenerator from '../taskListGenerator.js';

function deleteButtonElement(taskList) {
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
    return deleteBtn;
}

export default deleteButtonElement;
