// Day 11: Promises and Async/Await

/*
Activity 1: Understanding Promises
Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

Activity 2: Chaning Promises
Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in a specific order.

Activity 3: Using Async/Await
Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

Activity 4: Fetching Data from an API
Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

Activity 5: Concurrent Promises
Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

Feature Request:
1. Promise Creation Script: Write a script that demonstrate creating and handling promises, including both resolved and rejected states.
2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.

Achievement:
By the end of these activities, students will:
1. Understand and create promises, including handling resolved and rejected states.
2. Chain multiple promises to perform sequential asynchronous operations.
3. Use async/await to handle asynchronous code more readably.
4. Fetch data from public APIs using both promises and async/await.
5. Manage multiple concurrent promises using Promise.all and Promise.race.
*/

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// const sayHellow = function(){
//     console.log("Hellow World");

// }
// setTimeout(sayHellow, 2000) //handler is nothing its just an function

// setTimeout(function(){
//     console.log("Hellow World")
// },2000)

// setTimeout(() => console.log("hellow world"),2000)

// const sayName = () => console.log("My name is Tarak");
// setTimeout(sayName,2000)

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
// const promise = new Promise((_,heroAlom)=>{
//     setTimeout(function(){
//         heroAlom("Error: Something went wrong!")
//     },2000)

// })
// promise.catch((error) => {
//     console.log(error);

// })

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in a specific order.
// function fetchData(step) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve(`Data send from step :- ${step}`);
//     }, 1000);
//   });
// }

// fetchData(1)
// .then((resolve)=>{
//     console.log(resolve);
//     return fetchData(2)
// }).then((resolve)=>{
//     console.log(resolve);
//     return fetchData(3)
// }).then((resolve)=>{
//     console.log(resolve);
//     setTimeout(()=>{
//         console.log("All Step is Completed");
//     },1000)

// }).catch((error)=>{
//     console.log(error);

// })


//not a part of this challenge just fun with the code
// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         const error = false
//         if (!error) {
//             resolve({username: "Tarak",email: "Tarak@example.com"})
//         } else {
//             reject("ERROR: Something Went Wrong")
//         }
//     },1000)
// });

// fetchData
// .then((resolve) => {
//     return resolve
// })
// .then((resolve) => {
//     console.log(resolve.username);
    
// })
// .catch((reject) => {
//     console.log(reject);
    
// });

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         const error = true
//         if (!error) {
//             resolve({username: "chakkrabortyIndustries", email: "chakrabortyIndustries@example.com"})
//         } else {
//             reject("Error: Object Not Found")
//         }
//     },1000)
// })

// async function asyncFetchData() {
//     try {
//         const data = await fetchData
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR:",error);
        
//     }
    
// }
// asyncFetchData()

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
// const resolveValue = new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve("Promise Resolved")
//     },5000)
// })

// async function logResolvedValue() {
//     const resolveData = await resolveValue
//     console.log(resolveData);
    
// }

// logResolvedValue()
  
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
// const handleReject = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         const sum = 2+2
//         if (sum === 5) {
//             resolve("Resolved Processed")
//         } else {
//             reject("Error: Resolved Unprocessed")
//         }
//     },1000)
// })

// async function checkResolved() {
//     try {
//         const data = await handleReject
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// checkResolved()

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// new Promise((resolve, reject) => {
//     const apiData = fetch('https://dummy-json.mock.beeceptor.com/todos ')
//     resolve(apiData)
// }).then((resolve) => {
//     return resolve.json()
// }).then((data) => {
//     console.log(data[0].title);
// }).catch((error) => {
//     console.log(error);
// })

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// const storeApi = new Promise((resolve, reject) => {
//    const apiData = fetch('https://dummy-json.mock.beeceptor.com/todos')
//    resolve(apiData)
// })

// async function fetchData() {
//     try {
//         const data = await storeApi
//         const updatedjson = await data.json()
//         console.log(updatedjson[0].title);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchData()

// async function fetchData() {
//     const data = await fetch('https://dummy-json.mock.beeceptor.com/todos')
//     const updatedData = await data.json()
//     console.log(updatedData[0].title);
    
// }
// fetchData()

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// let promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('first resolved release')
//     },5000)
// })
// let promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('second resolved release')
//     },5000)
// })
// let promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('third resolved release')
//     },5000)
// })

// Promise.all([promise1,promise2,promise3])
// .then((resolve) => {
//     console.log(resolve);
    
// })
// .catch((reject) => {
//     console.log(reject);
    
// })

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promise1 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Promise One Released")
    },3000)
})

const promise2 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Promise Two Released")
    },2000)
})

const promise3 = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Promise Three Released")
    },1000)
})

Promise.race([promise1,promise2,promise3])
.then((resolve)=> console.log(resolve)
)
.catch((reject) => console.log(reject))