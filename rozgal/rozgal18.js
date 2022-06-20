// Задача 18. Морський бій. 
// Ворожий корабель, може знаходитись в одному із квадратів 
// (кількість квадратів вводиться з клавіатури), які розташовані лінійно (один за одним) на річці. 


// Позиція корабля визначається комп’ютером випадковим чином.
// Гра відбувається за правилами: 
// 1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), то корабель потоплено;
// 2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться корабель, 
// то корабель пошкоджено (про це повідомляємо користувача).
// За два постріли спробувати потопити корабель.

const shipsPosition = Math.ceil(Math.random() * 5);   
let shotAtShip = parseInt(prompt(" Enter the square number")); 
if (shotAtShip === shipsPosition) {
    alert(`Well done. You sank the ship. You win. Random Number =  ${shipsPosition}`)
}

else if( Math.abs(shotAtShip - shipsPosition) === 1 ){
    shotAtShip = parseInt(prompt("The ship is damaged. Try again. Enter the square number"))
    if (shotAtShip === shipsPosition) {
        alert(`Well done. You sank the ship. You win. Random Number = ${shipsPosition} `)
    }
    
    else if (shotAtShip != shipsPosition) {
        alert(`You lost. Random Number =  ${shipsPosition}`)
    }
}

else {
    alert(`You lost. Random Number =  ${shipsPosition}`)
}




// ((shotAtShip - 1) === shipsPosition ||
// //     (shotAtShip + 1) === shipsPosition)

// Math.abs(shotAtShip -shipsPosition)===1
    
 