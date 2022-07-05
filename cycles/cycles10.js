// 10.	Користувач вводить числа поки не натисне відміну. Знайти 
// 1.	кількість парних;
// 2.	добуток непарних;
// 3.	суму двоцифрових;
// 4.	середнє арифметичне додатних;
// 5.	найбільше від’ємне;
// 6.	кількість більших за перше число;
// 7.	середнє геометричне додатних;
// 8.	найменше з них;
// 9.	кількість трицифрових;
// 10.	добуток кратних 5;

document.write("<pre>");
let quantityEvenNumbers = 0                     // кількістьпарних
let productOddNumbers = 0                      // добуток непарних
let sumTwoDigitNumbers = 0                    // сума двоцифрових
let arithmeticMeanPositiveNumbers = 0        // середнє арифметичне додатних
let sumPositiveNumbers = 0                   // сума додатніх
let quantityPositiveNumbers = 0              // кількість додатніх
let biggestNegativeNumber = 0                // найбільше від’ємне;  (Можна записати -Infinity /Це найменше відємне число. Перевірка === 0 не буде потрібна) )
let quantityNumbersBiggerFirstNumber = 0    //	кількість більших за перше число;
let firstUserNumber = 0                   

let userNumber = prompt("Enter a number", " ")
console.log('user number', userNumber)


for (; userNumber !== null;) { // тобі взагалі і тут треба? почитай методичку - там пише, що цикл може бути взагалі пустий наприклад for (;;), або відсутня одна з його частин. Умова тут точно потрібна, а от все інше хз

  if (userNumber % 2 === 0) {
    console.log('%2=', userNumber)
    quantityEvenNumbers = quantityEvenNumbers + 1       //кількість парних;
    console.log('quantityEvenNumbers', quantityEvenNumbers)
  }
  if (userNumber % 2 !== 0) {
    console.log('%2 !=', userNumber)
    if (productOddNumbers === 0) {
      productOddNumbers = 1
    }
    productOddNumbers = productOddNumbers * (+userNumber)      //	добуток непарних;
    console.log('product odd numbers=', productOddNumbers)
  }

  if ((userNumber >= 10 && userNumber <= -10) || (userNumber <= 99 && userNumber > -99)) {
    console.log('two digit numbers ,userNumber ')
    sumTwoDigitNumbers = sumTwoDigitNumbers + (+userNumber)       //сума двоцифрових;
    console.log('sum of two digit numbers=', sumTwoDigitNumbers)

  }
  if (userNumber > 0) {
    sumPositiveNumbers = sumPositiveNumbers + (+userNumber)
    console.log('sum of positive numbers=', sumPositiveNumbers)
    quantityPositiveNumbers = quantityPositiveNumbers + 1
    console.log('quantity of positive numbers=', quantityPositiveNumbers)
    arithmeticMeanPositiveNumbers = sumPositiveNumbers / quantityPositiveNumbers    //	середнє арифметичне додатних;
    console.log('arithmetic mean of positive numbers=', arithmeticMeanPositiveNumbers.toFixed(2))
  }

  if (userNumber < 0) {
    if (biggestNegativeNumber === 0 || biggestNegativeNumber > userNumber) {
      biggestNegativeNumber = userNumber                //	найбільше від’ємне;
    }
  }

  if (firstUserNumber === 0) {
     firstUserNumber = userNumber }
     console.log('first user number=', firstUserNumber )

  if (userNumber > firstUserNumber) {
    quantityNumbersBiggerFirstNumber = quantityNumbersBiggerFirstNumber + 1   //кількість більших за перше число;
    console.log('quantityNumbersBiggerFirstNumber=', quantityNumbersBiggerFirstNumber )
  }

  userNumber = prompt("Enter a number", " ") // якщо вводити тільки тут - то цикл не буде знати чи ця змінна буде відповідати умові при першому введенні
}

document.write(` Quantity Even Numbers = ${quantityEvenNumbers} `);       //кількість парних; 
document.write(`The product of odd numbers = ${productOddNumbers} `);   //	добуток непарних;
document.write(`The sum of two digit numbers = ${sumTwoDigitNumbers} `);    //сума двоцифрових;
document.write(`The arithmetic mean of positive numbers = ${arithmeticMeanPositiveNumbers} `);    //середнє арифметичне додатних;
document.write(`The biggest negative numbers = ${biggestNegativeNumber} `);    //найбільше від’ємне;
document.write(`The quantity of numbers bigger than the first number = ${quantityNumbersBiggerFirstNumber} `);    //найбільше від’ємне;


document.write("</pre>");










