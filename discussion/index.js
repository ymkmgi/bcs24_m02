let brand = "Toyota", model = "Vios", type = "Sedan";
console.log(brand);
console.log(model);
console.log(type);
// 
console.log(brand, model, type);

/**
 * To create data with a particular data type, some data types require adding with a literal
 *      string literals = ' ', "", and recently: ``(template literals)
 *      object literals = {}
 *      array literals = []
 */
// String are a series of alphanumeric characters that create a word, phrase, a name or anything related to creating text
// String literals such as ''(single quotes) or ""(double quotes) are used to write/create string
let country = "Philippines";
let province = "Metro Manila";
console.log(country);
console.log(province);

let firstName = "Ayumi", lastName = "Kumagai";
console.log(firstName, lastName);
console.log(`${firstName} ${lastName}`);
// Concatenation is a process/operation wherein we combine two strings as one. Using the (+) sign
// JavaScript string, spaces are also counted as characters
console.log(firstName + ' ' + lastName);

let fullName = firstName+" "+lastName;
console.log(fullName);

let word1 = "is a";
let word2 = "student";
let word3 = "of";
let word4 = "School";
let word5 = "De La Salle";
let word6 = "a";
let word7 = "University";
let word8 = "Institute";
let space = " ";

/**
 *  Mini-Activity
	Create a variable called sentenced
	combine the variable to form a single string which would legibly and understandbly create a sentence that would say that you are a student of De La Salle.
	Log the sentence variable in the console and get the screen of the code and result and paste in our SB Discussion
 */
let sentence = `${fullName} ${word1} ${word2} ${word3} ${word4} ${word5} ${word6} ${word7} ${word8}`;
console.log(sentence);

// template literals (``) will allow us to to create string with the use of backticks. Template literals also allow us to easily concatenate string without the use of (+) plus sign.
// This also allows us to embed or add variables and even expression in our string with the use of placeholders ${}.

/**
 * let numString1 = '5';
let numString2 = '7';
let num1 = 5.5;
let num2 = .7;
console.log(numString1 + num2);
console.log(num1 + parseInt(numString2));

console.log(5 / 0);
console.log(Infinity + (-Infinity)); //node index.js

let isAdmin = true;
let isMarried = false;
let isMVP = true;

console.log("Is Jungkook an admin?" + isAdmin);
console.log("Is Robles a cool MVP?" +''+isMVP);



let dbzHeroes = ['Goku', 'Vegeta', 'Piccolo', 'Gohan'];
console.log(dbzHeroes);

let heroes = ['OPM', true, 500, 'Saitama', 300];
console.log(heroes);

let bands = ['alt-J', 'oneRepublic', 'sleepAlley'];

let person = {
    firstName: "Avin",
    lastName: "Robles",
    isDeveloper: "SlightlyTrue",
    hasPortfolio: "few",
    age: 20
};
console.log(bands);
console.log(person);

let person2 = {
    name: "Peter",
    age: 26,
};
console.log(person2.isAdmin);

let person3 = {
    name: "Peter",
    age: 26,
    isAdmin: null
};
console.log(person3.isAdmin);
 */