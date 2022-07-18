// 24. З клавіатури вводиться пароль (правильний пароль- 78) 
// Поки пароль не вірний дати можливість користувачу повторно ввести його. 

let userNumber
const password = 78

do {
    userNumber = +prompt("Enter the number")             //| введені числа
    console.log('userNumber  ', userNumber)
    if (userNumber !== password) {
        alert('Password is incorrect.Try again. ')
    }
}
while (userNumber !== password)
alert('Нou guessed. The password is 78 ')