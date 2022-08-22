// // 14.Задані координати вершин трикутника. 
// // Знайти його периметр та площу, за допомогою підпрограм.
import { getLength, getPerimeter, getSquare } from "../helpers/mathFormulasFunctions.mjs";

let coordinateAX = 2
let coordinateAY = 2
let coordinateBX = 3
let coordinateBY = 4
let coordinateCX = 1
let coordinateCY = 2
let lengthAB = getLength(coordinateAX, coordinateAY, coordinateBX, coordinateBY)
let lengthBC = getLength(coordinateBX, coordinateBY, coordinateCX, coordinateCY)
let lengthCA = getLength(coordinateAX, coordinateAY, coordinateCX, coordinateCY)
let perimeter = getPerimeter(lengthAB, lengthBC, lengthCA)
let square = getSquare(perimeter, lengthAB, lengthBC, lengthCA)
console.log(`Perimetr= ${perimeter.toFixed(2)} Square = ${square.toFixed(2)}`)


