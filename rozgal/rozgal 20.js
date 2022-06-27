 // Задача 20. Гра в кості. Правила гри:
// 1) користувач може кинути кості не більше двох разів 
// (користувач сам вирішує чи робити, чи не робити другий кидок);
// 2) якщо випадає парне число, то кількість балів збільшується на це число;
// 3) якщо випадає непарне число, то кількість балів зменшується на це число;
// 4) виграє той, у кого кількість балів більша.

let firstPlayerThrow = Math.ceil(Math.random() * 6) // назва змінної
console.log('First Player', firstPlayerThrow)
alert(`Random number = ${firstPlayerThrow}`)

if (firstPlayerThrow % 2 === 0 ) { // забрати зайве
    alert(`First Player.Your result = ${firstPlayerThrow}`)                  
    console.log('result = +  ', firstPlayerThrow)
}
else {
    firstPlayerThrow = -firstPlayerThrow
    alert(`First Player.Your result = ${firstPlayerThrow}`)
    console.log('result = -  ', firstPlayerThrow)
}

let secondTry = (confirm("Want to roll the cube one more time?"))
console.log('confirm second attempt', secondTry)
// let firstPlayerResult

if (secondTry) {
    const firstPlayerSecondTry = Math.ceil(Math.random() * 6)
    alert(`Your random number  = ${firstPlayerSecondTry}`)
    console.log('2 try', firstPlayerSecondTry)
    if (firstPlayerSecondTry  % 2 === 0) {
        firstPlayerThrow = firstPlayerThrow + firstPlayerSecondTry
        alert(`First Player.Your result = ${firstPlayerThrow}`) // можна спростити виведення
        console.log('2 try result + = ', firstPlayerThrow)
    }
    else {
        firstPlayerThrow = firstPlayerThrow - firstPlayerSecondTry
        alert(`First Player.Your result = ${firstPlayerThrow}`)
        console.log('2 try result - = ', firstPlayerThrow)
    }
}
else {
    alert(`First Player.Your result = ${firstPlayerThrow}`)
    console.log('not confirm  ', firstPlayerThrow)
}

let secondPlayerThrow = Math.ceil(Math.random() * 6)
console.log('Second Player', secondPlayerThrow)
alert(`Random number = ${secondPlayerThrow}`)

if (secondPlayerThrow  % 2 === 0) {
    alert(`Second Player.Your result = ${secondPlayerThrow}`)
    console.log('result = +  ', secondPlayerThrow)
}
else {
    secondPlayerThrow = -secondPlayerThrow
    alert(`Second Player.Your result = ${secondPlayerThrow}`)
    console.log('result = -  ', secondPlayerThrow)
}

secondTry = (confirm("Want to roll the cube one more time?"))
console.log('confirm second attempt', secondTry)
// let secondPlayerResult
if (secondTry) {
    const secondPlayerSecondTry = Math.ceil(Math.random() * 6)
    alert(`Your random number  = ${secondPlayerSecondTry}`)
    console.log('2 try', secondPlayerSecondTry)
    if (secondPlayerSecondTry % 2 === 0) {
        secondPlayerThrow = secondPlayerThrow + secondPlayerSecondTry
        alert(`Second Player.Your result = ${secondPlayerThrow}`)
        console.log('2 try result + = ', secondPlayerThrow)
    }
    else {
        secondPlayerThrow = secondPlayerThrow - secondPlayerSecondTry
        alert(`Second Player.Your result = ${secondPlayerThrow}`)
        console.log('2 try result - = ', secondPlayerThrow)
    }
}


if( firstPlayerThrow > secondPlayerThrow ){ // подумати як покращити
    alert(`First Player Won `)
}
 else if ( firstPlayerThrow === secondPlayerThrow ){
    alert(`You have a draw`)
}
else {
    alert(`Second Player Won `)
}













































// if (firstPlayerSecondTry === 2 || firstPlayerSecondTry === 4 || firstPlayerSecondTry === 6) {
//     firstPlayerResult = firstPlayerFirstTry + firstPlayerSecondTry
//     alert(`Your result = ${firstPlayerResult}`)
//     console.log('2 try result + = ', firstPlayerResult)
// }
// else if (firstPlayerSecondTry === 1 || firstPlayerSecondTry === 3 || firstPlayerSecondTry === 5) {
//     firstPlayerResult = firstPlayerFirstTry - firstPlayerSecondTry
//     alert(`Your result = ${firstPlayerResult}`)
//     console.log('2 try result - = ', firstPlayerResult)
// }