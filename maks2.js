/*33. Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). 
При влучанні броня танка пошкоджується на 30 балів (всього 100). 
Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.*/

// Логіка гри

let tankPosition = Math.ceil(Math.random() * 10); // встановлення початкової позиції танку рандомно
console.log('tankPosition', tankPosition)
let ammoQty = parseInt(prompt('Enter quantity of ammo to destroy a tank')); // введення кількості снарядів
let tankArmorPoints = 100; // втсановлюємо хітпойнти танку
const shotDamage = 30; // урон від одного попадання
let isTankDestroyed = false; // булева змінна булева змінна для визначенн чи танк знищено ЧОМУСЬ НЕ ПРАЦЮЄ !!!!!!!

do {
    let shotPosition = parseInt(prompt(`Choose a cell from "1" to ${fieldLenght}`)); // введення клітинки куди стріляємо
    // let tankMoveRandom = Math.ceil(Math.random() * 2); // змінна для визначення куди рухатись танку, вліво чи вправо
    ammoQty--; // після кожного пострілу мінус один снаряд
    console.log('ammoQty', ammoQty)

    // let isTankDamaged = (); // булева змінна, при якій танк пошкоджено
    if (shotPosition === tankPosition) { // Якщо танк пошкоджено
        tankArmorPoints -= shotDamage; // мінус хітпойнти
        let tankCellShot = document.getElementById(`${tankPosition}`); 
        tankCellShot.textContent = `Tank is damaged! It has ${tankArmorPoints}% of armor!`; // Не знаю як додавати кожен раз новий текст, а не перезаписувати
        tankCellShot.style.backgroundColor = "red"; // позначаємо місце влучання червоним
        alert(`You hit the tank! It has ${tankArmorPoints} armor points now!`);
    }

    if (tankArmorPoints < 1) { // якщо хітпойнти менше 10 - танк знищено і вихід з циклу. Булева змінна чомусь не працює!!!!!!!
        isTankDestroyed = true
        alert(`You destroyed the tank! It's last position was ${tankPosition}`);
        break
    } else if (ammoQty === 0) { // А якщо закінчились снаряди - вихід з циклу
      alert('You are out of ammo! Game over!')
      break
  }

    if (tankMoveRandom === 1) { // якщо рандом = 1, то рухається вліво
        tankPosition -= Math.floor(Math.random() * 2);
        if (tankPosition === 0) {
            tankPosition = 10;
        }
    }
    console.log('tankPosition random 1', tankPosition)

    if (tankMoveRandom === 2) { // якщо рандом = 2, то рухається вправо
        tankPosition += Math.floor(Math.random() * 2);
        if (tankPosition > fieldLenght) {
            tankPosition %= fieldLenght;
        }
        console.log('tankPosition random 2', tankPosition)
    }

    
} while (true)