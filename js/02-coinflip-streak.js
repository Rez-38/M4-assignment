document.write(`<h2>The “Coin Flip Streak” Game</h2>`);

let coinFlip;
let streak = 0;

do {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {streak++; console.log(`Heads`);} else console.log(`Tails`);
} while (coinFlip !== 1)
console.log(`Heads streak: ${streak}`);
document.write(`<h4> You scored Heads ${streak} times in a row... </h4>`);