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
// Задача 18.2. Модифікувати попередню задачу таким чином, що кораблем керує користувач, а комп’ютер стріляє. 

let shipsPosition = parseInt(prompt(" Enter the position of the ship"))
console.log('ships position', shipsPosition)
const fieldLength = 5
const shiftShipPosition = 1
let shotAtShip = Math.ceil(Math.random() * fieldLength)
console.log('shot at ship', shotAtShip)
alert(`Random Number =  ${shotAtShip}`)

if (shotAtShip === shipsPosition) {
    alert(`The computer sank the ship.`) 
}
else {
    if (Math.abs(shotAtShip - shipsPosition) === shiftShipPosition) {
        alert("The ship is damaged.")
    }
    changeShipPosition = parseInt(prompt(" Enter the action that will move the ship one cell forward or backward + or -"))

    if (changeShipPosition = "+") {
        shipsPosition =  shipsPosition % fieldLength + shiftShipPosition 
        console.log('ships position + ', shipsPosition)
    }
    else {                                                    
        shipsPosition = shipsPosition - 1
        console.log('ships position - ', shipsPosition)
        if (shipsPosition < 1) {
            shipsPosition = fieldLength // ЧОГО НЕ ВИКОРИСТАТИ ЗМІННУ????????????
            console.log('ships position <1 ', shipsPosition)
        }
    }
    // if (shipsPosition > 5) { ця перевірка не потрібна, остача вирішить цю проблему
    //     shipsPosition = 1
    //     console.log('ships position >5 ', shipsPosition)
    // }
    // else if ( {   // це треба обраховувати в елсі
    //     shipsPosition = 5 
    //     console.log('ships position <1 ', shipsPosition)
    // }
    shotAtShip = Math.ceil(Math.random() * fieldLength) // ЧОГО НЕ ВИКОРИСТАТИ ЗМІННУ????????????
    alert(`Random Number =  ${shotAtShip}`)
    console.log('random number2 ', shotAtShip)

    if (shotAtShip === shipsPosition) {
        alert(`The computer sank the ship`) 
    }
    else if (Math.abs(shotAtShip - shipsPosition) === 1) {
        alert(`The ship is damaged.The computer won. `) 
    }
    else {
        alert(`The computer lost `) 
    }
}
