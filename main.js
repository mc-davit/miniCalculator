const body = document.querySelector('body');
body.innerHTML = `
<h1>Beginner Calculator</h1>
<div class="container">
    <div class="screen">
        <div>
            <p id="numpad-el"></p>
            <span id="sum-el"></span>
        </div>
    </div>
    <div class="grid-container">
    </div>
</div>
`

const numEl = document.getElementById("numpad-el");
const sumEl = document.getElementById("sum-el");

let clicks = []
for (let i = 0; i < 10; i++){
    clicks[i] = () =>{
            numEl.innerHTML += i;
        };
}
const operation = symbol => {
    numEl.innerHTML += symbol;
}
const clear = () =>{
    numEl.innerHTML = numEl.innerHTML.slice(0, -1);
}
const allClear = () =>{
    numEl.innerHTML = '';
    sumEl.innerHTML = '';
}
const dot = () => {
    const lastNumberMatch = numEl.innerHTML.match(/(\d+(\.\d*)?)$/);
    const lastNumber = lastNumberMatch ? lastNumberMatch[0] : '';
    if (!lastNumber.includes('.')) {
        numEl.innerHTML += '.';
    }
};
const neg = () => {
    const lastNumberMatch = numEl.innerHTML.match(/-?\d+(\.\d*)?$/);
    if (lastNumberMatch) {
        const lastNumber = lastNumberMatch[0];
        const negatedNumber = parseFloat(lastNumber) * -1;
        numEl.innerHTML = numEl.innerHTML.slice(0, -lastNumber.length) + negatedNumber;
    }
};
const sqrt = () =>{
    const input = numEl.innerHTML.replace('√', '');
    const result = `${Math.round(eval(input) * 10000) / 10000}`;
    const root = Math.round(Math.sqrt(Number(result))* 10000) / 10000;
    numEl.innerHTML = '√' + input;
    if (root >= 0){
        sumEl.innerHTML = '= ' + root;
    } else {
        sumEl.innerHTML = 'undefined';
    }
}
const pow2 = () => {
    const lastNumberMatch = numEl.innerHTML.match(/(\d+(\.\d*)?)$/);
    if (lastNumberMatch) {
        const lastNumber = lastNumberMatch[0];
        const squaredNumber = Math.pow(parseFloat(lastNumber), 2);
        numEl.innerHTML = numEl.innerHTML.slice(0, -lastNumber.length) + squaredNumber;
    }
};
const pow = () =>{
    operation('**');
}
const prcent = () => {
    const lastNumberMatch = numEl.innerHTML.match(/(\d+(\.\d*)?)$/);
    if (lastNumberMatch) {
        const lastNumber = lastNumberMatch[0];
        const percentage = parseFloat(lastNumber) / 100;
        numEl.innerHTML = numEl.innerHTML.slice(0, -lastNumber.length) + percentage;
    }
};
const equal = () => {
    let result = `${Math.round(eval(numEl.innerHTML) * 10000) / 10000}`;
    const threshold = 9999999;
    if (result > threshold) {
        result = Number(result).toExponential(2);
    } else {
        result = Number(result).toString();
    }
    sumEl.innerHTML = "= " + result;
}
const add = () =>{
    operation('+');
}
const subtract = () =>{
    operation('-');
}
const divide = () =>{
    operation('/');
}
const multiply = () =>{
    operation('*');
}
const opParent = () =>{
    operation('(');
}
const clParent = () =>{
    operation(')');
}

const operations = [
    'C', '&radic;', '%', '=', 
    '(', ')', 'x<sup>2</sup>', 'x<sup>y</sup>',
    '1', '2', '3', '/', 
    '4', '5', '6', '*', 
    '7', '8', '9','+', 
    '<sup>+</sup>/<sub>-</sub>', '0', '.', '-'
]
const functions = [
    clear, sqrt, prcent, equal,
    opParent, clParent, pow2, pow, 
    clicks[1], clicks[2], clicks[3], 
    divide, clicks[4], clicks[5], clicks[6], 
    multiply, clicks[7], clicks[8], clicks[9], 
    add, neg, clicks[0], dot, subtract
]
const gridContainer = document.querySelector('.grid-container')
const titles = {
    0: `'Backspace' clear
'Delete' / 'Ctrl+Backspace' all clear`,
    1: `Press 'q'`,
    2: ``,
    3: `Press '=' or 'enter'`,
    6: ``,
    7: `Press 'y'`,
    19: `Press '+' (shift + =)`,
    20: `Press 'n'`
}
let counter = 0
for(let i = 0; i < operations.length; i++){
    const button = document.createElement('div');
    button.id = `but-${i}`;
    button.innerHTML = operations[i];
    button.title = titles[i] || `Press '${operations[i]}'`;
    button.addEventListener('click', functions[i]);
    gridContainer.appendChild(button);
}

const butC = document.getElementById('but-0')
butC.addEventListener('dblclick', allClear)

document.addEventListener('keydown', function(event){
    const key = event.key;
    const index = operations.indexOf(key);
    if (index !== -1 && index !== 0) {
        document.getElementById(`but-${index}`).classList.add('active');
        functions[index]();
    } else {
        switch (key) {
            case 'Enter':
                document.getElementById('but-3').classList.add('active');
                equal();
                break;
            case 'q':
                document.getElementById('but-1').classList.add('active');
                sqrt();
                break;
            case 'Backspace':
                document.getElementById('but-0').classList.add('active');
                if (event.ctrlKey)
                    allClear()
                else
                    clear();
                break;
            case 'Delete':
                document.getElementById('but-0').classList.add('active');
                allClear();
                break;
            case 'n':
                document.getElementById('but-20').classList.add('active');
                neg();
                break;
            case 'y':
                document.getElementById('but-7').classList.add('active');
                pow();
                break;
        }
    }
});

document.addEventListener('keyup', function(event){
    const key = event.key;
    const index = operations.indexOf(key);
    if (index !== -1 && index !== 0) {
        document.getElementById(`but-${index}`).classList.remove('active');
    } else {
        switch (key) {
            case 'Enter':
                document.getElementById('but-3').classList.remove('active');
                break;
            case 'q':
                document.getElementById('but-1').classList.remove('active');
                break;

            case 'Backspace':
                if (event.ctrlKey)
                    setTimeout(() => {
                        document.getElementById('but-0').classList.remove('active')
                    }, 350)
                else
                    document.getElementById('but-0').classList.remove('active');
                break;
            case 'Delete':
                setTimeout(() => {
                    document.getElementById('but-0').classList.remove('active')
                }, 350)
                break;
            case 'n':
                document.getElementById('but-20').classList.remove('active');
                break;
            case 'y':
                document.getElementById('but-7').classList.remove('active');
                break;
        }
    }
});
