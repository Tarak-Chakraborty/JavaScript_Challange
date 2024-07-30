// Function

/*
Activity 1: Function Declaration
Task 1: Write a function to check if a number is odd or even and log the result to the console.
Task 2: Write a function to calculate the square of a number and return the result.

Activity 2: Function Expression
Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
Task 4: Write a function expression to concatenate two strings and return the result.

Activity 3: Arrow Functions
Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

Activity 4: Function Parameters and Default Values
Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

Activity 5: Higher-Order Functions
Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
Task 10: Write a higher-order function that takes two function and a value, applies the first function to the value, and then applies the second function to the result.

Feature Request:
1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
3. Concatenation Function Script: Write a script that includes a function expression to concatenate two string and returns the result.
4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

Achievement:
By the end of these activities, students will:
1. Understand and define functions using function declaration, expressions, and arrow functions.
2. Use function parameter and default values effectively.
3. Create and utilize higher-order functions.
4. Apply functions to solve common problems and perform calculations.
5. Enhance code reusability and organization using functions.
*/

// Task 1: Write a function to check if a number is odd or even and log the result to the console.
function checkNum(num) {
    if (num % 2 === 0) {
        console.log(`Given Number is Even`);
    } else {
        console.log(`Given Number is Odd`);
    }
}
checkNum(41)

//Task 2: Write a function to calculate the square of a number and return the result.
function checkSquare(num1) {
    return num1 * num1
}
const returnValue = checkSquare(4)
console.log(returnValue);

//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function checkMaximum(num1, num2) {
    console.log(num1 < num2 ? `The maximum number is ${num2}` : `The maximum number is ${num1}`)
}

checkMaximum(100 ,20)

//Task 4: Write a function expression to concatenate two strings and return the result.
function concatenateTwoString(string1, string2) {
    return string1 +" "+ string2
}
const storeReturnString = concatenateTwoString("Tarak","Chakraborty")
console.log(storeReturnString);

//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const calculateSum = (num1, num2) => {
    return num1 + num2
}
const storeCalculateSum = calculateSum(2, 4)
console.log(`The sum of this two no is ${storeCalculateSum}`);

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => {
    return str.includes(char)
}

const store = containsCharacter("Hellow world","z")
console.log(store);

const containsCharacter2 = (str,char) => str.includes(char)
console.log(containsCharacter2("Hellow World","World"))

//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multipy(value, secondValue = 2) {
    return value * secondValue
}
const storeMultipy = multipy(5)
console.log(storeMultipy);

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greetingSms(name, age = 20) {
    return `Hey ${name}. Your age is ${age} I hope you doing well.`    
}
const storeGreetings = greetingSms("Apurva", 21)
console.log(storeGreetings);

//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

