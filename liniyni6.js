let firstA = prompt("A=", 1); // що робить parseFloat і чи треба він тут?
let firstB = prompt("B=", 2);
let firstC = prompt("C=", 3);
let blanc = firstA;
firstA = firstB;
firstB = firstC;
firstC = blanc;
alert("A =" + firstA + "B =" + firstB + "C=" + firstC);


