import getDeadline from '../helper-functions/getDeadline.js';

function timeTillDeadlineElement(task) {
    const timeTillDeadline = document.createElement('p');
    timeTillDeadline.setAttribute('class', 'date');
    timeTillDeadline.textContent = task.finished ? 'Completed' : getDeadline(task.deadline);

    return timeTillDeadline;
}

export default timeTillDeadlineElement;
