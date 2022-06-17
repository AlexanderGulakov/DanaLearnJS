// Задача 17. Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді. 
// Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.


const randomNumberOfComp = Math.ceil(Math.random() * 10); 6
const firstPlayerQuessNumber = parseInt(prompt("1) Guess the number")); 5
const secondPlayerQuessNumber = parseInt(prompt("2) Guess the number")); 7

if ((randomNumberOfComp - firstPlayerQuessNumber)  > (randomNumberOfComp - secondPlayerQuessNumber) ||
(secondPlayerQuessNumber === randomNumberOfComp)) {
    alert(`The second player won. Random Number =  ${randomNumberOfComp}`)
 
}
else {
    alert (`The first player won. Random Number =  ${randomNumberOfComp}`)

}

 