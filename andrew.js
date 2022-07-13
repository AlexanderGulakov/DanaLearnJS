/*Задача 20. На екрані виводиться меню: 
1. Сказати «Привіт». 
2. Сказати «Зачекай». 
3. Сказати «До побачення». 
4. Вихід.
Шляхом вибору пунктів меню виводити відповідні повідомлення, поки не буде вибрано пункт номер 4.*/

let greetingUser = 0;

do {
    greetingUser = parseInt(prompt('Press "1" for "Hello"; 2 for "Wait"; 3 for "Good bye"; 4 to exit'));

    switch (greetingUser) {
        case 1:
            alert('Hello, my dear friend!');
            break
        case 2:
            alert('Wait, don`t leave me alone!');
            break
        case 3:
            alert('Good bye, you will come back!');
            break
        case 4:
            alert('Please, come again');
            break
        default:
            alert('You pressed wrong number');
    }

} while (greetingUser !== 4)