// Задача 3. Конвертер валют.

const convertCurrency = () => {
    const inputNums = document.getElementsByTagName('input');
    console.log(inputNums)

    const moneyAmount = parseFloat(inputNums[0].value);
    console.log(moneyAmount)
    const currencyExchangeRate = parseFloat(inputNums[1].value);
    console.log(currencyExchangeRate)
    const convertedCurrency = (moneyAmount / currencyExchangeRate).toFixed(2);
    inputNums[3].value = convertedCurrency;                         // Прошу звернути увагу, підозрюю, що вирішення недосконале. Бо я пропустив один інпут (який є кнопкою) і одразу хардкоджу третій елемент колекції
}