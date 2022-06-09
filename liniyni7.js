const number = prompt("Enter your number=", 2.785556); // що робить parseFloat і чи треба він тут?

const integer = Math.floor(number);
// const float = integer - number; // спробуй з використанням операції "остача від ділення" - %
const float = number % 1;
alert(" Integer part of your number = " + integer);
alert(" Float part of your number = " + float.toFixed(6)); // що робить toFixed і чи треба він тут? - Він все-таки тут треба!!!


