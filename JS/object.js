// Objects
// a collection of related data and/or functionality.
// object = { key : value };

// 1. Literals and properties
const obj1 = {};
const obj2 = new Object();

// const name = 'kang';
// const age = 17;
// print(name, age);
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const kang = {name: 'kang', age: 17};
print(kang);

kang.hasjob = true;
console.log(kang.hasjob);

delete kang.hasjob;
console.log(kang.hasjob);

// 2. Computed properties
// key shoud be always string
console.log(kang.name);
console.log(kang['name']);  //str
kang['hasjob'] = true;
console.log(kang.hasjob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(kang, 'name');
printValue(kang, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('min', 102);
console.log(person4.name);
console.log(person4.age);

// 4. Constructor Function
function Person(name, age) {
    // return{
    //     name,
    //     age,
    // };
    this.name = name;
    this.age = age;
    // this {};
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in kang);
console.log('age' in kang);
console.log('random' in kang);
console.log(kang.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in kang){
    console.log(key);
}

// dor (value of iterable)
const array = [1, 2, 3, 4];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
for (value of array) {
    console.log(value);
}

// 7. Cloning
// objrct.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'kang', age: 17};
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
