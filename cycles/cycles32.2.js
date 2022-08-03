// 32. Тир. На полі з 10 клітинок розміщують зайця. 
// За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку.
//  З клавіатури вводиться позиція пострілу.
//  Гра продовжується поки  у користувача не закінчаться патрони 
//  (кількість вводиться з клавіатури) або не буде влучання. 
//  Спробуйте відоразити гру графічно.



let rabbitPosition = Math.floor(Math.random() * (10 - 1)) + 1;     //розміщення зайця     5     
// return Math.floor(Math.random() * (max - min)) + min;
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
    shiftRabbitPosition = Math.floor(Math.random() * (3 - (-3))) + (-3);    //стрибок зайця  на   +2    +3     +2    -3
    // return Math.floor(Math.random() * (max - min)) + min;
    console.log('rabbit position shift', shiftRabbitPosition)

    if ((rabbitPosition + shiftRabbitPosition) < 1) {                                 // 2 - (-3)= -1<1           
        rabbitPosition = (rabbitPosition + fieldLength) + shiftRabbitPosition        //2 + 10= 12 + (- 3) = 9
        console.log('rabbit position <1', rabbitPosition)
    }
    else if ((rabbitPosition + shiftRabbitPosition) > 10) {                          // 10+2=12     
        rabbitPosition = (rabbitPosition + shiftRabbitPosition) % fieldLength       // 10+2= 12% 10 = 2
        console.log('rabbit position >10', rabbitPosition)
    }
    else {
        rabbitPosition = rabbitPosition + shiftRabbitPosition                      // 5 +2 = 7   7+3 = 10
        console.log('rabbit position ', rabbitPosition)
    }

}
while (true)
// (shotPosition !== rabbitPosition)
// alert(`You won`)


