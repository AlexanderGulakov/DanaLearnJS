// 5.1Дано масив розмірності N. 
// Назвемо серією групу однакових елементів що йдуть поспіль, 
// а довжиною серії - кількість цих елементів (довжина серії може дорівнювати 0. 
//      Перетворити масив так, щоб замість кожної серії йшов один елемент, що утворює серію, а не її довжину. 



let array = [5, 5, 2, 3, 3, 3, 3, 4, 5, 6, 6, 2, 2, 1]  //масив розмірності N. 
// let final = [5,0,3,0,0,6,2,0]
let newArray = []


for (let i = 0, j = i + 1, k = 0; i < array.length; i++, j++, k++) {//i<14
    ////////////////////                       //| i=0 j=1 k=0    i=1 j=2    | i=2 j=3 k=1      | i=3 j=4 k=2    i=4 j=5   i=5 j=6    i=6 j=7 | i=7 j=8 k=3    | i=8 j=9 k=4  | i=9 j=10 k=5   i=10 j=11  |i=11 j=12 k=6 i=12 j=13  |i=13 j=14 k=7
    let series = 0                             //|series = 0                 |series = 0        |series = 0                                   |series = 0      |series = 0    |series = 0                 |series = 0               |series = 0 
    if ((array[i] === array[j])) {             //| array[0] === array[1]     |                  |[3] === [4]    [4]===[5]  [5]===[6]          |                |              |[9] === [10]               |[11] === [12]            |        
        for (; array[i] === array[j]; i++, j++) {
            series = array[j]                  //| series= 5                 |                  | series= 3      series=3   series=3          |                |              | series= 6                 | series= 2               |
        }
    }

    newArray[k] = series                       //|newArray[0] = 5            | newArray[1] = 0  | newArray[2] = 3                             |newArray[3] = 0 |newArray[4]=0 |newArray[5] = 6            |newArray[6] = 2          |newArray[7] = 0                 
    console.log(`newArray[k]= ${newArray[k]}`)
}
console.log(`newArray = ${newArray}`)          //|5                          | 0                | 3                                           | 0              | 0            | 6                         | 2                       | 0              
 
