// Формування накладної. Вводиться назва товару, кількість, ціна і рік.  
// Значення року вводиться користувачем або ж дорівнює 2017 (у випадку, якщо користувач не ввів значення). Перевірити коректність введених даних . У випадку некоректності вивести відповідне повідомлення.
// ===========================



const productName = prompt("Write the name of the product ");
const quantity = parseInt(prompt("Write the quantity"));
const price = parseFloat(prompt("Enter your price"));
const year = parseInt(prompt("Write a year")) || 2022;

if (!productName || !quantity || !price) {
    alert(`The data entered is incorrect`)
}

else {
    alert(`OK `)
}


