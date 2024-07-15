//DAY 1 - Variable and Datatypes

/*
Activity 1 - Variable Declaration

Task 1 - Declare a variable using var, assign it a number and log the value to the console
Task 2 - Declare a variable using let, assign it a string and log the value to the console

Activity 2 - Constant Declaration
Task 3 - Declare a variable using const, assign it a boolean value and log the value to the console

Activity 3 - Data types
Task 4 - Create a variable of different data types( Number, String, Boolean, Array, Object ) and log each variable's type using the typeof operators

Activity 4 - Reassigning Variable
Task 5 - Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

Activity 5 - Understanding Const
Task 6 - Try reassigning a variable declared with const and observe the error

Feature Request
1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
2. Reassignment Demo: Create a Script that demonstrates the difference in behavior between let and const when it comes to reassignment.


Achivement: 
By the end of this activities, you will:
1. Know how to declare varibles using var , let , and const.
2. Understand the differnet data types in javaScript. 
3. Be able to use the typeof operator to identify the data type of a variable.
4. Understand the concept of variable reassignment and the immutability of const variables.
*/

// Task 1 Declare a variable using var, assign it a number and log the value to the console
var assignInNum = 2
console.log(
    assignInNum
)
// Task 2 Declare a variable using let, assign it a string and log the value to the console
let assignInStr = "I am String"
console.log(
    assignInStr
)
// Task 3 Declare a variable using const, assign it a boolean value and log the value to the console
const assignInBoolean = true
console.log(
    assignInBoolean
);
// Task 4 Create a variable of different data types( Number, String, Boolean, Array, Object ) and log each variable's type using the typeof operators
let var1 = 3
let var2 = " I am String "
let var3 = false
let var4 = {}
let var5 = []
console.log(typeof var1)
console.log(typeof var2)
console.log(typeof var3)
console.log(typeof var4)
console.log(typeof var5)
// Task 5 Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let oldVar = " I am first Value"
console.log(oldVar);
oldVar = "I am Second Value"
let newVar = oldVar
console.log(newVar);
//Task 6 - Try reassigning a variable declared with const and observe the error
const myVariable = "Initial Value"
myVariable = "New Value"
console.log(myVariable);
