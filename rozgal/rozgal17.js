// Задача 17. Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді. 
// Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.


const randomNumberOfComp = Math.ceil(Math.random() * 10);
const firstPlayerGuessNumber = parseInt(prompt("1) Guess the number"));
const secondPlayerGuessNumber = parseInt(prompt("2) Guess the number"));

if (firstPlayerGuessNumber === secondPlayerGuessNumber) {
    alert(`You have a draw. Random Number =  ${randomNumberOfComp}`)
}

else if (Math.abs(randomNumberOfComp - firstPlayerGuessNumber) > Math.abs(randomNumberOfComp - secondPlayerGuessNumber)
    || (secondPlayerGuessNumber === randomNumberOfComp)) {
    alert(`The second player won. Random Number =  ${randomNumberOfComp}`)
}

else {
    alert(`The first player won. Random Number =  ${randomNumberOfComp}`)
}

