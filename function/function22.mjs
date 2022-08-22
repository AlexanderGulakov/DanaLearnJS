//22 Створити підпрограми для знаходження n-го члена та суми перших n членів 
//арифметичної прогресії,  за відомими першим членом та різницею



import { getNMemberArithmeticProg, getSumNMembersArithmeticProg } from "../helpers/mathFormulasFunctions.mjs";
let firstMember = 0  // a1 перший член
let difference = 2   // d різниця
let nMember = 10    // n-член
let quantityNMembers = 5  // кількість перших n-членів
let findNMember = getNMemberArithmeticProg(firstMember, difference, nMember) //знаходження n-го члена
//  (a1, d, n) => a1 + d * (n - 1)  = 18
console.log(` N Member =  =  ${findNMember}`)
let sumNMembers = getSumNMembersArithmeticProg(firstMember, difference, quantityNMembers) // сумa перших n-членів 
console.log(` sum  =  ${sumNMembers}`)