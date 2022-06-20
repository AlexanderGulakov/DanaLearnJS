// Задача 18. Морський бій. Ворожий корабель, може знаходитись в одному із квадратів 
// (кількість квадратів вводиться з клавіатури), які розташовані лінійно (один за одним) на річці. 
// Позиція корабля визначається комп’ютером випадковим чином.
// Гра відбувається за правилами: 
// 1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), то корабель потоплено;
// 2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться корабель, то корабель пошкоджено 
// (про це повідомляємо користувача).
// За два постріли спробувати потопити корабель.

// Задача 18.1. Модифікувати попередню задачу з можливістю після пострілу переміщення корабля у випадковим чином вибрану сусідню клітинку 
// (якщо звичайно корабель не було потоплено за першим разом).


let shipsPosition = Math.ceil(Math.random() * 5);
console.log('ships position', shipsPosition);
const fieldLength = 5;
let shotAtShip = parseInt(prompt(" Enter the square number"));

if (shotAtShip === shipsPosition) {
    alert(`Well done. You sank the ship. You win. Random Number =  ${shipsPosition}`)
}
else {
    if (Math.abs(shotAtShip - shipsPosition) === 1) {
        alert("The ship is damaged.")
    }
    shotAtShip = parseInt(prompt(`Try again. Enter the square number`))
    shipsPosition = Math.floor(Math.random() * (1 - (-1))) + 1
    console.log('ships position', shipsPosition);

    if (shipsPosition ) {
        shipsPosition = (fieldLength + shipsPosition) % fieldLength + 1
        console.log('ships position', shipsPosition);
    }
     else if (shipsPosition < 1) {
        shipsPosition = fieldLength
        console.log('ships position', shipsPosition);
    }
    // if else {
    //     shipsPosition = shipsPosition - 1;
    //     console.log('ships position', shipsPosition);
    }
    // Math.floor(Math.random() * (max - min)) + min;
    // shipsPosition = (5 + shipsPosition ) % 5 + 1
    if (shotAtShip === shipsPosition) {
        alert(`Well done. You sank the ship. You win. Random Number =  ${shipsPosition}`)
    }
    else if (Math.abs(shotAtShip - shipsPosition) === 1) {
        alert(`The ship is damaged. You win. Random Number =  ${shipsPosition}`)
    }
    else {
        alert(`You lost.Random Number = ${shipsPosition} `)
    }
}









// // // return Math.floor(Math.random() * (max - min)) + min;
// else if (Math.abs(shotAtShip - shipsPosition) === 1) {
//     shipsPosition = Math.floor(Math.random() * (1 - (-1))) + 1;
//     shotAtShip = parseInt(prompt("The ship is damaged. Try again. Enter the square number"))

//     if (shotAtShip === shipsPosition) {
//         alert(`Well done. You sank the ship. You win. Random Number = ${shipsPosition} `)
//     }
//     if (shotAtShip != shipsPosition) {
//         shotAtShip = parseInt(prompt("  Try again. Enter the square number"))
//     }

//     if ((Math.abs(shotAtShip - shipsPosition) === 1)) {
//         alert(`Well done. You sank the ship. You win. Random Number = ${shipsPosition} `)
//     }
//     else if (shotAtShip != shipsPosition) {
//         alert(`You lost. Random Number =  ${shipsPosition}`)
//     }
// }







