// 8. З клавіатури вводиться поточний час (дві змінні цілого типу: кількість годин і кількість хвилин) 
// протягом якогось із перших 3 уроків (початок о 8.30).  З’ясувати, який із трьох триває урок.


const userActualHour = parseFloat(prompt("Enter your time (Hour)", ""))
const userActualMinute = parseFloat(prompt("Enter your time (Minute)", ""))
const hourPerMinute = 60
const totalUserTime = (userActualHour * hourPerMinute) + userActualMinute
const startFirstLesson = 8 * hourPerMinute + 30
const endFirstLesson = 9 * hourPerMinute + 15
const startSecondLesson = 9 * hourPerMinute + 25
const endSecondLesson = 10 * hourPerMinute + 10
const startThirdLesson = 10 * hourPerMinute + 20
const endThirdLesson = 11 * hourPerMinute + 5

if (totalUserTime >= startFirstLesson && totalUserTime <= endFirstLesson) {
    alert(`First Lesson`)
    console.log('first lesson', totalUserTime)
}
else if (totalUserTime >= startSecondLesson && totalUserTime <= endSecondLesson) {
    alert(`Second Lesson`)
    console.log('second lesson', totalUserTime)
}
else {
    if (totalUserTime >= startThirdLesson && totalUserTime <= endThirdLesson) {
        alert(`Third Lesson`)
        console.log('third lesson', totalUserTime)
    }
    else if (totalUserTime > endFirstLesson && totalUserTime < startSecondLesson) {
        alert(`School break`)
        console.log('break1', totalUserTime)
    }
    else if (totalUserTime > endSecondLesson && totalUserTime < startThirdLesson) {
        alert(`School break`)
        console.log('break2', totalUserTime)
    }
    else {
        alert(`The lesson does not continue now`)
    }
}














// const childAge= 7;
// const schoolchilAge = 17;
// const studentAge = 23;
// const workerAge = 60;
// const pensionerAge = 120;

// if (yourAge < 7) {
//     message = `Child`;
// }
// else if ( yourAge < 17) {
//     message = `Schoolchil`;
// }

// else if ( yourAge < 23) {
//     message = `Student`;
// }
// else if (  yourAge < 60) {
//     message = `Worker`;
// }
// else if (  yourAge < 120) {
//     message = `Pensioner`;
// }

// else {
//     message = `You have entered the wrong age`;
// }
// alert(message);
