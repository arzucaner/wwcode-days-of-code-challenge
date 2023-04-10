/* Panic function
Write a PANIC! function. The function should take in a sentence and return the same sentemce in all caps with an exclamation point (!) at the end. Use JavaScript's built in string methods.

If the string is a phrase or sentence, add 😱 emoji in between each word.
*/

function panic(str) {
    return str
    .split(' ')
    .join('😱')
    .toUpperCase() + "!";
}

// Test function
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"))

/* Whispering function
Write a function `whisper` that takes in sentence 
and returns a new sentence in all lowercase letters with "shh..." at the beginning.

The function should also remove an exclamation point 
at the end of sentence, is there is one.
*/

function whisper(str) {
    if(str.endsWith("!")){
        return "shh..." + str.slice(0, -1)/toLowerCase();       
    }
    return "shh..." + str.toLowerCase();
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's"));

/* Alternating Caps
Write a function that takes in a string of letters
and returns a sentence in which every other letter is capitalized.
*/

function altCaps(str){
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if(i % 2 === 0){
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i]
        }
    }
    return newStr;    
}

console.log(altCaps("When you visit UK you should eat fish and Chips"));