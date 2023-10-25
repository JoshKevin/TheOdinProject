const display = document.querySelector('#input-display')
const clear = document.querySelector('#clear')
const del = document.querySelector('del')
const operators = document.querySelectorAll('.operator')
const numbers = document.querySelectorAll('.number')
// let sign = '';
// let prevValue = '';
// let curValue = ''

clear.addEventListener('click', (e) => {
    display.innerText = ''
    // sign.innerText = ''
    // prevValue.innerText = ''
    // curValue.innerText = ''
});

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        const num = e.target.innerText
        display.innerText += num;
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        const sign = e.target.innerText;

        if (sign === '=') {
            if (display.innerText.includes('*')) {
                const split = display.innerText.split('*');
                calculate(parseFloat(split[0]), '*', parseFloat(split[1]))
            }
            if (display.innerText.includes('/')) {
                const split = display.innerText.split('/');
                calculate(parseFloat(split[0]), '/', parseFloat(split[1]))
            }
            if (display.innerText.includes('+')) {
                const split = display.innerText.split('+');
                calculate(parseFloat(split[0]), '+', parseFloat(split[1]))
            }
            if (display.innerText.includes('-')) {
                const split = display.innerText.split('-');
                calculate(parseFloat(split[0]), '-', parseFloat(split[1]))
            }
            return;
        }
        display.innerText += sign;
    })
})

function calculate(num1, sign, num2) {
    if (sign === '*') {
        console.log(num1 * num2);
    }
    if (sign === '/') {
        console.log(num1 / num2);
    }
    if (sign === '+') {
        console.log(num1 + num2);
    }
    if (sign === '-') {
        console.log(num1 - num2);
    }
}

// console.log(calculate(5, '*', 3));

