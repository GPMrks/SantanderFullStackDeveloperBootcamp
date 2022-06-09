var readlineSync = require("readline-sync");
var n1 = readlineSync.question("Enter first number: ");
var n2 = readlineSync.question("Enter second number: ");
var checkEquals;
var checkSize;

function operation(n1, n2) {
    
    const sum = parseInt(n1, 10) + parseInt(n2, 10);

    if (n1 === n2){
        checkEquals = "The numbers " + n1 + " and " + n2 + " are equals.";
    } else {
        checkEquals = "The numbers " + n1 + " and " + n2 + " are not equals.";
    }

    if (sum < 10){
        checkSize = "The sum is " + sum + " which is less than 10 and therefore less than 20.";
    } else if (sum === 10 && sum < 20) {
        checkSize = "The sum is " + sum + " which is equal to 10 and therefore less than 20.";
    } else if (sum > 10 && sum < 20) {
        checkSize = "The sum is " + sum + " which is greater than 10 but less than 20.";
    } else if (sum > 10 && sum === 20) {
        checkSize = "The sum is " + sum + " which is greater than 10 and equal to 20.";
    } else {
        checkSize = "The sum is " + sum + " which is greater than 10 and greater than 20.";
    }

    console.log(checkEquals, checkSize);

}

operation(n1, n2);