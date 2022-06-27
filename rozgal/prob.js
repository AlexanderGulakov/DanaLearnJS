// Задача 20. Гра в кості. Правила гри:
// 1) користувач може кинути кості не більше двох разів 
// (користувач сам вирішує чи робити, чи не робити другий кидок);
// 2) якщо випадає парне число, то кількість балів збільшується на це число;
// 3) якщо випадає непарне число, то кількість балів зменшується на це число;
// 4) виграє той, у кого кількість балів більша.

let firstPlayerPoint = Math.ceil(Math.random() * 6) // назва змінної
console.log('First Player', firstPlayerPoint)
alert(`Random number = ${firstPlayerPoint}`)

if (firstPlayerPoint % 2 != 0) {
    firstPlayerPoint = -firstPlayerPoint
    console.log('result = -  ', firstPlayerPoint)
}

alert(`First Player.Your result = ${firstPlayerPoint}`)
let secondTry = (confirm("Want to roll the cube one more time?"))
console.log('confirm second attempt', secondTry)

if (secondTry) {
    const firstPlayerSecondTry = Math.ceil(Math.random() * 6)
    alert(`Your random number  = ${firstPlayerSecondTry}`)
    console.log('2 try', firstPlayerSecondTry)
    if (firstPlayerSecondTry % 2 === 0) {
        firstPlayerPoint = firstPlayerPoint + firstPlayerSecondTry
        console.log('2 try result + = ', firstPlayerPoint) // навіщо дублювати консоль логи, якщо вони однакові?
    }
    else {
        firstPlayerPoint = firstPlayerPoint - firstPlayerSecondTry
        console.log('2 try result - = ', firstPlayerPoint) // навіщо дублювати консоль логи, якщо вони однакові?
    }
}
alert(`First Player.Your result = ${firstPlayerPoint}`)
console.log('not confirm  ', firstPlayerPoint) // not confirm ? взагалі-то це виконається в будь-якому разі

let secondPlayerPoint = Math.ceil(Math.random() * 6)
console.log('Second Player', secondPlayerPoint)
alert(`Random number = ${secondPlayerPoint}`)

if (secondPlayerPoint % 2 != 0) {
    secondPlayerPoint = -secondPlayerPoint
    console.log('result = +  ', secondPlayerPoint)
}
alert(`Second Player.Your result = ${secondPlayerPoint}`)
console.log('result = -  ', secondPlayerPoint)
secondTry = (confirm("Want to roll the cube one more time?"))
console.log('confirm second attempt', secondTry)

if (secondTry) {
    const secondPlayerSecondTry = Math.ceil(Math.random() * 6)
    alert(`Your random number  = ${secondPlayerSecondTry}`)
    console.log('2 try', secondPlayerSecondTry)
    if (secondPlayerSecondTry % 2 === 0) {
        secondPlayerPoint = secondPlayerPoint + secondPlayerSecondTry
        console.log('2 try result + = ', secondPlayerPoint) // навіщо дублювати консоль логи, якщо вони однакові?
    }
    else {
        secondPlayerPoint = secondPlayerPoint - secondPlayerSecondTry
        console.log('2 try result - = ', secondPlayerPoint) // навіщо дублювати консоль логи, якщо вони однакові?
    }
    alert(`Second Player.Your result = ${secondPlayerPoint}`)
}

if (firstPlayerPoint > secondPlayerPoint) { // подумати як покращити
    alert(`First Player Won `)
}
else if (firstPlayerPoint < secondPlayerPoint) {
    alert(`Second Player Won `)
}
else {
    alert(`You have a draw`)
}










// else {
//     alert(`Second Player.Your result = ${secondPlayerFirstTry}`)
//     console.log('not confirm  ', secondPlayerFirstTry)
// }

// if(firstPlayerFirstTry > secondPlayerFirstTry || firstPlayerFirstTry > secondPlayerResult ||
//     firstPlayerResult > secondPlayerFirstTry || firstPlayerResult > secondPlayerResult ){
//     alert(`First Player Won `)
// }
//  else if (firstPlayerFirstTry === secondPlayerFirstTry || firstPlayerFirstTry === secondPlayerResult ||
//     firstPlayerResult === secondPlayerFirstTry || firstPlayerResult === secondPlayerResult){
//     alert(`You have a draw`)
// }
// else {
//     alert(`Second Player Won `)
// }