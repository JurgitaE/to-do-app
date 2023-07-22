function getDeadline(deadline) {
    let days;
    let hours;
    let minutes;
    if (deadline) {
        const currentDate = Date.now();
        days = Math.trunc((deadline - currentDate) / 1000 / 60 / 60 / 24);
        hours = Math.trunc((deadline - currentDate - days * 1000 * 60 * 60 * 24) / 1000 / 60 / 60);
        minutes = Math.trunc(
            (deadline - currentDate - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60) / 1000 / 60
        );

        return `${days} days ${hours} hours ${minutes} minutes`;
    }

    return '';
}

export default getDeadline;
