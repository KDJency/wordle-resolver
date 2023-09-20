import Status from "../constants/status";

export const getStatuses = ((guess, solution) => {
    const statusObject = {};

    guess.split('').forEach((letter, i) => {
        if (!solution.split('').includes(letter)) {
            return (statusObject[i] = Status.absent)
        }

        if (letter === solution[i]) {
            return (statusObject[i] = Status.correct)
        }

        if (statusObject[letter] !== Status.correct) {
            return (statusObject[i] = Status.present)
        }
    })

    return statusObject
});
