// @ts-check
/*
Mini-Activity
- Create an JavaScript program that ask for user for an input, verifies that it is a number and uses for loop to calculate the sum of the elements in the array.

let myArray = []; // 10, 12, 5, 6, 3
let sum = 0;

for (let i = 0; i < 5; i++) {
    let value = prompt(`Enter a number: `);

    // @ts-ignore
    while (isNaN(value)) {
        value = prompt(`Invalid Input. Please enter a valid number: `)
    }
    myArray.push(Number(value));
}
for (let j = 0; j < myArray.length; j++) {
    sum += myArray[j];
}
console.log(`The sum of the elements in the array: ${sum}`);
*/

/*
Mini-Activity
- Create a function that able to receive a string as argument
- inside the function add a for loop
- this for loop should be able to show/display all characters of word/string
- note: strings are similar to arrays
Screenshot your code-based solution and the reult of your solution
*/

function displayCharacter(sentence) {
    for (let i = 0; i < sentence.length; i++) {
         console.log(sentence[i]);
    }
}
displayCharacter("Hello, World");