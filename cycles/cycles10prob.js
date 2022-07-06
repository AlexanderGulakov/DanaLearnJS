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
// 10. добуток кратних 5;


let quantityEvenNumbers = 0                    //| кількістьпарних
let productOddNumbers = 0                      //| добуток непарних
let sumTwoDigitNumbers = 0                     //| сума двоцифрових
let arithmeticMeanPositiveNumbers = 0          //| середнє арифметичне додатних
let sumPositiveNumbers = 0                     //| сума додатніх
let quantityPositiveNumbers = 0                //| кількість додатніх
let biggestNegativeNumber = 0                  //| найбільше від’ємне;  (Можна записати -Infinity /Це найменше відємне число. Перевірка === 0 не буде потрібна) )
let quantityNumbersBiggerFirstNumber = 0       //| кількість більших за перше число;
let firstUserNumber = -Infinity                //| перше число    
let quantityThreeDigitNumber = 0               //| кількість трицифрових;
let productNumbersMultiplesOfFive = 0          //| добуток кратних 5;
let productPositiveNumbers = 0                 //| добуток додатних;
let geometricMeanPositiveNumbers = 0           //| середнє геометричне додатних;
let smallestPositiveNumber = 0                 //| найменше з додатніх;


let userNumber = prompt("Enter a number", " ")
console.log('user number', userNumber)


for (; userNumber !== null;) {

    userNumber = parseInt(userNumber)
    if (userNumber % 2 === 0) {
        console.log('%2=', userNumber)
        quantityEvenNumbers = quantityEvenNumbers + 1                             //| кількість парних;
        console.log('quantityEvenNumbers', quantityEvenNumbers)
    }
    if (userNumber % 2 !== 0) {
        console.log('%2 !=', userNumber)
        if (productOddNumbers === 0) {
            productOddNumbers = 1
        }
        productOddNumbers = productOddNumbers * userNumber                      //|	добуток непарних;
        console.log('product odd numbers=', productOddNumbers)
    }
    if ((userNumber >= 10 && userNumber <= 99) || (userNumber <= -10 && userNumber > -99)) {
        console.log('two digit numbers ,userNumber ')
        sumTwoDigitNumbers = sumTwoDigitNumbers + userNumber                    //| сума двоцифрових;
        console.log('sum of two digit numbers=', sumTwoDigitNumbers)
    }
    if (userNumber < 0) {
        if (biggestNegativeNumber === 0 || userNumber > biggestNegativeNumber) {
            biggestNegativeNumber = userNumber                                  //|	найбільше від’ємне;
        }
    }
    if (firstUserNumber === -Infinity) {
        firstUserNumber = userNumber
    }
    console.log('first user number=', firstUserNumber)
    if (firstUserNumber < userNumber) {                                          //| кількість більших за перше число;
        quantityNumbersBiggerFirstNumber = quantityNumbersBiggerFirstNumber + 1
        console.log('quantityNumbersBiggerFirstNumber=', quantityNumbersBiggerFirstNumber)
    }
    if (userNumber > 0) {
        if (productPositiveNumbers === 0) {
            productPositiveNumbers = 1
        }
        productPositiveNumbers = productPositiveNumbers * userNumber              //|	добуток додатніх;
        // geometricMeanPositiveNumbers = Math.sqrt(productPositiveNumbers)       //| корінь з productPositiveNumbers= середнє геометричне додатних(прорахунок внизу);
        if (smallestPositiveNumber === 0 || userNumber < smallestPositiveNumber) {
            smallestPositiveNumber = userNumber                                   //| найменше з них(додатних)
        }
        sumPositiveNumbers = sumPositiveNumbers + userNumber
        console.log('sum of positive numbers=', sumPositiveNumbers)
        quantityPositiveNumbers = quantityPositiveNumbers + 1
        console.log('quantity of positive numbers=', quantityPositiveNumbers)      
        // arithmeticMeanPositiveNumbers = sumPositiveNumbers / quantityPositiveNumbers //|	середнє арифметичне додатних (прорахунок внизу)
        
    }
    if (userNumber > 99 && userNumber < 999 || userNumber < - 99 && userNumber > -999) {
        quantityThreeDigitNumber = quantityThreeDigitNumber + 1                    //| кількість трицифрових;
    }  
    if (userNumber % 5 === 0) {
        console.log('%5=', userNumber)
        if (productNumbersMultiplesOfFive === 0) {
            productNumbersMultiplesOfFive = 1
        }                                                                          //| добуток кратних 5;
        productNumbersMultiplesOfFive = productNumbersMultiplesOfFive * userNumber
        console.log('product numbers multiples of five =', productNumbersMultiplesOfFive)
    }
    arithmeticMeanPositiveNumbers = sumPositiveNumbers / quantityPositiveNumbers   //|	середнє арифметичне додатних 
    console.log('arithmetic mean of positive numbers=', arithmeticMeanPositiveNumbers) 
    geometricMeanPositiveNumbers = Math.sqrt(productPositiveNumbers)               //| корінь з productPositiveNumbers= середнє геометричне додатних;

    userNumber = prompt("Enter a number", " ")
}

document.write(` Quantity Even Numbers = ${quantityEvenNumbers} `);                                            //| кількість парних; 
document.write(`<br>`)
document.write(`The product of odd numbers = ${productOddNumbers} `);                                          //|	добуток непарних;
document.write(`<br>`)
document.write(`The sum of two digit numbers = ${sumTwoDigitNumbers} `);                                       //| сума двоцифрових;
document.write(`<br>`)
document.write(`The arithmetic mean of positive numbers = ${arithmeticMeanPositiveNumbers} `);                 //| середнє арифметичне додатних;
document.write(`<br>`)
document.write(`The biggest negative numbers = ${biggestNegativeNumber} `);                                    //| найбільше від’ємне;
document.write(`<br>`)
document.write(`The quantity of numbers bigger than the first number = ${quantityNumbersBiggerFirstNumber}`);  //| кількість більших за перше число;
document.write(`<br>`)
document.write(`The geometric mean of positive numbers  = ${geometricMeanPositiveNumbers}`);                   //| середнє геометричне додатних;                                                      //середнє геометричне додатних;
document.write(`<br>`)
document.write(`The smallest positive number  = ${smallestPositiveNumber}`);                                   //| найменше з додатніх;
document.write(`<br>`)
document.write(`The quantity of  three digit numbers = ${quantityThreeDigitNumber} `);                         //| кількість трицифрових;
document.write(`<br>`)
document.write(`The product of numbers that are multiples of five  = ${productNumbersMultiplesOfFive} `);      //| добуток кратних 5;



















