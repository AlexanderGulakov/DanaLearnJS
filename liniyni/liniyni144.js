let quantityMonth = prompt("Enter the quantity of month", 29);
const year = Math.floor(quantityMonth / 12);
const month =  quantityMonth % 12;
alert("Total = " + year + "year" + month + "month");