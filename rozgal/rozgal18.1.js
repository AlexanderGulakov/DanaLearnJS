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
    let changeShipPosition = Math.random()
    
    if (changeShipPosition > 0 && changeShipPosition < 0.50) { // а нащо тут більше 0 ? )
        shipsPosition = shipsPosition + Math.ceil(changeShipPosition)  // зміщення вправо можна зробити з остачею від ділення і тоді не треба буде 
                                                                       //додаткових перевірок, навіщо Math.ceil(changeShipPosition)
        console.log('ships position+', shipsPosition);
    }
    else if (changeShipPosition > 0.50 && changeShipPosition < 1) { // що буде, якщо буде 0.5 або 1 . І взагалі нащо тут елс іф, якщо можна просто елс
        shipsPosition = shipsPosition - Math.ceil(changeShipPosition) // навіщо Math.ceil(changeShipPosition)
        console.log('ships position-', shipsPosition);
    }
    
    // if (shipsPosition > 5) {         це не треба буде якщо буде остача на рух вправо
    //     shipsPosition = 1
    //     console.log('ships position3', shipsPosition);
    // }

    if (shipsPosition < 1) { // цю перевірку можна робити в else при визначенні нової позиції
        shipsPosition = 5
        console.log('ships position3', shipsPosition);
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
}






// Math.floor(Math.random() * (max - min)) + min;
    // shipsPosition = (5 + shipsPosition ) % 5 + 1