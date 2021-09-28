// 1. use strict
'use strict';
// 2. Variable
// let (added in ES6)
let globalname = 'kangmin';

{
let name = 'kang';
console.log(name);
name = 'hello';
console.log(name);
}

console.log(name);
console.log(globalname);


// var (don't use!)  no block scope

// 3. Constant  값이 변하지 않음
// 다시 바꾸지 않을 데이터타입

const day = 7;
const maxnum = 5;

// 4. Variable types 
// primitive, single item: number, string, boolean, null
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log('value: ${count}, type: ${typeof count}' );
console.log('value: ${size}, type: ${typeof size}' );

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

// BigInt 숫자뒤에 'n'

//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log('value: ${greeting}, type: ${typeof greeting}' );
const helloBob = 'hi ${brendan}!'; // template literals (string)

console.log('value: ${helloBob}, type: ${typeof helloBob}' ); // =
console.log('value: ' + helloBob + 'type: ' + typeof helloBob) // =


// Boolean
// false: 0, null, undefined, NaN, ''
// true: any ather value
const canRead = 'true';
const test = 3 < 1; // false
console.log('value: ${canRead}, type: ${typeof canRead}' ); // =
console.log('value: ${test}, type: ${typeof test}' ); // =
