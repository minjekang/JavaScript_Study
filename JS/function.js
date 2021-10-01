// Function 

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHelllo(){
    console.log('Hello');
}
printHelllo();

function log(message) {
    console.log(message);
}
log('Hellooo');
log(1234); 

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
} 
const kang = { name: 'kang' };
console.log(kang);
changeName(kang);
console.log(kang);

// 3. Default Parameters (added in ES6)
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
