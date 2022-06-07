let salary = parseFloat(prompt('The size of a salary', 3000));
let subsistLevel = parseFloat(prompt('The size of the subsistence level',3150.99));
if (salary > subsistLevel) {
    alert('Something goes wrong! Please, be attentive while typing your salary/SSL.');
    salary = parseFloat(prompt('The size of a salary',));
    subsistLevel = parseFloat(prompt('The size of the subsistence level',));
}
const socialPayment = subsistLevel - salary;
alert('The size of social assistance = ' + socialPayment.toFixed(2) + ' uah');