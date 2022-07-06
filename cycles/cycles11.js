// 11.  Кожне  … Вивести початкові та отримані значення.
//         1. двоцифрове натуральне число > 80 збільшити на 7.
//         2. двоцифрове натуральне число < 30 збільшити у 5 разів.
//         3. натуральне число < 20 збільшити на 10.
//         4. двоцифрове натуральне парне число збільшити у 5  разів.
//         5. двоцифрове натуральне число > 30 збільшити на 10.
//         6. натуральне число < 20 збільшити у 9 разів. 
//         7.  двоцифрове натуральне непарне число піднести до квадрата.
//         8. трицифрове натуральне число кратне 7 зменшити в 7 разів
//         9. двоцифрове натуральне число > 15 збільшити у 9   разів
//         10. трицифрове натуральне число зменшити на 100;


let userNumber = prompt("Enter a number", " ")
console.log('user number', userNumber)

for (i = 0; userNumber !== null; i++) {
    userNumber = parseInt(userNumber)
    document.write(`Number ${i + 1} : `, userNumber);
    if (userNumber > 80 && userNumber <= 99) {                         //|  1. двоцифрове натуральне число > 80 збільшити на 7.
        userNumber = userNumber + 7
        document.write(` Increase a two-digit natural number > 80 by 7 = ${userNumber} `);
    }
    if (userNumber >= 10 && userNumber < 30) {                         //|  2. двоцифрове натуральне число < 30 збільшити у 5 разів.
        userNumber = userNumber * 5
        document.write(` Increase a two-digit natural number < 30 by 5 times = ${userNumber} `);
        document.write(`<br>`)
    }

    if (userNumber > 0 && userNumber < 20) {                            //|  3. натуральне число < 20 збільшити на 10.
        userNumber = userNumber + 10
        document.write(` Increase a  natural number < 20 by 10  = ${userNumber} `);
        document.write(`<br>`)
    }
    if (userNumber % 2 === 0 && userNumber >= 10 && userNumber < 100) {  //|  4. двоцифрове натуральне парне число збільшити у 5 разів.
        userNumber = userNumber * 5
        document.write(` Increase a two-digit natural even number by 5 times.  = ${userNumber} `);
        document.write(`<br>`)
    }

    if (userNumber > 30 && userNumber < 100) {                         //|  5. двоцифрове натуральне число > 30 збільшити на 10.
        userNumber = userNumber + 10
        document.write(` Increase a two-digit natural number > 30 by 10.  = ${userNumber} `);
        document.write(`<br>`)
    }
    if (userNumber > 0 && userNumber < 20) {                             //|   6. натуральне число < 20 збільшити у 9 разів. 
        userNumber = userNumber * 9
        document.write(` Increase a natural number < 20 by 9 times.  = ${userNumber} `);
        document.write(`<br>`)
    }

    if (userNumber % 2 !== 0 && userNumber >= 10 && userNumber < 100) {  //|  7.  двоцифрове натуральне непарне число піднести до квадрата.
        userNumber = Math.pow(userNumber, 2)
        document.write(` Two-digit natural odd number bring to the square.  = ${userNumber} `);
        document.write(`<br>`)
    }
    if (userNumber >= 100 && userNumber <= 999 && userNumber < 100
        && userNumber % 7 !== 0) {  //|  8. трицифрове натуральне число кратне 7 зменшити в 7 разів
        userNumber = userNumber / 7
        document.write(` A three-digit natural number that is a multiple of 7 should be reduced by 7 times  = ${userNumber} `);
        document.write(`<br>`)
    }





    userNumber = prompt("Enter a number", " ")
}
// document.write(` Increase a two-digit natural number > 80 by 7 = ${taskFirst} `);    //|  1. двоцифрове натуральне число > 80 збільшити на 7.
// document.write(`<br>`)
// document.write(` Increase a two-digit natural number < 30 by 5 times = ${taskSecond} `);    //| 2. двоцифрове натуральне число < 30 збільшити у 5 разів.
