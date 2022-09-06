// Дано масив розмірності N. 
//  Визначити максимальну кількість його однакових елементів.



let number = [2, 1, 6, 4, 6, 6, 2, 2, 6, 1, 6]
let count = 0
let maxCount = 0
for (let i = 0; i < number.length; i++) {  //i = 0                                                                                   |i = 1                                                                      |i = 2                                                                
    for (let j = i+1; j < number.length; j++) {  //j = 0  j = 2   j = 3   j = 4    j = 5   j = 6    j = 7    j = 8    j = 9     j = 10 |j=0       j=3     j=4    j=5    j=6     j = 7     j = 8   j = 9   j = 10   |j=0


        if (number[i] === number[j]) {  //   2===1     2===6     2===4   2===6    2===6    2===2    2===2    2===6   2===1     2===6 | 1===6   1===4    1===6   1===6   1===2   1===2    1===6    1===1   1===6  |6===4    6===6    6===6      6===2     6===2      6===6      6===1       6===6
            count++                     //    0        0          0       0        0         1        2        2       2         2   | 0         0         0       0     0       0         0        1      0     | 0         1        2          2         2          3         3            4
        } 
    }
    
    if (count > maxCount) {  //  2>0     1>2    4 > 2                                                                                                                              
            maxCount = count  //  2       2       4
          }                                                                                                                                
            count = 0         // 0       0        0                                                                       
        
    }
    alert(`Maximum number of identical elements = ${maxCount}`) //4
   






    // let number = [2, 1, 6, 4, 2, 5, 2, 1,2]
    // let count = 0
    // let maxCount = 0
    // for (let i = 0; i < number.length; i++) {  //i = 0                                                                      | i = 1 
    //     for (let j = 0; j < number.length; j++) {  //j = 0   j = 2    j = 3    j = 4   j = 5     j = 6     j = 7    j = 8   | j = 0     j = 3      j = 4    j = 5   j = 6  j = 6
    //         if (j === i || j < i) {
    //             j = i + 1                         // j = 1                                                                  | j = 2 
    //         }
    
    //         if (number[i] === number[j]) {  //      2 === 1  2 === 6  2 === 4  2 === 2  2 === 5  2 === 2  2 === 1  2 === 2  | 1 === 6    1 === 4  1 === 2  1 === 5  1 === 2    1 === 1
    //             count++                     //      -           -        -        2        -        3        -       4      |  -          -          -        -        -          2
    //         } 
    //     }
    //     if (count > maxCount) {  // 4> 0                                                                                                                             2>3
    //             maxCount = count  // 4                                                                                                                                3
    //             count = 0                                                                                                                                           // 1
    //         }
    //     }
    //     alert(`Maximum number of identical elements = ${maxCount}`) //4
       














// let number = [2, 1, 6, 4, 2, 8, 10, 5, 9, 2, 1]
// let count = 1
// let maxCount = 0
// // let sameElements = 0
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < number.length; j++) {
//         console.log(`i= ${i}`)   // i = 0
//         console.log(`j= ${j}`)  // j = 0
//         if (i === j) {
//             j = i + 1
//             console.log(`if()j= ${j}`)    // j = 1
//         }
//         if (number[i] === number[j] ) {  //   2 === 1
//             count++
//             console.log(`if count = ${count}`)  // -
//         }
//         console.log(`number[i]= ${number[i]}`) //2
//         console.log(`number[j]= ${number[j]}`) //1
//         console.log(`count = ${count}`)  // 1

//         // if (count > maxCount) {
//         //     maxCount = count
//         // }
//     }

// }
// alert(`Maximum number of identical elements = ${count}`)
