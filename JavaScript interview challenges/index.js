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

/*
Palindromes are words that are the same forward or backward.
For example, the words "noon" and "kayak" are a palindromes.

Write a function to check if a lowercased string of letters is a palindrome.
If the word is palindrome, return true. If it isn't, return false.
*/

// Solution 1: for loop

function isPalindrome(str){
    // reberse the word using a backeatd for loop to create a new string
    let reverseStr = "";

    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }

    // compare the new string to the original word - are they equal?
       // yes - return true
       // no - return false
    return reverseStr === str;
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));

/*
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his 
password with a bunch of extra characters. Help him recover his password by removing all the duplicate characters.

Your function should take in a string of characters and return a string with the duplicate characters removed. Assume that your input is lowercased with only letters and numbers.
*/

const password = "698098dvsljlgfawgkjbdvkjvhjkdhakjbkjbkj2456";

function removeDupeChars(chars){
    // create a new, empty string callad dupesRemoved
    let dupesRemoved = '';

    //loop through the string we want to remove dupes from
    for(let i = 0; i < chars.length; i++){
        if(!dupesRemoved.includes(chars[i])){
            // if no, add it
            dupesRemoved += chars[i];
        }
           // if yes, keep going through the loop (do nothing)
    }

    // dupesRemoved -- it has no duplicates!
    return dupesRemoved;
}

console.log(removeDupeChars("aabbcc12222"));

/*
How often do the letters in your name repeat?

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name.
*/

function countChars(str){
    // initialize a new empty object to hold the letter counte
    const count = {};
    // remove all spaces and lowercase all characters of the input str
    const name = str.toLowerCase().split(" ").join("");
    // loop through the letters of the string
    for(let i = 0; i < name.length; i++){
        // if the character is not the obj, add it, give it a value of 1
        if(!count[name[i]]){
            count[name[i]] = 1;
        } else {
            // if the character is already in the object, increment that char's value
            count[name[i]] += 1;
        }
    }

    return count
}

console.log(countChars("Missisippi"));

/* Chef Mario's Recipe Book
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array
and returns a new array with all the duplicates removed.
*/

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon",
    "🥚 eggs",
    "🫑green pepers",
    "🧀cheese",
    "🌶️hot sauce",
    "🥓 bacon",
    "🥦broccoli",
    "🧀cheese",
    "🥦broccoli",
    "🌶️hot sauce",
]

function removeDupesFromArray(arr){
    // create a new arr to hold unique items
    // for each item in recipe arr
       // if the item is NOT yet in the unique arr, push it in
       // if it is in the unique arr, move on to the next item (do nothing)
    // return the unique arr

    const uniqueItems = [];

    arr.forEach(item => {
        if(!uniqueItems.includes(item)){
            uniqueItems.push(item);
        }
    });
    return uniqueItems;
}

console.log(removeDupesFromArray(eggScrambleRecipe));


/* I want to know how many new guests have attended my online event.
I have array of first-time attendees for each month of the year.
Can you help me find the total number of attendees! Your function should take in array and return a number representing the total number of new attendees.
*/

const guestCount = [50,53,61,60,70,78,80,80,81,90,110];

function sumArray(arr){
    // initialize a new variable to hold the sum of the arr
    let sum = 0;
    // loop through the guestCount arr, add each value to the sum
    arr.forEach(item => sum += item);
    // after done looping, return the sum
    return sum;
}

console.log(sumArray(guestCount));

/* Pizza Night?
it's the weekend and you and your friends can't agree on
what to order for dinner, so you put it to a vote.

Write a function to find the food with the highest number of votes.

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with how many votes it received.
*/

const gameNightFood = {
    "🍕pizza": 3,
    "🌮tacos": 10,
    "🥗salads": 7,
    "🍝pasta": 5
}

function findTheWinner(obj){
    // initialize some new variable to:
       // keep track of the current highest vote number
       let highestVotes = 0;
       // keep track of the current winning item
       let winningItem = "";
    // for each food option in the food object
    for(let food in obj){
        // is the current value higher than the value of highestVotes?
        if(obj[food] >highestVotes){
            // yes: the new value of highestVotes in the current value and 
            highestVotes = obj[food];
            // winningItem = food;
        }
    }

    // return string announcing the winner using winningItme and highestVote variables
    return `The winner is ${winningItem} with ${highestVotes} votes.`
}

