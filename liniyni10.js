let quantityKopeck = prompt("Enter the quantity of kopeck", 450);
const uah = Math.floor(quantityKopeck / 100);
const kopeck = quantityKopeck % 100

alert("Total = " + uah + " uah " + " " + kopeck + " kopeck ");
