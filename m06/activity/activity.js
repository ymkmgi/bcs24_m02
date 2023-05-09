// first function: oddEvenChecker
function oddEvenChecker(number) {
    typeof number === "number" ?
    number % 2 == 0
    ? console.log("The number is even.") 
    : console.log("The number is odd.")
    : console.log("Invalid Input");
}

// second function: budgetChecker
function budgetChecker(budget) {
    typeof (budget) === "number" ?
    budget > 40000
    ? console.log("You are over the budget.")
    : console.log("You have resources left.")
    : console.log("Invalid Input");
}

oddEvenChecker(2);
oddEvenChecker(3);
oddEvenChecker(12);
oddEvenChecker("Hello")

budgetChecker(45000);
budgetChecker(6000);
budgetChecker("6253");