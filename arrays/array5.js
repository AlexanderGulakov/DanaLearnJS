// 5 Дано масив розмірності N. 
// Назвемо серією групу однакових елементів що йдуть поспіль, 
// а довжиною серії - кількість цих елементів 
// (довжина серії може дорівнювати 0. Вивести масив, що містить довжини всіх серій вихідного масиву. 

let array = [5, 5, 2, 3, 3, 3, 3, 4, 5, 6, 6, 2, 2, 1]  //масив розмірності N. 
// let final = [2,0,4,0,0,2,2,0]
let newArray = []


for (let i = 0, j = i + 1, k = 0; i < array.length; i++, j++, k++) {//i<14
    ////////////////////   
    let series = 0                 //| i=0 j=1 k=0          | i=2 j=3 k=1            | i=3 j=4 k=2                   |i=7 j=8 k=3       |i=8 j=9 k=4     |i=9 j=10 k=5   |i=11 j=12 k=6   |i=13 j=14 k=7
    if ((array[i] === array[j])) {                                     //| array[2] !== array[3]  |                               | [7]!==[8]        |[7]!==[8]       |               |                |[13]!==[14] 
        //| series = 0             |                               |series = 0        |series = 0      |               |                |series = 0 
        for (series = 1; array[i] === array[j]; i++, j++) {  //| array[0] === array[1] |                        |[3]===[4] [4]===[5] [5]===[6]  |                  |                |[9]===[10]      |[11]===[12]    |
            series++                               //| series=1+1=2          |                        |s=1+1=2   s=2+1=3    s=3+1=4   |                  |                |s=1+1=2         |s=1+1=2        |
        }
    }
    //| series=1               |                        |series=1                       |                  |                |series=1        |series=1       |




    newArray[k] = series                       //| newArray[0] = 2       |                        |newArray[2] = 4                |                  |                |newArray[5]= 2  |newArray[6] = 2|
    console.log(`newArray[k]= ${newArray[k]}`)
}
console.log(`newArray = ${newArray}`)          //|2                      | 0                      |  4                            | 0                | 0              | 2              | 2             | 0   









































