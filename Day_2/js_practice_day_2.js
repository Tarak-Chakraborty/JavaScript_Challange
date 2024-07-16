// Day 2: Operators

/*
Activity 1: Arithmatic Operations
Task 1: Write a program to add two numbers and log the result to the console.
Task 2: Write a program to substract two numbers and log the result to the console.
Task 3: Write a program to multiply two numbers and log the result to the console.
Task 4: Write a program to divide two numbers and log the result to the console.
Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

Activity 2: Assignment Operators
Task 6: Use the += operator to add a number to a variable and log the result to the console.
Task 7: Use the -= operator to substract a number from a variable and log the result to the console.

Activity 3: Comparison Opetators
Task 8: Write a program to compare two numbers using > and < and log the result to the console.
Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
Task 10: Write a program to compare two numbers using == and === and log the result to the console.

Activity 4: Logical Operators
Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

Activity 5: Ternary Operator
Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

Feature Request:
1. Arithmatic Operations Script: Write a script that performs basic arithmetic operations 
(addition, Substraction, multiplication, division, remainder ) on two numbers and logs the result.

2. Comparison and Logical Operators Script: Create a script that compares two numbers using
different comparison operators and combines conditions using logical operators, logging the result.

3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a 
number is positive or negetive and logs the result.

Achievement: 
By the end of these activities, you will:
1. Understand and use arithmatic operators to perform basic calculations.
2. Use assignment operators to modify variable values.
3. Compare values using comparison operators.
4. Combine conditions using logical operators.
5. Use the ternary operator for concise conditional expressions.
*/

//Task 1: Write a program to add two numbers and log the result to the console.
const num1 = 2
const num2 = 3
const result = num1 + num2
console.log(result);

//Task 2: Write a program to substract two numbers and log the result to the console.
const subNum1 = 5
const subNum2 = 3
const store = subNum1 - subNum2
console.log(store);

//Task 3: Write a program to multiply two numbers and log the result to the console.
const multiNum1 = 3
const multiNum2 = 3
const multiResult = multiNum1 * multiNum2
console.log(multiResult);

//Task 4: Write a program to divide two numbers and log the result to the console.
const  divideNum1 = 30
const divideNum2 = 2
const divideResult = divideNum1/divideNum2
console.log(divideResult);

//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
const remainNum1 = 8
const remainNum2 = 3
const remainResult = remainNum1 % remainNum2
console.log(remainResult);

//Task 6: Use the += operator to add a number to a variable and log the result to the console.
let var1 = 5

const addResult = var1 += 3
console.log(addResult);
                   
//Task 7: Use the -= operator to substract a number from a variable and log the result to the console.
let var2 = 10

const subResult = var2 -=5
console.log(subResult);

//Task 8: Write a program to compare two numbers using > and < and log the result to the console.
const compNum1 = 5
const compNum2 = 4

const compResult = compNum1 > compNum2
console.log(compResult);

const compNum3 = 5
const compNum4 = 4

const compResult2 = compNum1 < compNum2
console.log(compResult2);

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
const compareNum1 = 10
const compareNum2 = 10
console.log(compareNum1 >= compareNum2);

const compareNum3 = 20
const compareNum4 = 20
console.log(compareNum3 <= compareNum4);

const compareNum5 = 20
const compareNum6 = 10
console.log(compareNum5 >= compareNum6);

const compareNum7 = 20
const compareNum8 = 10
console.log(compareNum7 <= compareNum8);

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.
const variable1 = "5"
const variable2 = 5
console.log(variable1 == variable2);

const variable3 = "5"
const variable4 = 5
console.log(variable1 === variable2);

//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
const store1 = true
const store2 = true
console.log(store1 && store2);

//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
const store3 = false
const store4 = true
console.log(store3 || store4);

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
const store5 = 5
console.log(store5 !== 10);

//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
function checkNum(number) {
    let result = number >= 0 ? "Positive" : "Negetive"
    console.log(result);
}

checkNum(-23)
