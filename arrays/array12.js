// 12.	Дано числовий масив розмірності N. 
// Знайти кількість його локальних максимумів.
// Локальним максимумумом називається елемент, значення якого більше  від сусідів


// let number = [1, 5, 2, 3, 1, 1, 1, 7, 5]
let number = [1, 5, 2, 3, 1, 1, 1, 7, 5, 6, 2]
let count = 0

for (let i = 0; i < number.length - 2; i++) {     //i = 0  i< 9   i ++  |i = 0  | i = 1   |i = 2  | i = 3 | i = 4  | i = 5 | i = 6
    console.log(`i= ${i}`)
    if ((number[i + 1] > number[i]) && (number[i + 1] > number[i + 2])) {  //number[1]> number[0] && number[1] > number[2] |   [2] > [1] && [2] > [3] |   [3] > [2] && [3] > [4] |   [4] > [3] && [4] > [5] |   [5] > [4] && [5] > [6] |  [6] > [5] && [6] > [7] |  [7] > [6] && [7] > [8] 
        count++                                                           // 1 + 0  + 1 + 0 + 0 + 0 + 1 = 3
        console.log(`count= ${count}`)
    }
}
alert(`count = ${count}`)