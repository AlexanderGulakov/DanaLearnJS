// 4. Описати літерал, що зберігає ____ та вивести його.
// 1.	оцінки за екзамен в національній системі (відмінно, добре, …).
// 2.	дні тижня.
// 3.	місяці року.
// 4.	жіночі імена (щонайменше 7 шт.)
// 5.	чоловічі імена (щонайменше 7 шт.)
// 6.	кольори веселки.
// 7.	прізвища студентів Вашої групи.
// 8.	прізвища студентів Вашої групи.
// 9.	назви фруктів (щонайменше 7 шт.)
// 10.	назви овочів (щонайменше 7 шт.)
// 11.	оцінки за екзамен в системі ECTS (A,B,…).




let examMarks = ["Excellent", "Good", "Satisfactory", "Unsatisfactory"]
let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let femaleNames = ['Anna', 'Daryna', 'Sofia', 'Diana', 'Maria', 'Victoria', 'Tetiana']
let maleNames = ['Artem', 'Denis', 'Oleksandr', 'Andriy', 'Bohdan', 'Dmytro', 'Nazar']
let colorsOfRainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Azure', 'Violet']
let studentsSurnames = ['Shevchenko', 'Kovalenko', 'Bondarenko', 'Boyko', 'Tkachenko', 'Kravchenko', 'Koval']
let fruitNames = ['Strawberry', 'Raspberry', 'Apple', 'Pear', 'Plum', 'Peach', 'Apricot']
let vegetableNames = ['Cucumber', 'Tomato', 'Cabbage', 'Carrot', 'Onion', 'Pepper', 'Zucchini']
let examMarksECTS = ['A', 'B', 'C', 'D', 'E', 'FX', 'F']

for (i = 0; i < examMarks.length; i++) {
    alert(`Marks for the exam in the national system:
    ${examMarks[i]}`)
}

for (i = 0; i < daysOfWeek.length; i++) {
    alert(`Days of the week: 
    ${daysOfWeek[i]}`)
}

for (i = 0; i < monthsOfYear.length; i++) {
    alert(`Months of the year:
    ${monthsOfYear[i]}`)
}

for (i = 0; i < femaleNames.length; i++) {
    alert(`Female names:
    ${femaleNames[i]}`)
}
for (i = 0; i < maleNames.length; i++) {
    alert(`Male names:
    ${maleNames[i]}`)
}

for (i = 0; i < colorsOfRainbow.length; i++) {
    alert(`Colors of rainbow:
    ${colorsOfRainbow[i]}`)
}

for (i = 0; i < studentsSurnames.length; i++) {
    alert(`Names of students in your group:
    ${studentsSurnames[i]}`)
}

for (i = 0; i < fruitNames.length; i++) {
    alert(`Names of fruits:
    ${fruitNames[i]}`)
}

for (i = 0; i < vegetableNames.length; i++) {
    alert(`Names of vegetables:
    ${vegetableNames[i]}`)
}

for (i = 0; i < examMarksECTS.length; i++) {
    alert(`Marks for the exam in the  ECTS system:
    ${examMarksECTS[i]}`)
}

