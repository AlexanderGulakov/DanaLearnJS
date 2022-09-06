// 16.	Дано вік 5 працівників. 
// Визначити скільки серед них є пенсіонерів.


let ageWorkers = [30, 45, 65, 20, 61]
let agePensioner = 60  
let countPensioners = 0

for (let i = 0; i < ageWorkers.length; i++) { //i = 0    i = 1    i = 2     i = 3   i = 4
    if (ageWorkers[i] >= agePensioner) {        // 30>=60    45>=60   65>= 60  20>=65  61>= 60
        countPensioners++                   // 0           0        1        1        2

    }   
} 
alert(`Count of pensioners = ${countPensioners}`) // 2