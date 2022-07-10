let fieldsRow = +prompt (`Enter the width of the field`);
let fieldsColumn = +prompt (`Enter the height of the field`);
document.write(`<h1 text-align="center">Black Sea</h1>`);
document.write(`<table border=3 class="center">`);
setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, "1000")
for (let i = 0; i < fieldsRow; i++) {
    document.write(`<tr">`);
    for (let j = 0; j < fieldsColumn; j++) {
  
      document.write(`<td id=${i+1}${j+1} class="city"></td>`);
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);