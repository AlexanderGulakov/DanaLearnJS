//1 Створити функцію, яка для одновимірного масиву знаходить кількість парних елементів.

// 1 варіант:
let array = [5, 5, 2, 3, 4, 5, 6, 2, 1]
let newArr = array.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
        accumulator++
    }
    return accumulator
}, 0
)
alert(`Amount = ${newArr}`)

// 2 варіант :
// const getQuantityEvenNumber = (amount, i) => {
//     if (i % 2 === 0) {
//         amount++ }
//    return amount
// }

// const array = [5, 5, 2, 3, 4, 5, 6, 2, 1]
//  const newArr = array.reduce(getQuantityEvenNumber,0);
// alert(newArr)



// accumulator- Аккумулятор, аккумулирующий значение, которое возвращает функция callback
// после посещения очередного элемента, либо значение initialValue,
//  если оно предоставлено
// currentValue - Текущий обрабатываемый элемент массива.


