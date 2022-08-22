
let letter = prompt("Enter your letter", "Z");
let shift = parseInt(prompt("Shift=", 3));
letter = letter.charCodeAt();
console.log('letter', letter);
const startIntervalAt = 65;
let result = letter - startIntervalAt;
result = (result + shift) % 26 + startIntervalAt;
console.log("result" + result)
result = String.fromCharCode(result);
console.log("result" + result)
alert(`result = ${result} `);










