/*
Activity 1: Understanding LocalStorage
Task 1: Save and Retrieve a String Value
Write a script to save a string value to localStorage and retrieve it.
Log the retrieved value.

Task 2: Save and Retrieve an Object
Write a script to save an object to localStorage by converting it to a JSON string.
Retrieve and parse the object, then log it.

Activity 2: Using LocalStorage
Task 3: Save User Input to LocalStorage
Create a simple form that saves user input (e.g., name and email) to localStorage when submitted.
Retrieve and display the saved data on page load.

Task 4: Remove an Item from LocalStorage
Write a script to remove an item from localStorage.
Log the localStorage content before and after removal.

Activity 3: Understanding SessionStorage
Task 5: Save and Retrieve a String Value
Write a script to save a string value to sessionStorage and retrieve it.
Log the retrieved value.

Task 6: Save and Retrieve an Object
Write a script to save an object to sessionStorage by converting it to a JSON string.
Retrieve and parse the object, then log it.

Activity 4: Using SessionStorage
Task 7: Save User Input to SessionStorage
Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted.
Retrieve and display the saved data on page load.

Task 8: Remove an Item from SessionStorage
Write a script to remove an item from sessionStorage.
Log the sessionStorage content before and after removal.

Activity 5: Comparing LocalStorage and SessionStorage
Task 9: Save and Retrieve Values from Both Storages
Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage.
Retrieve and log the values from both storage mechanisms.

Task 10: Clear All Data from Both Storages
Write a function that clears all data from both localStorage and sessionStorage.
Verify that both storages are empty.

Feature Request
Feature Request 1: LocalStorage Script
Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.
Feature Request 2: SessionStorage Script
Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.
Feature Request 3: Storage Comparison Script
Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.
Feature Request 4: Clear Storage Script
Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.
*/

// Task 1: Save and Retrieve a String Value

// localStorage.setItem('name','Tarak');
// localStorage.setItem('surname','chakraborty');
// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('surname'));
// localStorage.clear()

// Task 2: Save and Retrieve an Object
// const myObj = { name: "Tarak", age: 22 };
// localStorage.setItem('myObj',JSON.stringify(myObj))
// const retrieveObj = JSON.parse(localStorage.getItem('myObj'))
// console.log(retrieveObj);
// localStorage.clear()

// const myInfo = {
//     name:"Tarak",
//     age:22,
//     hobby:"Astronomy"
// }
// localStorage.setItem('myInfo', JSON.stringify(myInfo))
// const retriveInfo = JSON.parse(localStorage.getItem('myInfo'))
// console.log(retriveInfo);

// Task 3: Save User Input to LocalStorage
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('#localStorageForm');
//     const nameInput = document.querySelector('#name');
//     const emailInput = document.querySelector('#email');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const name = nameInput.value;
//         const email = emailInput.value;
//         localStorage.setItem('name', name);
//         localStorage.setItem('email', email);
//         displayLocalStorageData();
//     });

//     const displayLocalStorageData = () => {
//         const name = localStorage.getItem('name');
//         const email = localStorage.getItem('email');
//         if (name && email) {
//             document.querySelector('#localStorageData').textContent = `Name: ${name}, Email: ${email}`;
//         }
//     };

//     displayLocalStorageData();
// });

// Task 4: Remove an Item from LocalStorage
// localStorage.setItem('myname',"Tarak Chakraborty")
// console.log(`Before remove the localStorage ${localStorage.getItem('myname')}`);
// localStorage.removeItem('myname');
// console.log(`After remove the localStorage ${localStorage.getItem('myname')}`);

// Task 5: Save and Retrieve a String Value
// sessionStorage.setItem('name',"Tarak")
// console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name')
// console.log(sessionStorage.getItem('name'));

// sessionStorage.setItem('name','tarak')
// console.log(`before remove the sessionStorage ${sessionStorage.getItem('name')}`);
// sessionStorage.clear()
// console.log(`After remove the sessionStorage ${sessionStorage.getItem('name')}`);

// Task 6: Save and Retrieve an Object
// const myInfo = {name:"Tarak",age:22,hobby:"Astronomy"}
// sessionStorage.setItem('Info',JSON.stringify(myInfo))
// const retriveSessionStorage = JSON.parse(sessionStorage.getItem('Info'))
// console.log(retriveSessionStorage);

// Task 7: Save User Input to SessionStorage
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('#sessionStorageForm');
//     const sessionNameInput = document.querySelector('#sessionName');
//     const sessionEmailInput = document.querySelector('#sessionEmail');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const name = sessionNameInput.value;
//         const email = sessionEmailInput.value;
//         sessionStorage.setItem('sessionName', name);
//         sessionStorage.setItem('sessionEmail', email);
//         displaySessionStorageData();
//     });

//     const displaySessionStorageData = () => {
//         const name = sessionStorage.getItem('sessionName');
//         const email = sessionStorage.getItem('sessionEmail');
//         if (name && email) {
//             document.querySelector('#sessionStorageData').textContent = `Name: ${name}, Email: ${email}`;
//         }
//     };

//     displaySessionStorageData();
// });

// Task 8: Remove an Item from SessionStorage
// sessionStorage.setItem('name',"Babai")
// console.log(`Before Remove the sessionStorage ${sessionStorage.getItem('name')}`);
// sessionStorage.removeItem('name')
// console.log(`After Remove the sessionStorage ${sessionStorage.getItem('name')}`);

// Task 9: Save and Retrieve Values from Both Storages

// function saveData(key, value){
//     localStorage.setItem(key, value);
//     sessionStorage.setItem(key, value);
//     console.log(localStorage.getItem(key));
//     console.log(sessionStorage.getItem(key));
// }
// saveData('name','Sangita')

// Task 10: Clear All Data from Both Storages
// function deleteData(){
//     localStorage.clear()
//     sessionStorage.clear()
// }
// deleteData()