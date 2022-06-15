// 7. З клавіатури вводиться вік людини. 
// Вивести на екран ким він є
//  (дитиною у садочку, школярем, студентом, працівником, пенсіонером).


const yourAge = parseInt(prompt("Enter your age", ""));
const childAge= 7;
const schoolchilAge = 17;
const studentAge = 23;
const workerAge = 60;
const pensionerAge = 120;

if (yourAge < 7) {
    message = `Child`;
}
else if ( yourAge < 17) {
    message = `Schoolchil`;
}

else if ( yourAge < 23) {
    message = `Student`;
}
else if (  yourAge < 60) {
    message = `Worker`;
}
else if (  yourAge < 120) {
    message = `Pensioner`;
}

else {
    message = `You have entered the wrong age`;
}
alert(message);



 