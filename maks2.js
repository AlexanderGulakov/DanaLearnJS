//15 Задані координати 3 точок. Визначити чи лежать вони на одній прямій, за допомогою підпрограми.
/*Ще один спосіб перевірити приналежність трьох точок прямий - порахуйте площу трикутника, який вони утворюють. 
Якщо всі точки лежать на прямій, то його площа дорівнює нулю. Будь ласка, вставте значення координат у формулу: 
S = 1/2 ((x1-х3) (у2-у3) - (х2-х3) (у1-у3)). 
Якщо після всіх обчислень ви отримали нуль - значить, три точки лежать на одній прямій.*/
import { calcTriangleSquare } from "./andrew";
const firstCoordinateX = parseInt(prompt('Enter coordinate "x1" to find out whether points are on the same line'));
const secondCoordinateX = parseInt(prompt('Enter coordinate "x2" to find out whether points are on the same line'));
const thirdCoordinateX = parseInt(prompt('Enter coordinate "x3" to find out whether points are on the same line'));

const firstCoordinateY = parseInt(prompt('Enter coordinate "y1" to find out whether points are on the same line'));
const secondCoordinateY = parseInt(prompt('Enter coordinate "y2" to find out whether points are on the same line'));
const thirdCoordinateY = parseInt(prompt('Enter coordinate "y3" to find out whether points are on the same line'));

const additionalVar = 0.5;

const calcOneLinePoints = (x1, x2, x3, y1, y2, y3, addVar) => {
    const square = calcTriangleSquare(...addVar.)
    const oneLinePointsFormula = addVar  ((x1 - x3)  (y2 - y3) - (x2 - x3) * (y1 - y3));
    return oneLinePointsFormula.toFixed(2);
}
const oneLinePointsCheck = calcOneLinePoints(firstCoordinateX, secondCoordinateX, thirdCoordinateX, firstCoordinateY, secondCoordinateY, thirdCoordinateY, additionalVar);
console.log(oneLinePointsCheck);

