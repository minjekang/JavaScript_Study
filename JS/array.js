// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍅','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits['0']);    // 배열 처음
console.log(fruits['1']);
console.log(fruits['2']);
console.log(fruits[fruits.length - 1]);   // 배열의 마지막

console.clear();

// 3. Looping over an array
// print all fruits

// (1) for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// (2) for of
for (let fruit of fruits) {
    console.log(fruit);
}

// (3) forEach
fruits.forEach((fruit) =>        // function (fruit, index)  >>  (fruit, index) =>
    console.log(fruit))


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍑', '🍍');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍑', '🍍');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push!
// splice: remove an item by index position
fruits.push('🥝', '🍉', '🍋');
console.log(fruits);
fruits.splice(1, 1);     // 1부터 1까지 지움.
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍒');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍇', '🍈'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍋'));
console.log(fruits.indexOf('🍒'));
console.log(fruits.indexOf('🍍'));

// includes
console.log(fruits.includes('🌭'));
console.log(fruits.includes('🍔'));

// lastIndexOf
console.clear();
fruits.push('🍅');
console.log(fruits);
console.log(fruits.indexOf('🍅'));
console.log(fruits.lastIndexOf('🍅'));
