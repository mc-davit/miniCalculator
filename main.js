const body = document.querySelector('body');
body.innerHTML = `
<h1>Beginner Calculator</h1>
<div class="container">
    <div class="screen">
        <div>
            <input type="text" id="numpad-el" disabled>
            <span id="sum-el"></span>
        </div>
    </div>
    <div class="grid-container">
    </div>
</div>
`

const numEl = document.getElementById("numpad-el");
const sumEl = document.getElementById("sum-el");

for (let i = 0; i < 10; i++){
    window['click' + i] = () =>{
        numEl.value += i;
    }
}
const operation = symbol => {
    numEl.value += symbol;
}
const clear = () =>{
    const arr = numEl.value.split('');
    arr[arr.length - 1] = '';
    numEl.value = arr.join('');
}
const allClear = () =>{
    numEl.value = '';
    sumEl.innerHTML = '';
}
const dot = () =>{
    if(!(numEl.value.includes('.'))){
        numEl.value += '.';
    }
}
const neg = () =>{
    const arr = numEl.value.split(' ');
    if(!isNaN(parseFloat(arr[arr.length - 1]))){
        arr[arr.length - 1] /= -1;
        numEl.value = arr.join(' ');
    }
}
const sqrt = () =>{
    const input = numEl.value.replace('√', '');
    const result = `${Math.round(eval(input) * 10000) / 10000}`;
    const root = Math.round(Math.sqrt(Number(result))* 10000) / 10000;
    numEl.value = '√' + input;
    if (root >= 0){
        sumEl.innerHTML = '= ' + root;
    } else {
        sumEl.innerHTML = 'undefined';
    }
}
const pow2 = () =>{
    const arr = numEl.value.split(' ');
    if(!isNaN(parseFloat(arr[arr.length - 1]))){
        arr[arr.length - 1] **= 2;
        numEl.value = arr.join(' ');
    }
}
const pow = () =>{
    // const arr = numEl.value.split(' ');
    // if(!isNaN(parseFloat(arr[arr.length - 1]))){
    //     arr[arr.length - 1] **= 2;
    //     numEl.value = arr.join(' ');
    // }
    numEl.value = 'still working'
}
const prcent = () =>{
    const arr = numEl.value.split(' ');
    if(!isNaN(parseFloat(arr[arr.length - 1]))){
        arr[arr.length - 1] /= 100;
        numEl.value = arr.join(' ');
    }
}
const equal = () => {
    const result = `${Math.round(eval(numEl.value) * 10000) / 10000}`;
    sumEl.innerHTML = "= " + result;
}
const add = () =>{
    operation(' + ');
}
const subtract = () =>{
    operation(' - ');
}
const divide = () =>{
    operation(' / ');
}
const multiply = () =>{
    operation(' * ');
}
const opParent = () =>{
    operation('(');
}
const clParent = () =>{
    operation(')');
}

const opperations = [
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
    click1, click2, click3, 
    divide, click4, click5, click6, 
    multiply, click7, click8, click9, 
    add, neg, click0, dot, subtract
]
const gridContainer = document.querySelector('.grid-container')
for(let i = 0; i < opperations.length; i++){
    const button = document.createElement('div');
    button.id = `but-${i}`;
    button.innerHTML = opperations[i];
    button.addEventListener('click', functions[i]);
    gridContainer.appendChild(button);
}

const butC = document.getElementById('but-0')
butC.addEventListener('dblclick', allClear)

document.addEventListener('keydown', function(event){
    const key = event.key;
    const index = opperations.indexOf(key);
    if (index !== -1) {
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
                document.getElementById('but-6').classList.add('active');
                pow2();
                break;
        }
    }
});

document.addEventListener('keyup', function(event){
    const key = event.key;
    const index = opperations.indexOf(key);
    if (index !== -1) {
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
            case 'Delete':
                document.getElementById('but-0').classList.remove('active');
                break;
            case 'n':
                document.getElementById('but-20').classList.remove('active');
                break;
            case 'y':
                document.getElementById('but-6').classList.remove('active');
                break;
        }
    }
});