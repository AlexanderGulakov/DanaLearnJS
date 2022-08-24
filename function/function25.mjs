//25 Розв’язати квадратне рівняння, задане коефіцієнтами, за допомогою підпрограми.  
// Знаходження дискримінанта оформити як окрему підпрограму.
// ax2+bx+c=0, де x - змінна, а a,b,c - коефіцієнти квадратного рівняння, причому a≠0 .

import { calcDiscriminant, calcQuadraticEquation } from "../helpers/mathFormulasFunctions.mjs";
let coefficientA = 1
let coefficientB = -6
let coefficientC = 9

let discriminant = calcDiscriminant(coefficientA, coefficientB, coefficientC)
console.log(`Discriminant = discriminant`)
calcQuadraticEquation(coefficientA, coefficientB, discriminant) // НАЗВА КВАДРАТНОГО РІВННЯННЯ АНГЛІЙСЬКОЮ МОВОЮ

 