//15. Задані координати 3 точок. 
// Визначити чи лежать вони на одній прямій, за допомогою підпрограми.
// Підставте значення координат у формулу: S = 1/2 ((х1-х3) (у2-у3) — (х2-х3) (у1-у3)). 
// Якщо після всіх обчислень ви отримали нуль 
// — значить, три точки лежать на одній прямій.


import { getSquareFromPoints } from "../helpers/mathFormulasFunctions.mjs";
let coordinateAX = -3
let coordinateAY = 1
let coordinateBX = -2
let coordinateBY = 2
let coordinateCX = -1
let coordinateCY = 3
let square = getSquareFromPoints(coordinateAX, coordinateAY, coordinateBX, coordinateBY, coordinateCX, coordinateCY)
if (square === 0) {
    console.log(`The points lie on the same straight line`)
}
else {
    console.log(`The points do not lie on the same line`)
}
console.log(`square= ${square}`)