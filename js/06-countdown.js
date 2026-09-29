document.write(`<h2>Countdown</h2>`);

let usrInput = prompt('Enter a number to countdown from...', 'Number...');

for (let i = usrInput; i >= 0; i--) {
    console.log(`#${i}`);
}

document.write(`<h4>Check the console...</h4>`);