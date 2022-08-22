// 20 Задані координати 3 точок. 
// // Визначити радіус описаного кола, за допомогою підпрограми.
// R = 2S / (a + b + c).


import { getLength, getPerimeter, getSquare, getRadiusCircle } from "../helpers/mathFormulasFunctions.mjs";
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
let radius = getRadiusCircle(lengthAB, lengthBC, lengthCA, square)
console.log(` The radius of the circle =  ${radius}`)
// R = 2S / (a + b + c).


