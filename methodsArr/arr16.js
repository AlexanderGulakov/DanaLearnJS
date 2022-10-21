// 16. Дано одновимірний масив. Кожен елемент
// 1)піднести до квадрату;
// 2)помножити на 7;
// 3)поділити на 10.
// Використати функції.


const arrayOfNumbers = [50, 20, 30, 45, 56, 60, 25]

const numbersSquared = arrayOfNumbers.map((currentValue) => Math.pow(currentValue, 2)) // 1)піднести до квадрату;

const numberSeven = 7
const numbersMultipliedOnSeven = arrayOfNumbers.map((currentValue) => currentValue * numberSeven) // 2)помножити на 7;

const numberTen = 10
const nnmbersDividedByTen = arrayOfNumbers.map((currentValue) => currentValue / numberTen) // 3)поділити на 10.


console.log(`The number is raised to the square = ${numbersSquared}
Numbers multiplied by 7 = ${numbersMultipliedOnSeven}
Numbers are divided by 10 =${nnmbersDividedByTen} `)