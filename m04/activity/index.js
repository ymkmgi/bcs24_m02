/**
 * Create a function which will be able to get total area of a circle from a provided radius.
        a number should be provided as an argument.
        look up the formula for calculating the area of a circle with a provided/given radius.
        look up the use of the exponent operator.
        return the result of the area calculation.
*/
function calculateArea(myRadius){
    return (myRadius * myRadius * Math.PI);
}

/*
Create a new variable called circleArea.
        This variable should be able to receive and store the result of the circle area calculation.
        Log the value of the circleArea variable in the console
*/
circleArea = calculateArea(5);
console.log(`The area of the circle is ${circleArea}`);

/*
Create a function which will be able to check if you passed by checking the percentage of your score against the passing percentage.
        this function should take 2 numbers as an argument, your score and the total score.
        First, get the percentage of your score against the total. You can look up the formula to get percentage.
        Using a relational operator, check if your score percentage is greater than 75, the passing percentage. Save the value of the comparison in a variable called isPassed.
        return the value of the variable isPassed.
        This function should return a boolean.
*/
function checkScore(myScore, totalScore){
    var per = (myScore/totalScore)*100;
    var ifPassed = per > 75;
    return ifPassed;
}

/*
Create a new variable called isPassingScore.
        This variable should be able to receive and store the boolean result of the function.
        Log the value of the isPassingScore variable in the console.
*/
isPassingScore = checkScore(80, 100);
console.log(`Did I pass my exam: ${isPassingScore}`)

// In your Activity folder, create index.js file. create a git repo and initialize a local git repository, add the remote link and push to git with the commit message of Add activity code. Add link in our SB Lab Module 4 Main Activity