// Задача 6. Вивести на екран
// 1.1
// 2.12
// 3.123
// . . . 	
// 9.123456789

for (let i = 0; i < 9; i++) {
    document.write(`${i + 1}.`);

    for (let k = 0; i >= k ; k++) {
        document.write(k+1);
    }
     
    document.write("<br>");
}





