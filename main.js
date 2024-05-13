let body = document.querySelector('body');
body.innerHTML = `
<h1>Beginner Calculator</h1>
<div class="container">
    <div class="screen">
        <div>
            <input type="text" id="numpad-el">
            <span id="sum-el"></span>
        </div>
    </div>
    <div class="grid-container">
    </div>
</div>
`
// let header = document.createElement('h1');
// header.textContent = 'Beginner Calculator';
// let container = document.createElement('div');
// container.classList = 'container';
// body.appendChild(header);
// body.appendChild(container);

// let screen = document.createElement('div');
// screen.classList = 'screen';
// let gridContainer = document.createElement('div');
// gridContainer.classList = 'grid-container';
// container.appendChild(screen);
// container.appendChild(gridContainer);

// let div = document.createElement('div');
// screen.appendChild(div)

// let input = document.createElement('input')
// input.type = 'text'
// input.id = 'numpad-el'
// let span = document.createElement('span')
// span.id = 'sum-el'
// div.appendChild(input)
// div.appendChild(span)
// ვიცი რომ ესე ჯობს მაგრამ innerHTML-ის დახმარებით უფრო მოკლე გამოდის 
// და ჩემი აზრით, ვიზუალურად უფრო კარგია, რადგან HTML-ს ზუსტად იგივე ნაირად წერ 

let numEl = document.getElementById("numpad-el");
let sumEl = document.getElementById("sum-el");

for (let i = 0; i < 10; i++){
    window['click' + i] = () =>{
        numEl.value += i;
    }
}
// ChatGPT-ის ვერსიაა და ბოლომდე არ ვიცი რას აკეთებს window იმის გარდა,
// რომ შესაძლებლობას გაძლევს სახელი და ცვლადი შეაერთო

let operation = symbol => {
    numEl.value += symbol;
}
let clear = () =>{
    let arr = numEl.value.split('');
    arr[arr.length - 1] = '';
    numEl.value = arr.join('');
}
let allClear = () =>{
    numEl.value = '';
    sumEl.innerHTML = '';
}
let dot = () =>{
    numEl.value += '.';
}
let neg = () =>{
    numEl.value = Number(numEl.value) * -1
    if(isNaN(numEl.value)){
        numEl.value = '';
    }
}
let sqrt = () =>{
    let input = numEl.value.replace('√', '');
    let result = `${Math.round(eval(input) * 10000) / 10000}`;
    sumEl.innerHTML = '= ' + Math.round(Math.sqrt(Number(result))* 10000) / 10000;
    numEl.value = '√' + input;
}
let prcent = () =>{
    let arr = numEl.value.split(' ');
    if(!isNaN(parseFloat(arr[arr.length - 1]))){
        arr[arr.length - 1] /= 100;
        numEl.value = arr.join(' ');
    }
}
let equal = () => {
    let result = `${Math.round(eval(numEl.value) * 10000) / 10000}`;
    sumEl.innerHTML = "= " + result;
}
let add = () =>{
    operation('+')
}
let subtract = () =>{
    operation('-')
}
let divide = () =>{
    operation('/')
}
let multiply = () =>{
    operation('*')
}

let opperations = [
    'C', '&radic;', '%', '=', 
    '1', '2', '3', '&div;', 
    '4', '5', '6', '&times;', 
    '7', '8', '9','+', 
    '&pm;', '0', '.', '-'
]
let functions = [
    clear, sqrt, prcent, 
    equal, click1, click2, click3, 
    divide, click4, click5, click6, 
    multiply, click7, click8, click9, 
    add, neg, click0, dot, subtract
]
let gridContainer = document.querySelector('.grid-container')
for(let i = 0; i < opperations.length; i++){
    let button = document.createElement('div');
    button.id = `but-${i}`;
    button.innerHTML = opperations[i];
    button.addEventListener('click', functions[i]);
    gridContainer.appendChild(button);
}
// ესეც ChatGPT-ის დამსახურება
// gridContainer.innerHTML += `<button id='but-${i}'>${opperations[i]}</button>`
// window['but' + i] = document.querySelector(`#but-${i}`)
// window['but' + i].addEventListener('click', functions[i])
// ---------------------------------------------------
// let but_i = document.querySelector(`#but-${i}`)
// but_i.addEventListener('click', functions[i])
// ეს ორივე ვერსია რატომღაც მხოლოდ ბოლო button-ს უტოვებს event-ს
// წესით but_i და window['but' + i] ერთი და იგივე რამეს აკეთებს

let butC = document.getElementById('but-0')
butC.addEventListener('dblclick', allClear)

document.addEventListener('keydown', function(event){
    if (event.key == 'Enter' || event.key == '='){
        equal()
        console.log('pressed')
    } else if(event.key == 'q') {
        sqrt()
        console.log('pressed')
    } else if(event.key == 'Backspace'){
        let e = () =>{
            let arr = numEl.value.split('');
            arr[arr.length - 1] = '';
            numEl.value = arr.join('');
        }
        e()
    } else if(event.key == 'Delete'){
        allClear()
    } for(let i = 0; i < 10; i++){
        if(event.key == `${i}`){
            window['click' + i]();
        }
    } if(event.key == '+'){
        add()
    } else if(event.key == '-'){
        subtract()
    } else if(event.key == '/'){
        divide()
    } else if(event.key == '*'){
        multiply()
    } else if(event.key == '%'){
        prcent()
    } else if(event.key == '.'){
        dot()
    }
})
