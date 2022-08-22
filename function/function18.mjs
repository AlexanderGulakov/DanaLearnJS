// 18 Задані координати вершин чотирикутника в порядку обходу за годинниковою стрілкою 
// Знайти координати точки перетину його діагоналей, за допомогою підпрограми.


import { getCoordinateOfPoint  } from "../helpers/mathFormulasFunctions.mjs";
let coordinateAX = -1
let coordinateAY = -2
let coordinateBX = 2
let coordinateBY = -5
let coordinateCX = 1
let coordinateCY = -2
let coordinateDX = -2
let coordinateDY = 1

let coordinateACX =  getCoordinateOfPoint (coordinateAX,coordinateCX)
console.log(`coordinate AC x= ${coordinateACX}`)

let coordinateACY =  getCoordinateOfPoint (coordinateAY,coordinateCY)
console.log(`coordinate AC y= ${coordinateACY}`)