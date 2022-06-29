// Задача 4. Вивести на екран
// 00 00 00 00 00 00 00
// -- -- -- -- -- -- -- 
// \/ \/ \/ \/ \/ \/ \/
// 00 00 00 00 00 00 00
// -- -- -- -- -- -- -- 
// \/ \/ \/ \/ \/ \/ \/
// 00 00 00 00 00 00 00
// -- -- -- -- -- -- -- 
// \/ \/ \/ \/ \/ \/ \/

// for (початок; умова; крок) {
//     // ... тіло циклу ...
//   }
document.write("<pre>");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
        document.write("00 ");
    }
    document.write("<br>");

    for (let j = 0; j < 7; j++) {
        document.write("-- ");
    }
    document.write("<br>");
    for (let j = 0; j < 7; j++) {
        document.write("\\/ ");
    }
    document.write("<br>");

}
document.write("</pre>");


