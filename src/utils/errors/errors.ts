export const errorMessage = (errorCode: number | undefined) => {
    switch (errorCode) {
        case 1:
            return `Session not found, try to log in again.`;
        case 2:
            return `Please return to the site and log in again.`;
        case 3:
            return `Player blocked`;
        case 5:
            return `Not enough balance`;
        case 6:
            return `Transaction not found`;
        case 10:
            return `Game not found`;
        case 11:
            return `Incorrect credentials`;
        case 12:
            return `Request not found`;
        case 13:
            return `Player not found`;
        case 14:
            return `Username already exists`;
        case 520:
            return `The room is occupied. Please choose another room.`;
    }
}