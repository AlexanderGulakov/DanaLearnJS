// 24 Створити підпрограму для знаходження суми нескінченної спадної геометричної прогресії,
//  за відомими першим членом та знаменником. 
// Перевірку чи є задана геометрична прогресія спадною оформити як окрему підпрограму.

import { checkIsGeometricProgDescending, getSquareInfinitelyDescendingGeometricProg, } from "../helpers/mathFormulasFunctions.mjs";
let firstMember = 6    //b1 перший член
let denominator = 1 / 6  // знаменнк
// Перевірку чи є задана геометрична прогресія спадною оформити як окрему підпрограму.

let isGeometricProgDescending = checkIsGeometricProgDescending(denominator)
if (  )  {
    let sum = getSquareInfinitelyDescendingGeometricProg(firstMember, denominator) // СПОЧАТКУ ПЕРЕВІРКА ЧИ СПАДНА!!!!!
    console.log(` sum  =  ${sum}`)
}

 

