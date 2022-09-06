// 14.	Дано числовий масив розмірності N.
//  Знайти кількість елементів, що більші за перший.



let number = [5, 1, 6, 4, 3, 2, 8, 10, 5, 9]
let count = 0
console.log(`number[0]= ${number[0]}`)  //5
for (let i = 0; i < number.length; i++) { // убрати перевірку і потім щоб не вилазило за масив
    console.log(`i= ${i}`)                    //| i = 0    i = 1  i = 2  i = 3  i = 4   i = 5   i = 6  i = 7  i = 8   i = 9
    if (i > 0 && number[i] > number[0]) {     //|          1>5    6>5     4>5    3>5    2>5     8>5    10>5    5>5     9>5 
        count++                               //|           0      1      1       1       1      2       3      3       4
    }
    console.log(`count= ${count}`)            //| 0         0      1      1       1       1      2       3      3        4
}
alert(`First element = ${number[0]}.The count of elements greater than the first = ${count}`)//4