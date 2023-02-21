// ctrl + / -> sing comment (//)
// ctrl + shift + / -> multiple comments (/** */)

/** [SECTION] Statements and Comments
 * statements
 * - Statements in programming are instructions that we tell the computer to perform
 * - JS statements usually end with semi-colon
 * 
 * syntax
 * - in  programming, it is the set of rules that describe how the statements must be constructed
 * 
 * comments
 * - are parts of the code that gets ignored by the language
 * - are meant to describe the written code
 * 
 * variables
 * - it is used as container of data
 * 
 * declaring variable
 * - syntax:
 *      let/const variableName
 * 
 *      ex. let age; 
 */

// declaring variable - it tells our devices that a variable name is created and is ready to store data
// declaring a variable without giving it a value will automatically assign it with value of "undefined," meaning then variable's value was "not defined"
let age;

// console.log() is useful for printing values of variable or certain results of code into the Google Chrome Browser's console
console.log(age)

// trying to print out a value of a variable that has been declared; will return an error of "not defined"
// "not defined" error refers to the example, the code refers to the "value" of the variable as not defined
console.log('hello');
// console.log(hello);

/** Guides in writing variables in JavaScript
 *      - use  the 'let' keyword or 'const' keyword, followed by variable name of your choosing and use the assignment operator(=) to assign a value
 *      - variable names should start with a lowercase character, useCamelCase for multiple words
 *      - variable names should be indicative (or descriptive) of the value being stored to avoid confusion
 */

/** declaring and intializing variables
 * initializing variables
 *      - the instance when a variable is given its initial / starting value
 *      - syntax:
 *          let/const variableName = value;
 * 
 *          ex. let age = 23;
 */

// initializing
age = 23;
console.log(age);

let name = "Jungkook";
console.log(name);

let productName = "Desktop Computer";
console.log(productName);

productName = "Apple(Mac)";
console.log(productName);

const interest = 3.539;
console.log(interest);

// interest = 4.20
// console.log(interest);

/** Reassigning variable values
 *      - means changing its initial or previous value into another value
 * 
 *      syntax:
 *          variableName = newValue
 * 
 *      - let variable cannot be re-declared within its scope
 *              let friend = "V"
 *              friend = "Suga"
 *          - this will return an error: indetifier 'friend' has already been declared
 *              let friend = "V"
 *              let friend = "Suga"
 */

let friend = "V";
console.log(friend);

friend = "Suga";
console.log(friend);

// reassigning variables vs initializing variables
/** 
 * declare a variable first
 * let supplier;
 * initialization is done after the variable has been declared
 * supplier = "Ayumi Kumagai Tradings"
 */

let supplier;
supplier = "Ayumi Kumagai Tradings"
console.log(supplier);
// this is considered as reassignment because its initial value was already declared

supplier = "DLSUD";
console.log(supplier);

// can you declare a const variable without initialization? NO. An error will occur.
/** const pi;
pi = 3.1416;
console.log(pi);
*/
const pi = 3.1416;
console.log(pi);

// var vs let/const
/**
 * var - is also used in declaring a variabl, but var is an ECMASCRIPT(ES1) featured in 1997
 * let/const - was introduced as a new feature in ES6(2015)
 * 
 * What makes let/const different from var?
 *  - there are issues associated with variables declared with var, regarding hoisting
 * Hoisting - JavaScript's default behavior of moving declarations to the top
        function()
            var;
                            // var will access both functions instead of just one
        function()
            var;
 * in terms of the variables and constants, keyword var is hoisted and let/const does not allow hoisting
 */

a = 5;
console.log(a)
var a;

// b = 7;
// console.log(b);
// let b;