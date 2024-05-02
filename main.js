let numEl = document.getElementById("numpad-el");
let sumEl = document.getElementById("sum-el");
let butAdd = document.getElementById("but-add");
let butSub = document.getElementById("but-sub");
let butDiv = document.getElementById("but-div");
let butMult = document.getElementById("but-mult");
let butEq = document.getElementById("but-eq");
let butDot = document.getElementById('but-.');
let butNeg = document.getElementById('but-neg');
let butC = document.getElementById('but-c');
let butSqrt = document.getElementById('but-sqrt');

for(let i = 0; i < 10; i++){
    let but_i = document.getElementById(`but-${i}`)
    but_i.addEventListener('click', () => {
        numEl.value += i;
    })
}

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
    sumEl.innerHTML = '= ' + Math.round(Math.sqrt(Number(numEl.value)) * 10000000) / 10000000;
    numEl.value = '√' + numEl.value
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

butAdd.addEventListener('click', add);
butSub.addEventListener('click', subtract);
butDiv.addEventListener('click', divide);
butMult.addEventListener('click', multiply);
butEq.addEventListener('click', equal)
butDot.addEventListener('click', dot);
butNeg.addEventListener('click', neg);
butC.addEventListener('click', clear);
butSqrt.addEventListener('click', sqrt);

document.addEventListener('keydown', function(event){
    if (event.key == 'Enter' || event.key == 'Equal'){
        equal()
    }
})