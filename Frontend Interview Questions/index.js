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

/**
 * Q: What is the difference between undefined and null?
 */

const user2 = {

};

console.log(user.firstName);
console.log(user2.firstName)

/**
 * Q: What do the spread and rest operators do?
 */

const users = ['Dylan', 'Per', 'Dollan'];
const allUsers = ['Olivia', ...users];
console.log(allUsers);

const user = { firstName: 'Arzu', lastName: 'Caner', channel: 'codingtutorials360'}
const defaults = { channel: 'zero2hero', ...user };
console.log(defaults);

const {channel, ...remainder} = defaults;

console.log(remainder)

function assnums(...nums){
    return nums.reduce((total, current) => { return total + current; }, 0)
}

console.log(addNums(1,2,3))
console.log(addNums(1,2))

/**
 * 
 * Q: What is and why might you destructure an object or array?
 */

const dob = [10, 25, 1875];
const [day, month, year] = dob;

const user = {
    f: 'Arzu',
    l: 'Caner'
};

const {f: firstName, l: lastName} = user;