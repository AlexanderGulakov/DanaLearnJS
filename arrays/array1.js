// Задача 1. Дано послідовність платіжок протягом року. 
// Знайти сумарну кількість грошей за:
//     8) у першій половині року;
//     9) у другій половині року;
//     10) за літо;
//     11) за ІІ квартал.

let paymants = [100, 210, 300, 23, 45, 233, 200, 110, 70, 20, 40, 230]
let firstYearHalf = paymants.length / 2   //(100, 210, 300, 23, 45, 233,)
let sumFirstYearHalf = 0
let sumSecondYearHalf = 0
let sumSummer = 0
let sumSecondQuarter = 0

for (let i = 0; i < paymants.length; i++) {   // i < 12
    if (i < 6) {
        sumFirstYearHalf += paymants[i]
        // console.log(`sumFirstYearHalf = ${sumFirstYearHalf}`)
    }
    if (i > 5) {
        sumSecondYearHalf += paymants[i]
        // console.log(`sumSecondYearHalf = ${sumSecondYearHalf}`)
    }
    if (i > 4 && i <= 7) {
        sumSummer += paymants[i]
        // console.log(`sumSummer = ${sumSummer}`)
    }
    if (i > 2 && i <= 5) {
        sumSecondQuarter += paymants[i]
        //  console.log(`sumSecondQuarter = ${sumSecondQuarter}`)
    }
}

alert(`Summ per first half of year = ${sumFirstYearHalf}`)  //у першій половині року
alert(`Summ per second half of year = ${sumSecondYearHalf}`)  //у другій половині року
alert(`Summ per summer = ${sumSummer}`)  //за літо
alert(`Summ per second quarter = ${sumSecondQuarter}`) //за ІІ квартал















// let firstYearHalf = paymants.length / 2
// let sumFirstYearHalf = 0
// for (let i = 0; i < firstYearHalf; i++) {
//     sumFirstYearHalf += paymants[i]
// }
// alert(`Summ per first half of year = ${sumFirstYearHalf}`)  //у першій половині року;

// let sumSecondHalfOfYear = 0
// for (var i = firstYearHalf; i < paymants.length; i++) {
//     sumSecondHalfOfYear += paymants[i];
// }
// alert(`Summ per second half of year = ${sumSecondHalfOfYear}`)  //у другій половині року;

// let sumSummer = 0
// for (let i = 5; i <= 7; i++) {
//     sumSummer += paymants[i]
// }
// alert(`Summ per summer = = ${sumSummer}`)  //за літо;
// let sumKv2 = 0
// for (var i = 3; i <= 5; i++) {
//     sumKv2 += paymants[i];
// }
// alert("Summ per Kv2 =" + sumKv2) //за ІІ квартал.

