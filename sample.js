let firstNumber = parseInt(prompt("Enter first number", 3));
let secondNumber = parseInt(prompt("Enter second number", 5));

if (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
        firstNumber = 0;
    }
    else {
        secondNumber = 0;
        //document.write("first number="+firstNumber+" ,second number="+secondNumber);
        alert(`first number = ${firstNumber}, second number= ${secondNumber}`);
    }
}
else if(some_condition) {
    some code
}
else {
    alert(`They are equal!`)
}