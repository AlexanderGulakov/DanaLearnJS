// 21 Задані координати точки на поверхні і центра кулі. 
// Знайти її об’єм і площу поверхні, за допомогою підпрограм.
// R = корінь з ((x2 - x1)кв + (Y2 - y1)кв + (Z2 - z1)кв)
// V= 4/3 * П(3.14) * (R)в 3ст
// S= 4 * П(3.14) * (R)вкв


import { getRadiusSphere, getVolumeSphere, getSquareSurface } from "../helpers/mathFormulasFunctions.mjs";
let coordinateAX = 4
let coordinateAY = -1
let coordinateAZ = 12
let coordinateBX = 3
let coordinateBY = 3
let coordinateBZ = 0
let numberPi = Math.PI
console.log(`numberP = ${numberPi}`)
let radiusSphere = getRadiusSphere(coordinateAX, coordinateAY, coordinateAZ, coordinateBX, coordinateBY, coordinateBZ)
let volumeSphere = getVolumeSphere(numberPi, radiusSphere) // 3.14 краще записати в змінну, в функції якісь незрозумілі цифри - краще ввести якісь змінні там і назвати їх, щоб зрозуміло було що то таке.
let squareSurface = getSquareSurface(numberPi, radiusSphere)
// console.log(` radius Sphere =  ${radiusSphere}`)
console.log(` The volume of the sphere =  ${volumeSphere}`)
console.log(` Surface area of a sphere =  ${squareSurface}`)
