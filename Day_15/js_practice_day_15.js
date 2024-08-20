/*
Activity 1: Understanding Closures
Task 1:Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

Task 2:Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

Activity 2: Practical Closures
Task 3:Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

Task 4:Create a closure that captures a user's name and returns a function that greets the user by name.

Activity 3: Closures in Loops
Task 5:Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

Activity 4: Module Pattern
Task 6:Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

Activity 5: Memoization
Task 7:Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

Task 8:
Create a memoized version of a function that calculates the factorial of a number.

Feature Requests
Feature Request 1: Basic Closure Script
Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.

Feature Request 2: Counter Closure Script
Create a script that uses a closure to maintain a private counter with increment and get functions.

Feature Request 3: Unique ID Generator Script
Write a script that generates unique IDs using a closure to keep track of the last generated ID.

Feature Request 4: Loop Closure Script
Create a script that demonstrates closures in loops to ensure functions log the correct index.

Feature Request 5: Memoization Script
Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.
*/

// Task 1:Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
// function outer() {
//     let name = "Tarak"

//     function inner() {
//         console.log(name);
        
//     }
//     return inner

// }
// const outerFunc = outer()
// outerFunc()

// Task 2:Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
// function counter() {
//     let count = 0
//     return {
//         increment: function() {
//                         count++
//                     },
//         getCount: function(){
//                         return count
//                     }
//     }

// }
// const storeCount = counter()
// storeCount.increment()
// console.log(storeCount.getCount());
// storeCount.increment()
// console.log(storeCount.getCount());
// storeCount.increment()
// console.log(storeCount.getCount());

// Task 3:Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
// function createUniqueId(){
//     let id = Math.floor(Math.random()*1000000)
//     return function lastId(){
//         id++
//         return id
//     }
    
    
// }
// const uniqeID = createUniqueId()
// console.log(uniqeID());
// console.log(uniqeID());
// console.log(uniqeID());
// console.log(uniqeID());

// Task 4:Create a closure that captures a user's name and returns a function that greets the user by name.
// function user(name) {
//     return function(){
//         console.log(`User name is:- ${name}`);
//     }
// }
// const userName = user("tarak")
// userName()

// Task 5:Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
// function createFunctionArray() {
//     const functionArray = []
//     for (let i = 0; i < 5; i++) {
//         functionArray.push(function () {
//             console.log(i);
//         })
//     }
//     return functionArray
// }
// const storeFunctionArray = createFunctionArray()
// storeFunctionArray[0]()
// storeFunctionArray[1]()
// storeFunctionArray[2]()
// storeFunctionArray[3]()
// storeFunctionArray[4]()

// Task 6:Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
// function fruitBasket() {
//     let basket = []
//     return {
//         addItem:(item)=>{
//             basket.push(item)
//         },
//         removeItem:(item)=>{
//             basket = basket.filter(i => i !== item);       
//         },
//         listItem:()=>{
//             return basket
//         }
//     }
// }
// const storefruit = fruitBasket()
// storefruit.addItem("apple")
// storefruit.addItem("banana")
// console.log(storefruit.listItem());
// storefruit.removeItem("apple")
// console.log(storefruit.listItem());

// Task 7:Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

