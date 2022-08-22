// 16 Задано координати вершин трикутника. Визначити чи є він прямокутним, 
// за допомогою підпрограми.  Якщо так – вивести довжину гіпотенузи.
// У прямокутному трикутнику квадрат гіпотенузи дорівнює сумі квадратів катетів 
// c2=a2+b2.

import { getLength, getPerimeter, getHypotenuse, getFirstLegs, getSecondLegs, getRightTriangle } from "../helpers/mathFormulasFunctions.mjs";
let coordinateAX = -3
let coordinateAY = 5
let coordinateBX = 4
let coordinateBY = 5
let coordinateCX = 4
let coordinateCY = -2
let sideLengthAB = getLength(coordinateAX, coordinateAY, coordinateBX, coordinateBY)    //довжина сторони АВ  7
console.log(`AB = ${sideLengthAB}`)
let sideLengthBC = getLength(coordinateBX, coordinateBY, coordinateCX, coordinateCY)    //довжина сторони ВС  7 
console.log(`BC = ${sideLengthBC}`)
let sideLengthCA = getLength(coordinateAX, coordinateAY, coordinateCX, coordinateCY)   //довжина сторони СА   9.89
console.log(`CA = ${sideLengthCA}`)
let perimeter = getPerimeter(sideLengthAB, sideLengthBC, sideLengthCA)
let hypotenuse = getHypotenuse(sideLengthAB, sideLengthBC, sideLengthCA)      // визначаємо гіпотенузу(найдовшу сторону)
let firstLegs = getFirstLegs(sideLengthAB, sideLengthBC, sideLengthCA)       // визначаємо найменше число( 1 катет)
let secondLegs = getSecondLegs(perimeter, firstLegs, hypotenuse)
getRightTriangle(firstLegs, secondLegs, hypotenuse)




// console.log(`hypotenuse = ${hypotenuse}`)




