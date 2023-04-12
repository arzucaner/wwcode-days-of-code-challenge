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

/* toTitleCase
Write a function thar will capitalize every word in a sentence.
*/

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function toTitleCase(str){
    const sentenceArr = str.split(' ');
    const capArr = sentenceArr.map(word => capitalizeWord(word));
    return capArr.join(' ');
}

// Test functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

/* Totally Not Another FizzBuzz

Divisible by 3 - Vacation!
Divisible by 5 - $100,000 bonus!
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
*/
function awardBonuses(){
    //loop through 1 - 100
    for(let i = 1; i <=100; i++){
        // is divisible by 3 & 5?
        if(i % 15 === 0){
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`);
        } else if (i % 3 === 0){
            console.log(`${i} - Vacition!`);
        } else if(i % 5 === 0){
            console.log(`${i} - $100,000 bonus`);
        } else {
            console.log(`${i} - :(`);
        }
    }
}

awardBonuses();        
    
/* Emojify!
1.Write a function that checks if a lowercase word starts and ends with a colon. If it does. remove the colons and ;ook up the word in the emoji object. If the word is in the emojis object, return the corresponding emoji.
If it isn't, return the original word.
*/

function emojifyWord(word){
    // stars or ends with colon?
        // no: return word
    if(!word.startsWith(":") && !word.endsWith(":")) return word;

    // yes: remove colons
    const slice = word.slice(1, -1);
    // exists in emoji object?
    if(emojis[slice]){
        // yes: return emoji
        return emojis[slice]
    } else {
        return slice;
    }
}

/* 2.Write a function to find any emoji shortcodes in a phrase.
*/

function emojifyPhrase(phrase){
    // split the passed in phrase into an array
    // map through the array and call emojifyWord() on each word in the phrase
    // join the array back together as a string, and return
    const newPhrase = phrase.split(" ").map(word => emojifyWord(word));
    return newPhrase.join(" ")
}

console.log(emojifyPhrase("I :heart: my :elephant:"));

/* Write a function to check if two strings of lowercase letters are anagrams. Return true if the word is an anagram. Return false if it isn't.
*/

function isAnagram(str1, str2){
    // are the strings the same length? if yes return false.
    if(str1.length !== str2.length) return false;

    // split string into an array
    // sort
    // join the array back together as a string
    const newStr1 = str1.split('').sort().join('');

    // repait with second word
    const newStr2 = str2.split('').sort().join('');

    // are the two words equal? true or false
    return newStr1 === newStr2;
}

//console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("inch", "chin"));
console.log(isAnagram("night", "thing"));
//console.log(isAnagram("treasure", "measure"));

/* We Come in peace!
We've received what (we assume) is a message of peace and brotherhood from an alien planet. They almost got it right, but the messages are an alien planet/ Tehy almost got it right, but the messages are backward. write functions to reverse the backward messages so we can read what they have to say!
*/

const title = ":htraE no od ot ffuts";
const messages = [
    "maerc eci yrt",
    "rewoT leffiE tisiV",
    "noom eht ot snamuh etacoleR",
    "egrahc ni stac tuP",
]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse of that string. An interviewer may want to check if you know your string methods, or may want to know if you can reverse a string manually.
Practice both ways!
*/

// reverse a string manually
function reverseString(str){
    // initialize a new empty string
    let reversedString = "";
    // loop through original string backwards, adding each character to the new string
    for(let i = str.length - 1; i >= 0; i--){
        reversedString += str[i];
    }
    return reversedString
}

/* Step 2: Now we'll reverse all strings in an array. Write a function that takes in an array of strings and returns a new array with all string reversed.

You can use reuse your reverseString() function, use string methods, or reverse the string manually.
*/

function reverseStringsInArray(arr){
    return arr.map(item => reverseString(item));
}

console.log(reverseString(title));
console.log(reverseStringsInArray);