console.log(findTheWinner(gameNightFood));

import userData from "./data.js";

/* Totally Private Data Farm

Write a function that maps through the current data and returns 
a new an array of objects with only two properties:
fullName and birthday. Each result in your
array should look like this when you're done.

{
    fullName: "Arzu Caner"
    birtday: "Fri Agu 15 1945"
}

Read about toDateString() for info on formatting a readable date.

*/

function transformData(data){
    // use map to loop through the data
    return data.map(({name, dob}) => {
        // return an object with the two new properties
        // concat the first and last name

         // create a new date object, passing in the dob
         // format by calling toDateSrting() method
         return{
            fullname: `${name.first} ${name.last}`,
            birthday: new Date(dob.date).toDateString()
         }
    })
}

console.log(transformData(userData));

import podcasts from "./data/js";

/* Find Free Podcasts

Write a function that takes in the podcast data and returns an new 
array of only those podcasts which are free.
*/

function getFreePodcasts(data){
    // filter list by paid prop
    // use map to create a new array of objects with only the specified properties
    return data
        .filter(item => item.paid === false)
        .map(podcast => {
            return {
                title: podcast.title,
                rating: podcast.rating,
                paid: podcast.paid
            }
        });
}

console.log(getFreePodcasts(podcasts))

import products from "./data.js";

/* it's the day after Hallowen 🎃 and all the candy is on sale!

To buy up all the candy, use map() and filter() to put all the
candy into a `shoppingCart` array.

*/

function getSaleItems(data){
    //filter the date by product.type -- only sweet
    return data
    .filter(product => product.type === "sweet")
    // loop through the date using map
    .map(({item, price}) => {
        // for every candy, return a new object with only item and price
        return {
            item,
            price
        }
    });
};

const shoppingCart = getSaleItems(products);
console.log(shoppingCart);

import products from "./data.js";

/* You're online shopping for holiday gifts, but money is tight
so we need to look at the cheapest items first.
Use the built in sort() method to write a function that returns a new array of
products sorted by price, cheapest to most expensive.

Then log the item and price to the console:

❤️, 0
🍬, 0.89
🍫, 0.99
🧁, 0.99
... continued
*/

function sortProducts(data){
    return data.sort((a,b) => {
        return a.price - b.price
    });
}

const listByCheapest = sortProducts(products);
// console.log(listByCheapest);

listByCheapest.forEach(item => console.log(item.product, item.price));

import mediaData from "./js";

/* Find All Unique Tags

As a frontend dev at ScFlix, you're working on a featur to let users browse TV shows by tag. The first step is to collect all the tags from our data into a new array.
Then we'll need to filter out the duplicate tags.

Write a function that takes in the media data and returns a flat array of unique tags.

Expected output:
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/

function getUniqueTags(data){
    // use map to loop through the data and get a new array of tags
    // flatten the tags array with .flat()
    const tags = data.map(podcast => podcast.tags).flat();
    // create a new array uniqueTags to hold the unique values
    const uniqueTags = [];
    // loop through the tags array

    tags.forEach(tag => {
        // is the element already in the uniqueTags arr?
        if(!uniqueTags.includes(tag)){
            uniqueTags.push(tag)
        }
    })

    return uniqueTags;
}

console.log(getUniqueTags(mediaData));

import podcasts from "./data.js";

/* Welcome Aboard Sc Airlines

Our Sc Airlines in-flight entertainment package
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long.

Your sort function should take two arguments: the podcast data and flight length. If the flight is 60 munites or less, sort the podcast list
from shortest to longest. If it's anything else, sort from longest to shortest.
*/

function sortByDuration(data, flightLength){

    // Check if flight is greater than 60 minutes
    if(flightLength > 60){
        // if yes, sort decending order (longest to shortes)
        data.sort((a,b) => b.duration - a.duration);
    } else {
        data.sort((a,b) => a.duration - b.duration);
    }
    // loop through my sorted array
    data.forEach(({title, duration}, index) => {
        // construct a string using the title and duration props
        //use the index to number the list
        //console.log each item
        console.log(`${index + 1}. ${title}, ${duration} munites`);
    });

}

sortByDuration(podcasts, 61);
