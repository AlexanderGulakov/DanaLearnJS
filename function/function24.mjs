// 24 Створити підпрограму для знаходження суми нескінченної спадної геометричної прогресії,
//  за відомими першим членом та знаменником. 
// Перевірку чи є задана геометрична прогресія спадною оформити як окрему підпрограму.

import {getSquareInfinitelyDescendingGeometricProg   } from "../helpers/mathFormulasFunctions.mjs";
let firstMember = 6    //b1 перший член
let denominator = 1/6  //q знаменнк
let findSum = getSquareInfinitelyDescendingGeometricProg(firstMember,denominator)
console.log(` sum  =  ${findSum}`)
