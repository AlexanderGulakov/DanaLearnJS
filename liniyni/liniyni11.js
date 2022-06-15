
let quantityKopeck = prompt("Enter the quantity of kopeck", 5);
let quantityNominal = prompt("Enter the nominal ",25);
let total = quantityKopeck * quantityNominal;
const uah = Math.floor(total /100);
const kopeck =  total % 100;

alert ("Sum = " + uah + " uah " + " " + kopeck + " kopeck ");

