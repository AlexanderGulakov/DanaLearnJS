// 19. З клавіатури вводяться два числа N i M (N<M). Вивести а екран числа
// N---M
// N+1 --- M-1
// N+2 --- M-2
// N+3 --- M-3
// . . . . . . 
// Виведення завершити коли число справа стане меншим за число зліва.

// let numberN = +prompt("Enter a number", " ")                                        
// let numberM = +prompt("Enter a number", " ")                                        
// let i = 0                                                                  
// document.write(`N = ${numberN} --- M = ${numberM} `)                                                          
// do {                                                                             
//                                                                            
//     i++                                                                    
//                                                                 
//     numberN++                                                                    
//     numberM--                                                                        
//     if (numberN < numberM) {                                                                    
//         document.write(`<br>N+${i}=${numberN}--- M-${i}=${numberM}`)   
//     }
// }                                                                                  
// while (numberN < numberM)                                                                  



let numberN = +prompt("Enter a number", " ")                                      
let numberM = +prompt("Enter a number", " ")                                      
let i = 0                                                                 
// document.write(`N = ${numberN} --- M = ${numberM} `)                                                        
while (numberN < numberM)   {                                                                             
    document.write(`<br>N+${i}=${numberN}--- M-${i}=${numberM}`)    
    //|                  |       |       |
    i++                                                                    
                                                                   
    numberN++                                                                         
    numberM--                                                                       
    // if (numberN < numberM) {                                                                      
    // }
}                                                                                  
   

// let numberN = +prompt("Enter a number", " ")                                    //| 5                |6      |7      |8
// let numberM = +prompt("Enter a number", " ")                                    //| 12               |11     |10     |9
// let quantityN = 0                                                               //| 0                |+1     |+2     |+3
// let quantityM = 0                                                               //| 0                |-1     |-2     |-3
// do {                                                                            //|                  |       |       |
//     if (quantityM === 0) {                                                      //|                  |       |       |
//         document.write(`N = ${numberN} --- M = ${numberM} `)                    //| N=5 ---M = 12
//     }                                                                           //|                  |       |       |
//     quantityN++                                                                 //| + 1              | + 2   | +3    | + 4
//     quantityM--                                                                 //| - 1              | - 2   | -3    | - 4
//     numberN++                                                                   //| 6                | 7     | 8     |  9
//     numberM--                                                                   //| 11               | 10    | 9     |  8
//     document.write(`<br>N+${quantityN}=${numberN}--- M${quantityM}=${numberM}`) //| N+1=6 ---M-1= 11 |7---10 | 8---9 | 9---8
// }                                                                               //|                  |       |       |
// while (numberN < numberM)                                                       //| 6<11             |7< 10  | 8 < 9 |  9 > 8           













