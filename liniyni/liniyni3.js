let pricePen = parseFloat(prompt("Enter the price pen", 10));
let quantityPen = parseInt(prompt("Enter the quantity pen", 2));
let pricePencil = parseFloat(prompt("Enter the price pencil", 5));
let quantityPencil = parseInt(prompt("Enter the quantity pencil", 3));
let totalCostPen = pricePen * quantityPen;
let totalCostPencil = pricePencil * quantityPencil;
let totalCostPenPencil = totalCostPen + totalCostPencil;

alert("Total Cost Pen = " + totalCostPen.toFixed(2) + " uah" +"\n" +  "Total Coast Pencil = " + totalCostPencil.toFixed(2) + " uah" +"\n" + "Total Coast Pen and Pencil = " +
    totalCostPenPencil.toFixed(2) + " uah");