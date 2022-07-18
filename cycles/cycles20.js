// // 20. На екрані виводиться меню: 
// // 1. Сказати «Привіт». 
// // 2. Сказати «Зачекай». 
// // 3. Сказати «До побачення». 
// // 4. Вихід.
// // Шляхом вибору пунктів меню виводити відповідні повідомлення, 
// // поки не буде вибрано пункт номер 4.

// let userNumber = +prompt(" Select from the list: \n1. Say Hello \n2. Say Check \n3. Say Goodbye \n4. Exit ")          

// while (userNumber !== 4) {                          
//     console.log('while  ', userNumber)
//     if (userNumber === 1) {                                    
//         alert("Привіт")
//         console.log('===1  ', userNumber)
//     }
//     if (userNumber === 2) {
//         alert("Зачекай")
//         console.log('===2  ', userNumber)
//     }
//     if (userNumber === 3) {
//         alert("До побачення")
//         console.log('===3  ', userNumber)
//     }
//     if (userNumber === 4) break;
//     console.log('===4 ', userNumber)
//     userNumber = +prompt("Enter a number", " ")
//     console.log('userNumberprompt  ', userNumber)
// }


let userNumber = 0
let result;
do {
    userNumber = +prompt(" Select from the list: \n1. Say Hello \n2. Say Check \n3. Say Goodbye \n4. Exit ")
    console.log('userNumber  ', userNumber)
    switch (userNumber) {
        case 1: result = "Hello"
            break;
        case 2: result = "Check"
            break;
        case 3: result = "Goodbye"
            break;
        case 4: result = "Exit"
            break;
        default: result = "The number is incorrect. Try again.";
    }
    alert(result);

}
while (userNumber !== 4)


