//Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

const arrOfString = ["Oleksander", "Daniella29", "Oleksander33", "12Daniella"]
console.log(`A array of string = ${arrOfString}`)
const regular = /[13]/i
const getResult = (re, array) => {// ТЕ САМЕ + НАЗВА ФУНКЦІЇ ТЕЖ ЛАЙНО + ТРЕБА ЩОБ ТІЛЬКИ ЯКЩО Є ЦИФРА 3, А НЕ 33 І 1, А НЕ 12.
    return array.filter((currentValue) => {
        if (re.test(currentValue)) {
            return currentValue
        }
        // console.log(`currentValue =  ${currentValue}`)
    }
    )
}
const newString = getResult(regular, arrOfString)
console.log(`newString =  ${newString}`)