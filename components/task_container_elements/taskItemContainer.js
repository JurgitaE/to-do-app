function taskItemContainer(task) {
    const container = document.createElement('div');
    container.setAttribute('class', 'listItem');
    container.setAttribute('id', task.id);
    if (task.finished) {
        container.style.backgroundColor = 'lightBlue';
    }
    return container;
}

export default taskItemContainer;
