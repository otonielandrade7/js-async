//CALLBACKS
//is a function passed like argument by other function
//EXAMPLE 1
function showResult(result) {
    console.log("Example 1", result);
}
function calculate(a, b) {
    let operation = a * b;
    return operation;
}
let result = calculate(5, 5);
showResult(result);
//EXAMPLE 2
function myDisplayer(some) {
    console.log("Example 2", some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
//when a function is passed like argument dont use parentesis
myCalculator(5, 5, myDisplayer);