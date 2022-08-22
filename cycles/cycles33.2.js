// 33. Танчики. На полі з 10 клітинок розміщують танк. 
// За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). 
// При влучанні броня танка пошкоджується на 30 балів (всього 100).
// Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання. 
// Спробуйте відоразити гру графічно.
// 34.Спробуйте модифікувати попередню гру для випадку, коли танк також може стріляти по вашій гарматі 
// (ваша гармата також знаходиться на цьому ж полі).


let shotAtTank;
let tankArmor = 30                                                          //| броня танка
let shotDamage = 30                                                          //| урон від пострілу
const fieldLength = 10
let shiftTankPosition;
let tankShotAtGun;
let tankPosition = Math.floor(Math.random() * (10 - 1)) + 1;                  //| розміщення танку на полі    
// return Math.floor(Math.random() * (max - min)) + min;
console.log('tank position', tankPosition)
let gunPosition;
console.log('gunPosition', gunPosition)
do {
    gunPosition = Math.floor(Math.random() * (10 - 1)) + 1;                   //| розміщення гармати на полі    
    console.log('gunPosition', gunPosition)
}
while (gunPosition === tankPosition)
console.log('while', gunPosition)

let quantityPatron = +prompt(" Write the quantity of patron.")                //| кількість патронів                    
console.log('quantity patron prompt ', quantityPatron)

do {
    shotAtTank = +prompt(` Write the position of the shot.From 1 to 10. The quantity try = ${quantityPatron}`)      //| постріл       
    console.log('shot at tank', shotAtTank)
    quantityPatron--                                                          //| кількість патронів     
    console.log('quantityPatron', quantityPatron)
    if (shotAtTank === tankPosition) {
        tankArmor = tankArmor - shotDamage                                    
        console.log('tank Armor ', tankArmor)
        if (tankArmor <= 0) {
            alert(`You won`)
            break;
        }
    }
    else if (quantityPatron === 0) {
        alert(`You lost. quantity of patron = 0`)
        break;
    }

    tankShotAtGun = Math.floor(Math.random() * (10 - 1)) + 1;                  //| танк стріляє по гарматі  
    console.log('tank Shot At Gun', tankShotAtGun)
    if (tankShotAtGun === gunPosition) {
        alert(`You lost. Your qun is destroyed.`)
        break;
    }
    shiftTankPosition = Math.round(Math.random() * (1 - (-1))) + (-1);       //| переміщення танка на  
    // return Math.floor(Math.random() * (max - min)) + min;
    console.log('tank position shift', shiftTankPosition)

    if ((tankPosition + shiftTankPosition) < 1) {                           //|         
        tankPosition = (tankPosition + fieldLength) + shiftTankPosition     //|
        console.log('tank position <1', tankPosition)
    }
    else if ((tankPosition + shiftTankPosition) > 10) {                     //|   
        tankPosition = 1                                                    //|  
        console.log('tank position >10', tankPosition)
    }
    else {
        tankPosition = tankPosition + shiftTankPosition                    //|  
        console.log('tank position ', tankPosition)
    }

}
while (true)