/**
 * Frontend Interview Questions: Falsy Values
 * 
 * Q: What are falsy values in JavaScript?
 * 
 */

if(null) {
    console.log('null')
}

if(undefined) {
    console.log('undefined')
}

const arr = [];

if(arr.length > 0) {
    console.log('0')
}

const word = '';

if(word.length > 0) {
    console.log('empty')
}

if(false) {
    console.log('false')
}

/**
 * 
 * Q: What are the differences between const, let, and var?
 */

// var firstNameVar;

if(false) {
    let firstNameLet = 'Arzu';
    var firstNameVar = 'Arzu';
}

// console.log(firstNameVar);
// console.log(firstNameLet);

const PI = 3.14;
const user = {
    firstName: 'D-Money'
};

// PI = 3.145;
console.log(PI);
user.firstName = 'Arzu';

/**
 * Q: How does == vs === differ?
 */

const value1 = 5;
const value2 = '5';

console.log(value1 == value2);
console.log(value1 === value2);