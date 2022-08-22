// Задача 1. Створити функцію, яка за номером місяця повертає пору року, 
// до якої відноситься цей місяць.
const getSeason = (number) => {
// function getSeason(number) {
    switch (number) {
        case 1:
        case 2:
        case 12:
            return "Winter"
        case 3:
        case 4:
        case 5:
            return "Spring"
        case 6:
        case 7:
        case 8:
            return "Summer"
        case 9:
        case 10:
        case 11:
            return "Autumn"
        default: return "Error"
    }
}

let userNumber = +prompt("Write the number of the month.")
let message = getSeason(userNumber)
alert(message)



