// Day 10

/*
Activity 1: Basic Event Handling
Task 1: Add a click event listener to a button that changes the text content of a paragraph
Task 2: Add a double-click event listner to an image that toggles its visibility.

Activity 2: Mouse Events
Task 3: Add a mouseover event listner to an element that changes its background color.
Task 4: Add a mouseout event listner to an element that resets its background color.

Activity 3: Keyboard Events
Task 5: Add a keydown event listner to an input field that logs the key pressed to the console.
Task 6: Add a keyup event listner to an input field that displays the current value in a paragraph.

Activity 4: Form Events
Task 7: Add a submit event listner to a form that prevents the default submission and logs the form data to the console.
Task 8: Add a change event listner to a select dropdown that displays the selected value in a paragraph.

Activity 5: Event Delegation
Task 9: Add a click event listner to a list that logs the text content of the clicked list item using event delegation.
Task 10: Add an event listner to a paraent element that listens for events from dynamically added child elements.

Feature Request:
1. Click Event Script: Write a script that adds a click event listner to a button to change the text content of a paragraph.
2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.

Achivment:
By the end of these activities, students will:
1. Add and handle basic events like click, double-click, mouseover, mouseout, keydown and keyup.
2. Understand and handle form events.
3. Implement event delegation to manage events on dynamically added elements.
4. Make web pages interactive by responding to various user actions.
*/

// Task 1: Add a click event listener to a button that changes the text content of a paragraph
// With Normal Function
// const btn = document.getElementById("changeTextBtn")
// const paragraph = document.getElementById("text")

// btn.addEventListener('click',function(){
//     paragraph.textContent = "Hi I am NEW paragraph"
// })
// With Arrow Function
// const btn = document.getElementById("changeTextBtn");
// const paragraph = document.getElementById("text");

// btn.addEventListener('click',() => {
//     paragraph.textContent = "Hi I am New Paragraph"
// })

// Task 2: Add a double-click event listner to an image that toggles its visibility.
// const image = document.getElementById("myImage");

// image.addEventListener('dblclick', function(){
//     image.style.marginLeft = "30rem"
// })

// Task 3: Add a mouseover event listner to an element that changes its background color.
// const container = document.getElementById("myContainer")

// container.addEventListener('mouseover',()=>{
//     container.style.backgroundColor = "Blue"
// })

// Task 4: Add a mouseout event listner to an element that resets its background color.
// const myDiv = document.getElementById("myDiv")

// myDiv.addEventListener('mouseout',function(){
//     myDiv.style.backgroundColor = "Beige"
// })

// Task 5: Add a keydown event listner to an input field that logs the key pressed to the console.
// const input = document.getElementById("myInput");

// input.addEventListener('keydown',function(event){
//     console.log('Key Pressed:', event.key);

// })

// Task 6: Add a keyup event listner to an input field that displays the current value in a paragraph.
// const inputField = document.getElementById("Input");
// const displayText = document.getElementById("para")

// inputField.addEventListener('keyup',function(event){
//     displayText.textContent = inputField.value
//     console.log(event.key);

// })

// Task 7: Add a submit event listner to a form that prevents the default submission and logs the form data to the console.
// const formData = document.getElementById("myForm")

// formData.addEventListener("submit",function(event){
//     event.preventDefault();

//     const newFormData = new FormData(formData);
//     console.log('Name:',newFormData.get('name'));
//     console.log('Email:',newFormData.get('email'));

// })

// Task 8: Add a change event listner to a select dropdown that displays the selected value in a paragraph.
// const selectData = document.getElementById("mySelect")
// const selectPara = document.getElementById("displayText")

// selectData.addEventListener('change',()=>{
//     selectPara.textContent = selectData.value
// })

// Task 9: Add a click event listner to a list that logs the text content of the clicked list item using event delegation.
// const list = document.getElementById("myList");

// list.addEventListener('click',function(event){
//     console.log(event.target.textContent);

// })

// Task 10: Add an event listner to a paraent element that listens for events from dynamically added child elements.
const addButton = document.getElementById("addButton");
const list = document.getElementById('list');

addButton.addEventListener('click',()=>{
    const newItem = document.createElement("li")
    newItem.textContent = "New Item"
    list.appendChild(newItem)
})
