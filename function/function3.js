// Задача 3. Створити функцію, яка за номером дня тижня
//  повертає кількість уроків(так, як у вас було у школі).

// function getQuantityLessons(number) {
    const getQuantityLessons = (number) => {
    switch (number) {
        case 1:
        case 3:
            return "The quantity of lessons = 7"
        case 2:
        case 4:
            return " The quantity of lessons = 6"
        case 5: return "The quantity of lessons = 5"
        case 6:
        case 7:
            return " Weekend"
        default: return "Error"
    }
}

let userNumber = +prompt("Write the number of the day of the week.\n1- Monday \n2- Tuesday \n3- Wednesday \n4- Thusday \n5- Friday.")
let message = getQuantityLessons(userNumber)
alert(message)