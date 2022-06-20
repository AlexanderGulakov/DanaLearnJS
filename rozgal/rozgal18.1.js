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
    let secondshipsPosition = Math.random() 
    if(secondshipsPosition > 0 && secondshipsPosition < 0.50) {
        shipsPosition = shipsPosition + Math.ceil(secondshipsPosition)
    console.log('ships position+', shipsPosition);
    }
     else if (secondshipsPosition > 0.50 && secondshipsPosition<  1)
    {
      shipsPosition = shipsPosition - Math.ceil(secondshipsPosition)
      console.log('ships position-', shipsPosition);
    }
      if (shipsPosition > 5) {
        shipsPosition =1
        console.log('ships position3', shipsPosition);
    }
    else if (shipsPosition < 1) {
        shipsPosition = 5
        console.log('ships position3', shipsPosition);
    }
    }
    if (shotAtShip === shipsPosition) {
        alert(`Well done. You sank the ship. You win. Random Number =  ${shipsPosition}`)
    }
    else if (Math.abs(shotAtShip - shipsPosition) === 1) {
        alert(`The ship is damaged. You win. Random Number =  ${shipsPosition}`)
    }
    else {
        alert(`You lost.Random Number = ${shipsPosition} `)
    }


// / 
// const shipsPosition = Math.ceil(Math.random() * 5);
// let shotAtShip = parseInt(prompt(" Enter the square number"));

// if (shotAtShip === shipsPosition) {
//     alert(`Well done. You sank the ship. You win. Random Number =  ${shipsPosition}`)
// // }
// else {
//     if (Math.abs(shotAtShip - shipsPosition) === 1) {
//         alert("The ship is damaged.") 
//     }
//     shotAtShip = parseInt(prompt("Try again. Enter the square number"))
    
//     if (shotAtShip === shipsPosition) {
//         alert(`Well done. You sank the ship. You win. Random Number =  ${shipsPosition}`)
//     }
//     else {
//             alert(`You lost.Random Number = ${ shipsPosition } `)
//     }
// }

// Math.floor(Math.random() * (max - min)) + min;
    // shipsPosition = (5 + shipsPosition ) % 5 + 1