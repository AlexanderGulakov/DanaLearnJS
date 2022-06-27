if (usersNumber > 0) {
    if (smallestPositiveNumber === null)
        smallestPositiveNumber = +usersNumber
    else if (usersNumber < smallestPositiveNumber)
        smallestPositiveNumber = +usersNumber
}


if (usersNumber > 0) {
    if (smallestPositiveNumber === null) {
        smallestPositiveNumber = +usersNumber; // 8. найменше з додатних
        console.log("small", smallestPositiveNumber);
    };
    if (smallestPositiveNumber < usersNumber) {
        // 8. найменше з додатних
        console.log("smallest", smallestPositiveNumber);
    } else {
        smallestPositiveNumber = +usersNumber;
        console.log("smallestE", smallestPositiveNumber);
    };
}