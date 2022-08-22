// 23 Створити підпрограми для знаходження n-го члена та  суми перших n членів 
// геометричної прогресії,за відомими першим членом та знаменником


import { getNMemberGeometricProg, getSumNMembersGeometicProg } from "../helpers/mathFormulasFunctions.mjs";
let firstMember = 8    //b1 перший член
let denominator = 0.5  //q знаменнк
let nMember = 4       // n-член
let quantityNMembers = 5   // кількість перших n-членів
let findNMember = getNMemberGeometricProg(firstMember, denominator, nMember,) //знаходження n-го члена
console.log(` N Member =  =  ${findNMember}`)
let sumNMembers = getSumNMembersGeometicProg(firstMember, denominator, quantityNMembers) // сумa перших n-членів 
console.log(` sum  =  ${sumNMembers}`)




