import { sessionKey } from '../initialData.js';
import taskListDisplay from '../helper-functions/taskListDisplay.js';

function deleteButtonElement(taskList) {
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', e => {
        if (confirm('Confirm item removal from the list.')) {
            taskList.splice(
                taskList.findIndex(item => '' + item.id === '' + e.target.parentElement.id),
                1
            );
            sessionStorage.setItem(sessionKey, JSON.stringify(taskList));
            taskListDisplay();
        }
    });
    return deleteBtn;
}

export default deleteButtonElement;
