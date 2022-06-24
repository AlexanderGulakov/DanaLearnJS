// Задача 19. Полювання. Заєць знаходиться у верхньому лівому кутку поля. Поле складається з двох рядків і двох стовпців.

// За один крок заєць може стрибнути у будь-яку із вільних клітинок. 
// Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. 
// Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. 
// Якщо користувач зловить зайця за другою спробою, то одержує 50 балів.
// Задача 19.1. Модифікувати попередню задачу вказуючи початкову позицію зайця випадковим чином
//  а також можливістю переміщення зайця після пострілу.



let firstRabbitRowPosition = Math.ceil(Math.random() * 2)
console.log('Row Position', firstRabbitRowPosition)
let firstRabbitColumnPosition = Math.ceil(Math.random() * 2)
console.log('Column Position', firstRabbitColumnPosition)
// alert(` Random Number Row =  ${firstRabbitRowPosition} and Random Number Column = ${rabbitColumnPosition}`)

let trapRow = parseInt(prompt("Trap for a rabbit. Enter a row number. From 1 to 2 "))
let trapColumn = parseInt(prompt("Trap for a rabbit. Enter a column number. From 1 to 2 "))

if (firstRabbitRowPosition === trapRow && firstRabbitColumnPosition === trapColumn) {
    alert("You caught a hare. You won 100 points.")
}

else {
    // if (firstRabbitRowPosition != trapRow || firstRabbitColumnPosition != trapColumn) { // ДЕ В УМОВІ ТАКЕ НАПИСАНО, ЩО ЦЕ ТРЕБА РОБИТИ?
    //     alert("Please try again.")
    // }
    let secondRabbitRowPosition = Math.ceil(Math.random() * 2)
    console.log('Row Position2', secondRabbitRowPosition)
    let secondRabbitColumnPosition = Math.ceil(Math.random() * 2)
    console.log('Column Position2', secondRabbitColumnPosition)

    if (secondRabbitRowPosition === firstRabbitRowPosition && secondRabbitColumnPosition === firstRabbitColumnPosition) {
        secondRabbitRowPosition = firstRabbitRowPosition % 2 + 1
    }

    // if (secondRabbitRowPosition === firstRabbitRowPosition) {   // ЯКЩО БУЛО 1.1(РЯДОК.КОЛОНКА) А СТАЛО 1.2 ТО ПЕРЕМІСТИТИ В 2.2? НАВІЩО )))
    //     secondRabbitRowPosition = firstRabbitRowPosition % 2 + 1
    //     console.log('shiftRow', secondRabbitRowPosition)
    // }
    // if (secondRabbitColumnPosition === firstRabbitColumnPosition) { // ЯКЩО БУЛО 1.1 А СТАЛО 2.1 ТО ПЕРЕМІСТИТИ В 2.2? НАВІЩО )))
    //     secondRabbitColumnPosition = firstRabbitColumnPosition % 2 + 1
    //     console.log('shiftColumn', secondRabbitColumnPosition)
    if (secondRabbitRowPosition === trapRow && secondRabbitColumnPosition === trapColumn) {
        alert("You caught a hare. You won 50 points.")

    }
    else {
        alert("You lost")
    }

}

