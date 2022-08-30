// 24 Створити підпрограму для знаходження суми нескінченної спадної геометричної прогресії,
//  за відомими першим членом та знаменником. 
// Перевірку чи є задана геометрична прогресія спадною оформити як окрему підпрограму.

import { checkIsDescendingGeometricProg, getSquareDescendingGeometricProg, } from "../helpers/mathFormulasFunctions.mjs";
let firstMember = 6    //b1 перший член
let denominator = 1 / 6  // знаменнк
// Перевірку чи є задана геометрична прогресія спадною оформити як окрему підпрограму.

let descendingGeometricProg = checkIsDescendingGeometricProg(denominator)
if (descendingGeometricProg) {
    let sum = getSquareDescendingGeometricProg(firstMember, denominator)
    console.log(` sum = ${sum}`)
}
else {
    console.log(`The specified geometric progression is don't descending `)
}





