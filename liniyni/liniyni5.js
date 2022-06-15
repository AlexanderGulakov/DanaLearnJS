
let salaryWithVat = parseFloat(prompt("Your salary with VAT",0));
const vat = 80;
const percent = 100;
let salaryWithoutVat = salaryWithVat * vat / percent; 
alert("Your salary without VAT =" + salaryWithoutVat.toFixed (2));
