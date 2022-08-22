// 17 Задані координати вершин чотирикутника в порядку обходу за годинниковою стрілкою.
//  Визначити чи він є прямокутником, за допомогою підпрограми. 
//  Якщо так  знайти його площу.

import { getLength, getQuadrangleSquare } from "../helpers/mathFormulasFunctions.mjs";
let coordinateAX = -2
let coordinateAY = 1
let coordinateBX = 1
let coordinateBY = 4
let coordinateCX = 5
let coordinateCY = 0
let coordinateDX = 2
let coordinateDY = -3
let sideLengthAB = getLength(coordinateAX, coordinateAY, coordinateBX, coordinateBY) // назви сторін і діагоналей уточнити
console.log(`AB = ${sideLengthAB}`)
let sideLengthBC = getLength(coordinateBX, coordinateBY, coordinateCX, coordinateCY)
console.log(`BC = ${sideLengthBC}`)
let sideLengthCD = getLength(coordinateCX, coordinateCY, coordinateDX, coordinateDY)
console.log(`CD = ${sideLengthCD}`)
let sideLengthDA = getLength(coordinateDX, coordinateDY, coordinateAX, coordinateAY)
console.log(`DA = ${sideLengthDA}`)
let diagonalLengthAC = getLength(coordinateAX, coordinateAY, coordinateCX, coordinateCY)
console.log(`d AC = ${diagonalLengthAC}`)
let diagonalLengthBD = getLength(coordinateBX, coordinateBY, coordinateDX, coordinateDY)
console.log(`d BD = ${diagonalLengthBD}`)
const quadrangleSquare = getQuadrangleSquare(sideLengthAB, sideLengthBC) // getQuadrangleSquare
if (diagonalLengthAC === diagonalLengthBD) {
    console.log(`A quadrilateral is a rectangle.S = ${quadrangleSquare}`)
}
else {
    console.log(`A quadrilateral is not a rectangle.`)
}

