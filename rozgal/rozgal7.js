// На роботу компаніє приймає працівників від 32 до 45 років. 
// З клавіатури вводиться вік претендента. 
// З’ясувати, чи може він бути прийнятим на роботу.

const ageOfTheCandidate = parseInt(prompt("Write your age "));

if (ageOfTheCandidate > 31 && ageOfTheCandidate < 46) {
    alert(`You are accepted.`)
}

else {
    alert(`You don't fit.`)
}