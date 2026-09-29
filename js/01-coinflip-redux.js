document.write(`<h2>The “Coin Flip” Game Redux</h2>`);

let coinFlip;
let randomNum;

coinFlip = prompt("Input the amount of loops to perform...", "Number...");


for (let i = 1; i <= coinFlip; i++) {
    randomNum = Math.round(Math.random());
    if (randomNum == 0) console.log(`Loop #${i} // Number: ${randomNum} // Heads`); 
    else console.log(`Loop #${i} // Number: ${randomNum} // Tails`);
}