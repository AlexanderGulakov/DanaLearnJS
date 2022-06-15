let salary = parseFloat(prompt("The size of the salary", 0));
let livingWage = parseFloat(prompt("living wage", 0));
let socialAssistance = livingWage - salary;
alert("The amount of social assistance = " + socialAssistance.toFixed(2) + "$"); 