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
    document.write("<br>");

    for (let j = 0; userNumber > 80 && userNumber <= 99; j++) {                         //|  1. двоцифрове натуральне число > 80 збільшити на 7.
        userNumber = userNumber + 7
        document.write(` 1.Increase a two-digit natural number > 80 by 7 = ${userNumber} `);
        document.write(`<br>`)
    }

    for (let k = 0; userNumber >= 10 && userNumber < 30; k++) {                         //|  2. двоцифрове натуральне число < 30 збільшити у 5 разів.
        userNumber = userNumber * 5
        document.write(` 2.Increase a two-digit natural number < 30 by 5 times = ${userNumber} `);
        document.write(`<br>`)
    }

    for (let l = 0; userNumber > 0 && userNumber < 20; l++) {                            //|  3. натуральне число < 20 збільшити на 10.
        userNumber = userNumber + 10
        document.write(` 3.Increase a  natural number < 20 by 10  = ${userNumber} `);
        document.write(`<br>`)
    }

    for (let m = 0; userNumber % 2 === 0 && userNumber >= 10 && userNumber < 100; m++) {  //|  4. двоцифрове натуральне парне число збільшити у 5 разів.
        userNumber = userNumber * 5
        document.write(` 4.Increase a two-digit natural even number by 5 times.  = ${userNumber} `);
        document.write(`<br>`)
    }

    for (let n = 0; userNumber > 30 && userNumber < 100; n++) {                         //|  5. двоцифрове натуральне число > 30 збільшити на 10.
        userNumber = userNumber + 10
        document.write(` 5.Increase a two-digit natural number > 30 by 10.  = ${userNumber} `);
        document.write(`<br>`)
    }

    for (let o = 0; userNumber > 0 && userNumber < 20; o++) {                             //|   6. натуральне число < 20 збільшити у 9 разів. 
        userNumber = userNumber * 9
        document.write(` 6.Increase a natural number < 20 by 9 times.  = ${userNumber} `);
        document.write(`<br>`)
    }

    for (let p = 0; userNumber % 2 !== 0 && userNumber >= 10 && userNumber < 100; p++) {  //|  7.  двоцифрове натуральне непарне число піднести до квадрата.
        userNumber = Math.pow(userNumber, 2)
        document.write(` 7.Two-digit natural odd number bring to the square = ${userNumber} `);
        document.write(`<br>`)
    }

    for (let r = 0; userNumber >= 100 && userNumber <= 999 && userNumber % 7 !== 0; r++) {  //|  8. трицифрове натуральне число кратне 7 зменшити в 7 разів
        userNumber = userNumber / 7
        document.write(` 8. A three-digit natural number that is a multiple of 7 should be reduced by 7 times  = ${userNumber} `);
        document.write(`<br>`)
    }
    for (let s = 0; userNumber > 15 && userNumber < 100 ; s++) {  //| 9. двоцифрове натуральне число > 15 збільшити у 9 разів
        userNumber = userNumber * 9
        document.write(` 9. Increase a two-digit natural number > 15 by 9 times  = ${userNumber} `);
        document.write(`<br>`)
    }

    for (let t = 0; userNumber >= 100 && userNumber <= 999 ; t++) {  //|  10. трицифрове натуральне число зменшити на 100;
        userNumber = userNumber - 100 
        document.write(` 10. Reduce a three-digit natural number by 100;  = ${userNumber} `);
        document.write(`<br>`)
    }

    userNumber = prompt("Enter a number", " ")

}
document.write(`<br>`)
