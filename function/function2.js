// Задача 2. Створити функцію, яка за номером місяця повертає його назву.

// function getMonthName (number) {
    const getMonthName = (number) => {
    switch (number) {
        case 1: return "January"
        case 2: return "February"
        case 3: return "March"
        case 4: return "April"
        case 5: return "May"
        case 6: return "June"
        case 7: return "Julay"
        case 8: return "August"
        case 9: return "September"
        case 10: return "October"
        case 11: return "November"
        case 12: return "December"
        default: return "Error"
    }
}

let userNumber = +prompt("Write the number of the month.")
let message = getMonthName(userNumber)
alert(message)
