// Дано масив розмірності N. 
//  Визначити максимальну кількість його однакових елементів.


let number = [2, 1, 6, 4, 6, 6, 2, 2, 6, 1, 6]

let maxCount = 0
for (let i = 0; i < number.length - 1; i++) {  //i = 0                                                                                   |i = 1                                                                      |i = 2                                                                
    console.log(`i = ${i}`)
    let count = 1
    for (let j = i + 1; j < number.length; j++) {  //j = 0  j = 2   j = 3   j = 4    j = 5   j = 6    j = 7    j = 8    j = 9     j = 10 |j=0       j=3     j=4    j=5    j=6     j = 7     j = 8   j = 9   j = 10   |j=0
        console.log(`j = ${j}`)
        console.log(`number[i] = ${number[i]}`)
        console.log(`number[j] = ${number[j]}`)
        if (number[i] === number[j]) {  //   2===1     2===6     2===4   2===6    2===6    2===2    2===2    2===6   2===1     2===6 | 1===6   1===4    1===6   1===6   1===2   1===2    1===6    1===1   1===6  |6===4    6===6    6===6      6===2     6===2      6===6      6===1       6===6
            count++                     //    0        0          0       0        0         1        2        2       2         2   | 0         0         0       0     0       0         0        1      0     | 0         1        2          2         2          3         3            4
        }
    }

    if (count > maxCount) {  //  3>1     1>2    5 > 2                                                                                                                              
        maxCount = count  //  3       2       5
    }
}
console.log(`Maximum number of identical elements = ${maxCount}`) //5


