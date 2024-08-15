/*
Activity 1: Basic Error Handling with Try-Catch

Task 1: Intentional Error Throwing
    Create a function that throws an error with an informative message.
    Wrap the function call in a try-catch block to catch the error and log an appropriate message to the console.

Task 2: Division by Zero Check
    Design a function that divides two numbers.
    Within the function, check for division by zero and throw an error if encountered.
    Use a try-catch block to handle the potential error and provide a meaningful message.

Activity 2: Finally Block

Task 3: Execution Flow Observation
    Construct a script that includes a try-catch block and a finally block.
    Log messages within each block (try, catch, and finally) to observe the order of execution.

Activity 3: Custom Error Objects

Task 4: Custom Error Class
    Create a custom error class that inherits from the built-in Error class.
    This class should have a constructor to define a custom error name and message.
    Throw an instance of this custom error class in a function.
    Utilize a try-catch block to handle the custom error and log a specific message.

Task 5: Custom Error for Validation
    Create a function that validates user input (e.g., checking for an empty string).
    If the validation fails, throw a custom error object with a descriptive message.
    Utilize a try-catch block to handle the custom error and provide appropriate feedback.

Activity 4: Error Handling in Promises

Task 6: Promise Rejection Handling
    Construct a promise that resolves or rejects based on a random condition.
    Utilize the .catch() method to handle the rejection scenario and log a user-friendly message.

Task 7: Try-Catch with Async Function
    Design an async function that attempts to fetch data using a promise.
    Wrap the promise call in a try-catch block to capture potential errors.
    Log an informative error message if the promise rejects.

Activity 5: Graceful Error Handling in Fetch

Task 8: Fetch Error Handling with .catch()
    Employ the fetch API to retrieve data from an invalid URL.
    Utilize the .catch() method to capture network or other errors that may occur.
    Log a clear error message to the console.

Task 9: Try-Catch with Async Function and Fetch
    Create an async function that uses fetch to request data from an invalid URL.
    Wrap the fetch call in a try-catch block to handle potential errors.
    Log a detailed error message in the catch block.

Feature Requests
1. Basic Error Handling Script
    Combine try-catch and finally blocks to demonstrate error handling and code execution flow.

2. Custom Error Script
    Define custom error classes for specific error scenarios.
    Throw and handle these custom errors within try-catch blocks to provide informative messages.

3. Promise Error Handling Script
    Utilize both .catch() and try-catch within async functions to manage errors in promises.

4. Fetch Error Handling Script
    Implement error handling using .catch() or try-catch with async functions when fetching data using the fetch API.
*/

// Task 1: Intentional Error Throwing
// function throwErr() {
//     try {
//         throw new Error("This is an intentionaly throw error");
        
//     } catch (error) {
//         console.log("Error Found :",error);
        
//     }

// }
// throwErr()

// Task 2: Division by Zero Check
// function divideNum(num1, num2) {
//     try {
//         if (num2 === 0) {
//             throw new Error("Cannot divide number by 0");
//         }
//         return num1/num2
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// const value = divideNum(10,2)
// console.log(value);

// Task 3: Execution Flow Observation
// try {
//     console.log("Try block execute");
//     throw new Error("Catch block execute");
    
// } catch (error) {
//     console.error("Inside catch block :",error.message);
    
// }finally{
//     console.log("Finally block execute");
    
// }

// Task 4: Custom Error Class
class ValidationFailedError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationFailedError";
    }
}

function validateUserInput(input) {
    try {
        if (input.trim() === "") {
            throw new ValidationFailedError("Input cannot be empty!");
        }
        return input;
    } catch (error) {
        if (error.name === "ValidationFailedError") {
            console.error("Validation error:", error.message);
        } else {
            console.error("Unexpected error:", error.message);
        }
        return null; // Or handle the error differently
    }
}

const validInput = validateUserInput("Hello");
console.log(validInput); // Output: Hello

const emptyInput = validateUserInput("");
console.log(emptyInput); // Output: Validation error: Input cannot be empty! (or null)

// Task 6: Promise Rejection Handling
// new Promise((resolve, reject) => {
//     const random = Math.random()
//     console.log(random);
    
//     if (random > 0.1) {
//         resolve("Promise Resolved")
//     } else {
//         reject("Promise Reject")
//     }
// }).then((resolve) => {
//     console.log(resolve);
    
// })
// .catch((reject) => {
//     console.log(reject);
    
// })

// Task 7: Try-Catch with Async Function
// async function fetchData() {
//     try {
//         const data = await fetch('https://dummy-json.mock.beeceptor.com/todos')
//         const finalData = await data.json()
//         console.log(finalData);
//     } catch (error) {
//         console.log("Error: ",error);
        
//     }
    
// }
// fetchData()

// const fetchData = new Promise((resolve, reject) => {
//     if(2+2 === 5){
//         resolve(fetch("https://dummy-json.mock.beeceptor.com/todos"))
//     } else{
//         reject("Data cannot fetched")
//     }
// })

// async function data() {
//     try {
//        const result =  await fetchData
//        const finalData = await result.json()
//        console.log(finalData);
       
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// data()

// Task 8: Fetch Error Handling with .catch()
// Employ the fetch API to retrieve data from an invalid URL.
// Utilize the .catch() method to capture network or other errors that may occur.
// Log a clear error message to the console.

// fetch('https://example.com/invalid-url')
// .catch((reject) => {
//     console.error("Error: ",reject.message)
// })


// Task 9: Try-Catch with Async Function and Fetch
// Create an async function that uses fetch to request data from an invalid URL.
// Wrap the fetch call in a try-catch block to handle potential errors.
// Log a detailed error message in the catch block.

// async function fetchData() {
//     try {
//         const data = await fetch('https://dummy-json.mock.beeceptor.com/todos')
//         const finalData = await data.json()
//         console.log(finalData);
        
//     } catch (error) {
//         console.log("Data Cannot Fetched:" ,error);
        
//     }
// }
// fetchData()