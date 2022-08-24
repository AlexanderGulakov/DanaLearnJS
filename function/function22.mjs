//22 Створити підпрограми для знаходження n-го члена та суми перших n членів 
//арифметичної прогресії,  за відомими першим членом та різницею



import { getNMemberArithmeticProg, getSumNMembersArithmeticProg } from "../helpers/mathFormulasFunctions.mjs";
let firstMember = 2  // a1 перший член
let difference = 3   // dif різниця
let nMember = 3    // nmember - член
// let quantityNMembers = 5  // кількість перших n-членів //НЕ ЗРОЗУМІВ ЩО ЦЕ... КІЛЬКІСТЬ ЧЛЕНІВ = 10, ЩО ЦЕ ЗА ЗМІННА?
let findNMember = getNMemberArithmeticProg(firstMember, difference, nMember) //знаходження n-го члена
//  (a1, d, n) => a1 + d * (n - 1)  = 8
console.log(` N Member =  =  ${findNMember}`)
let sumNMembers = getSumNMembersArithmeticProg(firstMember, difference, nMember) // сумa перших n-членів 
console.log(` sum  =  ${sumNMembers}`)