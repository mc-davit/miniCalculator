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
    let result = `${Math.round(eval(numEl.value) * 10000000) / 10000000}`;
    sumEl.innerHTML = '= ' + Math.round(Math.sqrt(Number(result))* 10000000) / 10000000;
    numEl.value = '√' + numEl.value;
}
let prcent = () =>{
    let arr = numEl.value.split(' ')
    if(!isNaN(arr[arr.length - 1])){
        arr[arr.length - 1] /= 100
        numEl.value = arr.join(' ')
    }
}
let equal = () => {
    let result = `${Math.round(eval(numEl.value) * 10000000) / 10000000}`;
    sumEl.innerHTML = "= " + result;
}
let add = () =>{
    operation(' + ')
}
let subtract = () =>{
    operation(' - ')
}
let divide = () =>{
    operation(' / ')
}
let multiply = () =>{
    operation(' * ')
}

let opperations = [
    'C', '√', '%', '=', 
    '1', '2', '3', '/', 
    '4', '5', '6', 'x', 
    '7', '8', '9','+', 
    '±', '0', '.', '-'
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
    let button = document.createElement('button');
    button.id = `but-${i}`;
    button.textContent = opperations[i];
    button.addEventListener('click', functions[i]);
    gridContainer.appendChild(button);
}
// ესეც ChatGPT-ის დამსახურება, ჩემი ვერსიით რომ შემექმნა ცვლადი
// სახელით but_i(ეს ვიპოვე window-ის ალტერნატიულად როგორ გამეერთებინა ცვლადი და სახელი)
// და მაგას ჰქონოდა id `but-${i}` მუშაობდა თითქმის, მაგრამ 
// but_i.addEventListener('click', functions[i])-მა არ იმუშავა, სამწუხაროდ

document.addEventListener('keydown', function(event){
    if (event.key == 'Enter' || event.key == 'Equal'){
        equal()
    }
})