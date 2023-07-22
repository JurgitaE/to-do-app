import { sessionKey, sortKey } from './initialData.js';

function taskSort() {
    const taskList = JSON.parse(sessionStorage.getItem(sessionKey));
    console.log(taskList);
    const sortType = JSON.parse(sessionStorage.getItem(sortKey));
    if (sortType === 'new') {
        taskList.sort((a, b) => {
            return b.addedDate - a.addedDate;
        });
    }
    if (sortType === 'deadline') {
        taskList.sort((a, b) => {
            if (a.finished === b.finished) {
                return a.deadline < b.deadline ? 1 : -1;
            }
            return a.finished ? 1 : -1;
        });
    }
    if (sortType === 'completed') {
        taskList.sort((a, b) => {
            return a.finishDate > b.finishDate ? -1 : 1;
        });
    }
    return taskList;
}
export default taskSort;
