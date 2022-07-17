const firstRandomNumber = Math.ceil(Math.random() * 10);

const secondRandomNumber = Math.ceil(Math.random() * 10);

let guessRandomNumber = 0;

let isGuessedFirstNumber;

let isGuessedSecondNumber;

let isWinCondition;

let triesQty = 0;

do {

    guessRandomNumber = parseInt(prompt('Guess computer\'s\ two random numbers from "1" to "10"'));

    if (guessRandomNumber === firstRandomNumber) { // тут можна одразу перевіряти чи воно вже не вгадане - і якщо вгадане, то не заходити
        isGuessedFirstNumber = firstRandomNumber; // тут треба давати значення тру/фолс 
        alert(`You have guessed random number! It is ${firstRandomNumber}`);
    }
    if (guessRandomNumber === secondRandomNumber) { // ті самі 2 коментаря
        isGuessedSecondNumber = secondRandomNumber;
        alert(`You have guessed another random number! It is ${secondRandomNumber}`);
    }

    isWinCondition = (isGuessedFirstNumber === firstRandomNumber && isGuessedSecondNumber === secondRandomNumber); // це не треба тут перевіряти

    triesQty++;
    
} while (!isWinCondition) // тут треба сформулювати умову виходу на основі булевих значень, сама змінна isWinCondition не потрібна, там буде все лаконічно і без неї)

alert(`You spent ${triesQty} tries to guess all random numbers!`)