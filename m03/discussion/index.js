// console.log("Hello")
// [Function]
/**
 * Funtion in JS are line/block of codes that tell our device/application to perform a certain tasked when called/invoked
 * Functions are reuasble pieces of code with instructions which are used over and over again just as long we can call/invoke them
 * 
 * syntax:
 *      function <functionName>() {
 *          code block (the block of code that will be executed once the function has been run/called/invoked)
 *      }
 */

function printName() {
    console.log("My name is Suga. I am a BTS member.");
}
function showSum() {
    console.log(8+2);
}

// invoke function - functionName()
printName();
showSum();

// Note: Do not create functions with the same name

/**
 * Function with paramaters and arguments
 * A parameter acts a named variable/container that exits ONLY inside a function. This is used to store information as a stand-in or to contain value passed into the function as an argument
 */
function displayName(name) {
    console.log(`My name is ${name}`);
}

// when a function is invoked and data is passed, we call the data "argument"
// In this invocation, "Jungkook" is an arguement passed into our displayName function and is represented by the "name" parameter within our function
// data passed into the function: argument
// representation of data within the function: parameter
displayName("Jungkook");
displayName("Jimin");

function displayNumber(number) {
    console.log(`Value is ${number}`);
}
displayNumber(5400);

function showMessage(message) {
    console.log()
}
showMessage("JavaScript is fun! I love CEU.")

// multiple parameters and arguements
// a function can not only receive a single argument but it can also receive multiple arguemnts as long as it matches the number of parameters in function

function displayFullName(firstName, lastName, age) {
    console.log(`My name is ${firstName} ${lastName}. I am ${age} years old.`);
}

displayFullName("Ayumi", "Kumagai", 22);

// return keyword
// return keyword is used so that the function may return a value and it also stops the process of the function of any other instruction after the keyword will not be processed.

function createFullName(firstName, middleInitial, lastName) {
    return `${firstName} ${middleInitial} ${lastName}`
    console.log("I will no longer run because the function's value or result had been returned.")
}

// result of this function can be saved into a variable
// the result of a function without a return keyword will not be saved
let fullName1 = createFullName("Ayumi", "M", "Kumagai");
console.log(fullName1);

let fullName2 = createFullName("Shaira", "M", "Mori");
console.log(fullName2);