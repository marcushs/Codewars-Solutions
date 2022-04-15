//To square(root) or not to square(root) https://www.codewars.com/kata/57f6ad55cca6e045d2000627
function squareOrSquareRoot(array) {
    return array.map(x=>Number.isInteger(Math.sqrt(x))?Math.sqrt(x):x**2);  
}