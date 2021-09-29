// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1);
console.log(1 ** 1);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// .4 Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||
console.log(`or: ${value1 || value2 || check()}`);

// &&
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('😱');
    }
    return true;
}

// !
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion  //타입신경써서 검사
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const kang1 = { name: 'kang'};
const kang2 = { name: 'kang'};
const kang3 = kang1;
console.log(kang1 == kang2);
console.log(kang1 === kang2);
console.log(kang1 === kang3);

 // equality - puzzler
 console.log(0 == false); //t
 console.log(0 === false); //f
 console.log('' == false); //t
 console.log('' === false); //f
 console.log(null == undefined); //t
 console.log(null === undefined); //f

 // 8. Conditinal operators: if
a = 'yaa';
// if (a === b){
    
// }
// else if(a == b){

// }
// else {

// }

// 9, Ternary operator: ?
// condition ? value1 : value2;

console.log(a === 'kang' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value checks
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love');
        break;
    default:
        console.log('same all!');
        break
}

// 11. Loops
// while
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while
do {
    console.log(`while: ${i}`);
    i--;
}while(i > 0);

// for 
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2){
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

for (let i = 0; i <= 10; i++){
    if(i%2 == 0){
        console.log(i);
    }
    else{
        continue;
    }
}

for (let i = 0; i <= 10; i++){
    if(i > 8){
        break;
    }
    else{
        console.log(i);
        continue;
    }
}