// Задача 8. Вивести на екран
// 0
// 00
// 000
// 0000
// 00000
// 0
// 00
// 000
// 0000
// 00000
// 0Z
// 00
// 000
// 0000
// 00000

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        document.write(`0`);
        for (let k = 0; j > k; k++) {
            document.write(`0`);
        }
        document.write("<br>");
    }
}


