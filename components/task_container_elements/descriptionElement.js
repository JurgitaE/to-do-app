function descriptionElement(task) {
    const description = document.createElement('h3');
    description.textContent = task.description;
    if (task.finished) {
        description.style.textDecoration = 'line-through';
    }
    return description;
}

export default descriptionElement;
