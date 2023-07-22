function taskItemContainer(task) {
    const container = document.createElement('div');
    container.setAttribute('class', 'listItem');
    container.setAttribute('id', task.id);

    return container;
}

export default taskItemContainer;
