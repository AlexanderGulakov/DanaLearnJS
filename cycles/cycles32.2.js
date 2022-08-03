// 32. Тир. На полі з 10 клітинок розміщують зайця. 
// За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку.
//  З клавіатури вводиться позиція пострілу.
//  Гра продовжується поки  у користувача не закінчаться патрони 
//  (кількість вводиться з клавіатури) або не буде влучання. 
//  Спробуйте відоразити гру графічно.



let rabbitPosition = Math.ceil(Math.random() * 10)                 //розміщення зайця               
console.log('rabbit position', rabbitPosition)
let shotPosition;
const fieldLength = 10
let shiftRabbitPosition;
let quantityPatron = +prompt(" Write the quantity of patron.")  // кількість патронів              
console.log('quantity patron prompt ', quantityPatron)


do {
    shotPosition = +prompt(" Write the position of the shot.From 1 to 10")    // позиція пострілу    
    console.log('shot', shotPosition)
    quantityPatron--                                                        // кількість патронів     
    console.log('quantityPatron', quantityPatron)
    if (quantityPatron === 0) {
        alert(`You lost. quantity of patron = 0`)
        break;
    }
    if (shotPosition === rabbitPosition) {
        alert(`You won`)
        break;
    }
    shiftRabbitPosition = Math.floor(Math.random() * (3 - (-3))) + (-3);    //стрибок зайця                
    // return Math.floor(Math.random() * (max - min)) + min;
    console.log('rabbit position shift', shiftRabbitPosition)
    rabbitPosition = rabbitPosition % fieldLength + shiftRabbitPosition                                  //                 
    console.log('rabbit position %', rabbitPosition)
 
    
}
while (true)
// (shotPosition !== rabbitPosition)
// alert(`You won`)







// let rabbitPosition = Math.ceil(Math.random() * 10)                 //розміщення зайця
// console.log('rabbit position', rabbitPosition)
// let shotPosition;
// let quantityPatron = +prompt(" Write the quantity of patron.")  // кількість патронів
// console.log('quantity patron', quantityPatron)


// do {
//     shotPosition = +prompt(" Write the position of the shot.From 1 to 10")    // позиція пострілу
//     quantityPatron --                                                        // кількість патронів
//     console.log('quantityPatron', quantityPatron)
//     if (quantityPatron === 0) {
//         alert(`You lost. quantity of patron = 0`)
//         break;
//     }

//     rabbitPosition = Math.floor(Math.random() * ((rabbitPosition + 3) - (rabbitPosition - 3))) + (rabbitPosition - 3);    //стрибок зайця
//     // return Math.floor(Math.random() * (max - min)) + min;
//     console.log('rabbit position', rabbitPosition)
//     rabbitPosition = rabbitPosition % 10 +
//     console.log('rabbit position %', rabbitPosition)

// }
// while (shotPosition !== rabbitPosition)
// alert(`You won`)