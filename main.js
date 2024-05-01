// <===================================================>
// ყველაფერი თითქმის ჩემი გაკეთებულია
// საითზე მარტო იყო num1 და num2 წამოყებული
// <===================================================>

let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");
let sumEl = document.getElementById("sum-el");
let oppEl = document.getElementById("opp-el");
let butAdd = document.getElementById("but-add");
let butSub = document.getElementById("but-sub");
let butDiv = document.getElementById("but-div");
let butMult = document.getElementById("but-mult");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
let add = () => {
    let result = Number(num1.value) + Number(num2.value);
    sumEl.innerHTML = "Sum: " + result;
    oppEl.innerHTML = "+";
    // setTimeout(() => sumEl.innerHTML = "Sum: ", 3000)
    
    // <===================================================>
    // თავიდან მინდოდა რომ დროის მერე გამქრალიყვნენ,
    // მაგრამ ბევრი ღილაკის დაჭერა დროს ურევდა
    // უფრო მალე ქრება ახალი ტექსტი, რადგან ძველი ფუნქცია დროის ათვლას არ მორჩა
    // <===================================================>
}
let subtract = () => {
    let result = num1.value - num2.value;
    sumEl.innerHTML = "Sum: " + result;
    oppEl.innerHTML = "-";
    // setTimeout(() => sumEl.innerHTML = "Sum: ", 3000)    
}
let divide = () => {
    let result = num1.value / num2.value;
    sumEl.innerHTML = "Sum: " + result;
    oppEl.innerHTML = "/";
    // setTimeout(() => sumEl.innerHTML = "Sum: ", 3000)    
}
let multiply = () => {
    let result = num1.value * num2.value;
    sumEl.innerHTML = "Sum: " + result;
    oppEl.innerHTML = "x";
    // setTimeout(() => sumEl.innerHTML = "Sum: ", 3000)    
}
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
butAdd.addEventListener('click', add);
butSub.addEventListener('click', subtract);
butDiv.addEventListener('click', divide);
butMult.addEventListener('click', multiply);