function listItem(list) {
    const toDo = document.createElement('div');
    toDo.setAttribute('class', 'listItem');

    const description = document.createElement('h3');
    description.textContent = list.description;

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = list.finished;

    const endDate = document.createElement('p');
    endDate.setAttribute('class', 'date');
    endDate.textContent = list.deadline.toLocaleString('lt-LT').split('T').join(' ');

    toDo.appendChild(checkbox);
    toDo.appendChild(description);
    toDo.appendChild(endDate);

    document.querySelector('#list').appendChild(toDo);
}

export default listItem;
