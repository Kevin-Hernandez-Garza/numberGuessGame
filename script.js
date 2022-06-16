// creating the variable with a question and parsing a number 
let maximum = parseInt(prompt("Enter the maximum number"));

// if the user doesn't enter a valid number then ask them again
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

// We are generating a random number and flooring it to be larger instead of between 0 and 1. (Your Number)
const number = Math.floor(Math.random() * maximum) + 1;
console.log(number);

// guessing the number
let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== number) {
    if (guess === 'q') break;
    // adds 1 to attempts, unless you quit
    attempts++;
    if (guess > number) {
        guess = prompt("Too high of a guess, guess again!");
    } else {
        guess = prompt("Too low, take another guess!");
    }
};

// you quit, you get this message in the console
if (guess ===  'q') {
    console.log("It's okay, no shame in that!");
} else {
    console.log("You did it!");
    console.log(`It took you ${attempts} guesses`);
}
