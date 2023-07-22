const initialData = [
    {
        deadline: 1691322420000,
        description: 'Go to the Gym and workout for 2 hours.',
        finished: false,
        id: '0',
        addedDate: 1690026354604,
        finishDate: '',
    },
    {
        deadline: 1692246120000,
        description: 'Visit dentist',
        finished: false,
        id: '1',
        addedDate: 1690026334404,
        finishDate: '',
    },
    {
        deadline: 1694345120000,
        description: 'Buys some flowers',
        finished: true,
        id: '2',
        addedDate: 1690026334605,
        finishDate: 1690041911519,
    },
    {
        deadline: '',
        description: 'Make a new friend',
        finished: false,
        id: '3',
        addedDate: 1690026334805,
        finishDate: '',
    },
];
const sessionKey = 'toDoList';
const sortKey = 'sortMethod';

export { initialData, sessionKey, sortKey };
