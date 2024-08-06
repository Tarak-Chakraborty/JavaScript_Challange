// Day 9: DOM Manipulation

/*
Activity 1: Selecting and Manipulating Elements
Task 1: Select an HTML element by its ID and changes its text content.
Task 2: Select an HTML element by its class and change its background color.

Activity 2: Creating and Appending Elements
Task 3: Create a new div element with some text content and append it to the body.
Task 4: Create a new li element and add it to an existing ul list.

Activity 3: Removing Elements
Task 5: Select an HTML element and remove it from the DOM.
Task 6: Remove the last child of a specific HTML element.

Activity 4: Modifying Attributes and Classes
Task 7: Select an HTML element and change one of its attributes (e.g: src of an img tag)
Task 8: Add and remove a CSS class to/from an HTML element.

Activity 5: Event Handling
Task 9: Add a click event listner to a button that changes the text content of a paragraph.
Task 10: Add a mouseover event listner to an element that changes its border color.

Feature Request: 
1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.

Achivement:
By the end of these activities, student will:
1. Select and manipulate DOM elements using JavaScript.
2. Create and append new elements to the DOM.
3. Remove elements from the DOM.
4. Modify attributes and classes of HTML elements.
5. Add and handle events to make web pages interactive.

*/

// Task 1: Select an HTML element by its ID and changes its text content.
const element = document.getElementById("myElement")
element.textContent = "I am new paragraph"

document.getElementById("myElementTwo").textContent = "I am new Heading"

// Task 2: Select an HTML element by its class and change its background color.
const classElement = document.querySelector(".myElementThree")
classElement.style.backgroundColor = "Blue"

document.querySelector(".myElementThree").style.backgroundColor = "Green"

// Task 3: Create a new div element with some text content and append it to the body.

// // Create a new div element
// const newDiv = document.createElement("div")

//  // Create some text content for the new div
// const newText = document.createTextNode("A new text node in the div")

//  // Append the text content to the div
// newDiv.appendChild(newText)

// // Append the new div element to the body
// document.body.appendChild(newDiv)

// Task 4: Create a new li element and add it to an existing ul list
let newListItem = document.createElement("li")
let listItemContent = document.createTextNode("Item 3")
newListItem.appendChild(listItemContent)
let list = document.getElementById("myList")
list.appendChild(newListItem)

const anotherNewListItem = document.createElement("li")
const anotherListItemContent = document.createTextNode("Bill")
anotherNewListItem.appendChild(anotherListItemContent)
const anotherList = document.querySelector(".myAnotherList")
anotherList.appendChild(anotherNewListItem)

const listItemTwo = document.createElement("li")
const anotherListItemTwo = document.createTextNode("Ankur")
listItemTwo.appendChild(anotherListItemTwo)
const anotherListTwo = document.getElementByTagName("")
anotherListTwo.appendChild(listItemTwo)

// Task 5: Select an HTML element and remove it from the DOM.
document.getElementById("tarak").remove()

// Task 6: Remove the last child of a specific HTML element.
let List = document.getElementById("list")
List.removeChild(List.lastElementChild)

// Task 7: Select an HTML element and change one of its attributes (e.g: src of an img tag)
const image = document.getElementById("myImage")
image.setAttribute("src", "new-image.jpg")

