// 13.	Дано масив розмірності N. 
// Назвемо серією групу однакових елементів що йдуть поспіль, 
// а довжиною серії - кількість цих елементів (довжина серії може дорівнювати = 0. 
//  Додати після кожної серії елемент з текстом «серія k», де k – порядковой номер серії

// якщо в тебе був масив const array = [2, 2, 9, 105, 1, 1, 1, 2, 3, 3, 4, 4, 17, 98, 98, 99, 105, 105];
// то має бути масив [
//     2,         2,         'seria 1',
//     9,         105,       1,
//     1,         1,         'seria 2',
//     2,         3,         3,
//     'seria 3', 4,         4,
//     'seria 4', 17,        98,
//     98,        'seria 5', 99,
//     105,       105,       'seria 6'
//   ]

let array = [2, 2, 9, 105, 1, 1, 1, 2, 3, 3, 4, 4, 17, 98, 98, 99, 105, 105]  //масив розмірності N. 
// let final = [2,2,'seria 1',9,105,1,1,1,'seria 2',2,3,3,'seria 3',4,4,'seria 4', 17, 98,98, 'seria 5', 99,105,  105, 'seria 6']
let newArray = []


for (let i = 0, j = i + 1, k = 0, l = 1; i < array.length; i++, j++, k++) {//i<14
    ////////////////////                       //| i=0 j=1 k=0  l=1            |i= 2 j=3 k=3      |i= 3 j=4 k=4    |i= 4 j=5 k=5    
    let series = array[i]                      //|series = 2                   |series = 9        |series = 105    |series = 1  
    newArray[k] = series                       //| newArray=2                  | newArray=9       | newArray=105   | newArray=1                              
    let number = `Серія № ${l}`                //| l=1                         | l=2              | l=2            | l=2                 
    if ((array[i] === array[j])) {             //|a[0]===a[1](2=2)             |                  |                |[4]=[5](1=1)                                                                                 
        for (; array[i] === array[j]; i++, j++,k++) {//i=0 j=1k=0 |i=1 j=2 k=2 |                  |                |i= 4 j=5 k=5  i= 5 j=6 k=7                                 
            k++                                //|k=1                          |                  |                |k=6
            newArray[k] = series               //|newArray=2                   |                  |                |1       
            console.log(`newArray[k]= ${newArray[k]}`)            
        }
        newArray[k] = number                   //|newArray=[seria 1]           |                  |
        l++                                    //| l=2

    }
    else {
        newArray[k] = series                   //|                           |newArray=[9]       |newArray=[105]   
    }

    console.log(`newArray[k]= ${newArray[k]}`)
}
console.log(`newArray = ${newArray}`)          //| 2 , 2 ,"seria 1"          |     9             |   105        


