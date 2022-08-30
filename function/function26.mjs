// 26  Відома відсоткова ставка по депозиту.
//  Скласти підпрограму для визначення суми, 
//  що отримає користувач через n років, в залежності від суми вкладу.
//   Відсотки нараховуються щомісяця на всю суму на рахунку, 
//   в тому числі і на раніше нараховані відсотки.

import { getSumAfterNYears } from "../helpers/mathFormulasFunctions.mjs";

let depositPercentRate = 20
let money = 1000
let depositLengthYears = 7
let monthInOneYear = 12

let monthesQuantity = depositLengthYears * monthInOneYear  // = 24 переводимо роки в місяці
let percentsPerMonth = depositPercentRate / monthInOneYear // =0.5 визначаємо скільки буде нараховуватись відсотків за 1 місяць

let totalSum = getSumAfterNYears(money, monthesQuantity, percentsPerMonth) // НОРМАЛЬНЕ ЧИСЛО БУДЬ ЛАСКА
console.log(`Sum = ${totalSum.toFixed(2)}`)

 



