//   Задача 13 . Обчислити значення виразу
// S = max {a, -b, 3} * max {a, 2b, c} – max {-a,b,7}   -4   5   7

const getMaxNumber = (a, b, c) => {
    let max = a     
    if (b > max) {
        max = b
    }
    if (c > max) {
        max = c
    }
    return max
}

let numberFirst = +prompt("Write the first number")
let numberSecond = +prompt("Write the second number")
let numberThird = +prompt("Write the third number")
let resultFirst = getMaxNumber(numberFirst, -numberSecond, 3)
let resultSecond = getMaxNumber(numberFirst, numberSecond * 2, numberThird)
let resultThird = getMaxNumber(-numberFirst, numberSecond, 7)
let calcExpression = resultFirst * resultSecond - resultThird
alert(`S = max {a, -b, 3} * max {a, 2b, c} – max {-a,b,7} = ${calcExpression}
max1 = ${resultFirst}
max2 = ${resultSecond} 
max3 = ${resultThird}`)



// const getMaxNumber = (a, b, c) => {
//     let maxFirst = a
//     if ((-b) > maxFirst) {
//         maxFirst = (-b)
//     }
//     else if (3 > maxFirst) {
//         maxFirst = 3
//     }
//     let maxSecond = a
//     if (2 * b > maxSecond) {
//         maxSecond = 2 * b
//     }
//     else if (c > maxSecond) {
//         maxSecond = c
//     }
//     let maxThird = (-a)
//     if (b > (-a)) {
//         maxThird = b
//     }
//     else if (7 > maxThird) {
//         maxThird = 7
//     }
//     return maxFirst * maxSecond - maxThird
// }