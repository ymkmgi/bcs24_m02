// console.log("hello world");

// [SWITCH]
/**
 * - is a conditional statement that evaluates an expression and matches it to one of several possible cases
 * - alternative for multiple 'if..else' statements
 * 
 *      syntax:
 *          switch (expression) {
 *          - expression is the value that is being evaluated
                case value1:
                    - a case represents a possible match
                    - code to be executed if the expression matches the value
                break;
                    - a point control is tranferred to the end of the switch statement
                case value2:
                    - code to be executed if expression matches the value
            default:
                - code to be executed if expression matches value
                break;
            }
 */

// let color = "red";
// switch (color) {
//     case "red":
//         console.log("The color is red.");
//         break;
//         // the break statement ensures that the following code is not executed
//     case "green":
//         console.log("The color is green.");
//         break;
//     case "blue":
//         console.log("The color is blue.");
//         break;
//     default:
//         console.log("The color is unknown.");
//         break;
// }

/*function shirt(dayOfTheWeek) {
    if (typeof (dayOfTheWeek) === "string") {
        switch (dayOfTheWeek.toLowerCase()) {
            case "monday":
                console.log(`Today is ${dayOfTheWeek}, Wear Black`);
                break;
            case "tuesday":
                console.log(`Today is ${dayOfTheWeek}, Wear Green`);
                break;
            case "wednesday":
                console.log(`Today is ${dayOfTheWeek}, Wear Yellow`);
                break;
            case "thursday":
                console.log(`Today is ${dayOfTheWeek}, Wear Red`);
                break;
            case "friday":
                console.log(`Today is ${dayOfTheWeek}, Wear Violet`);
                break;
            case "saturday":
                console.log(`Today is ${dayOfTheWeek}, Wear Blue`);
                break;
            case "sunday":
                console.log(`Today is ${dayOfTheWeek}, Wear White`);
                break;
            default:
                console.log("Invalid Input. Enter a valid day of the week.")
                break;
        }

    }
    else {
        console.log(`Invalid input. Please input a string.`);
    }
}
shirt("wednesday");*/

// Convert the following snippet of code to switch statement:
// function with if-else and return
function gradeEvaluator(grade) {
    switch (true) {
        case grade >= 90:
            return (`A`);
        case grade >= 80:
            return (`B`);
        case grade >= 71:
            return (`C`);
        case grade <= 70:
            return (`F`);
        default:
            return (`Invalid`);
    }
};

let letterDistinction = gradeEvaluator(75);
console.log(letterDistinction);

/**
 * Ternary Operations
 */

/** Normal if(){} else
 * let price = 5000;
 * if (price > 1000) {
 *      console.log(`Price is over 1000`);
 * } else {
 *      console.log(`Price is less than 1000`);
 * }
 */

/** Ternary if(){} else
 * price > 1000 ? console.log("Price is over 1000") : console.log("Price is less than 1000");
 */

/**
 * let hero = "Anpanman";
 * 
 * hero === "vegeta" ? console.log("You are the prince of all saiyans") : console.log("You are not even royalty");
 */

// else statement in ternary operation is required

/* 
let villain = "Harvey Dent";
villain == "Harvey Dent"
// ternary operators were created so that we can have an if-else statement in one line
? console.log("You are supposed to be the chosen one.")
: console.log("Not quite villainous yet.");
 */

/* let robin = "Dick Grayson";
let currentRobin = "Tim Drake";

let firstRobin = currentRobbin === robin ? true : false;
console.log(isFirstRobin);

// else if with ternary operator
let a = 7;

a === 5
? console.log("A");
: (a === 10 ? console.log("A is 10"): console.log("A is not 5 or 10"))
*/
