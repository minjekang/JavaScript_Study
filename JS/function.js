'use strict';
// Function 

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHelllo() {
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
const kang = {
    name: 'kang'
};
console.log(kang);
changeName(kang);
console.log(kang);

// 3. Default Parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    // if(from === undefined){
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global';

function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);

    function printAnother() {
        console.log(messge);
        let childMessage = 'Helloo';

    }
    //console.log(childMessage); // 오류
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad
function upgrade(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

//good
function upgrade(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

const print = function () {
    console.log('print');
};
print();
const printAg = print;
printAg();
const sumAg = sum;
console.log(sumAg(1, 4));

// Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('Yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('No!');

}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function(){
//     console.log('simplePrint');
// };
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
simplePrint();
add(1, 8);
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();