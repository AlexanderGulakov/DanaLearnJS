// 8. Розробити функцію, 
// яка би для довільної кількості переданих символів визначала, кількість букв «а».


// 1 варіант :
// const arrayLetters = ['!', 'f', 'a', '6', '#', '@', 'a', 'n', 'a']
// const fixedLetter = 'a'
// const getQuantityLetter = (amount, currentValue ) => {
//     if(currentValue === fixedLetter){
//         amount++
//     }
//     return amount
// }
// const newArr = arrayLetters.reduce(getQuantityLetter,0);
// console.log(`Quantity = ${newArr}`)



// 2 варіант :

const arrayLetters = ['!', 'f', 'a', '6', '#', '@', 'a', 'n', 'a']
const fixedLetter = 'a'
const newArr = arrayLetters.reduce((amount, currentValue) => {
    if (currentValue === fixedLetter) {
        amount++
    }
    return amount
}, 0
)
console.log(`Quantity = ${newArr}`)


