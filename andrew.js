document.write('<pre>')
for (let l = 0; l < 4; l++) {
    for (let k = 3; k > l; k--) {
        document.write(' ');

    }

    for (let m = 0; m <= 2 * l; m++) {

        document.write('0');

    }
    document.write('<br>');
}

/*Задача 9. Вивести на екран
   0
  000
 00000
0000000
   0
  000
 00000
0000000
   0
  000
 00000
0000000*/

document.write('<pre>')

for (i = 0; i < 3; i++) {

    for (let j = 0; j < 4; j++) {
        for (k = 4; k > j; k--)

            document.write(' ');

        for (l = 0; l <= 2 * j; l++)

            document.write('0');

        document.write('<br>');
    }

}

document.write('</pre>')