//Day 7: Objects
/*
Activity 1: Object Creation and Access
Task 1: Create an object representing a book with properties like title, author, and year,
and log the object to the console.
Task 2: Access and log the title and author properties of the book object.

Activity 2: Object Methods
Task 3: Add a method to the book object that returns a string with the book's title and
author, and log the result of calling this method.
Task 4: Add a method to the book object that takes a parameter (year) and updates the
book's year property, then log the updated object.

Activity 3: Nested Objects
Task 5: Create a nested object representing a library with properties like name and books
(an array of book objects), and log the library object to the console.
Task 6: Access and log the name of the library and the titles of all the books in the library.

Activity 4: The this Keyword
Task 7: Add a method to the book object that uses the this keyword to return a string
with the book's title and year, and log the result of calling this method.

Activity 5: Object Iteration
Task 8: Use a for...in loop to iterate over the properties of the book object and 
log each property and its value.
Task 9: Use Object.keys and Object.values methods to log all the keys and values
of the book object.

Feature request:
1. Book Object Script: Write a script that creates a book object, adds methods to
it, and logs its properties and method results.
2. Library Object Script: Create a script that defines a library object containing an array
of book objects and logs the library's details.
3. Object Iteration Script: Write a script that demonstrates iterating over an object's
properties using for...in loop and Object.keys/ Object.values.

Achievement:
By the end of these activies, student will:

1. Create and manipulate objects with properties and methods.
2. Understand and use the this keyword in object methods.
3. Work with nested objects and arrays of objects.
4. Iterate over an object's properties using loops and buit-in methods.
*/

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const objOne = {
    title: "Automatic millionare",
    author: "Devid Buch",
    year: 2020
}
console.log(objOne);

//Task 2: Access and log the title and author properties of the book object.
const objTwo = {
    title: "Rich Dad Poor Dad",
    author: "Robert t Kyosaki",
    year: 2015
}
console.log(objTwo.title);
console.log(objTwo['author']);

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const objThree = {
    title: "Let's talk money",
    author: "Monica Helan",
    year: 2022,

    objFunc() {
        return `title is ${this.title} and author is ${this.author}`
}
}
console.log(objThree.objFunc());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
const objFour = {
    title: "Total money makeover",
    author: "Dave Ramsey",
    year: 2014,

    objFunction(year){
        objFour.year = year
        return `The updated book year is ${this.year}`
    }
}
console.log(objFour.objFunction(2020));

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee"
        },
        {
            title: "1984",
            author: "George Orwell"
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald"
        }
    ]
}
console.log(library);

//Task 6: Access and log the name of the library and the titles of all the books in the library.
const library2 = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee"
        },
        {
            title: "1984",
            author: "George Orwell"
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald"
        }
    ]
}
console.log(library2.name);
console.log(library2.books[0].title);
console.log(library2.books[1].title);
console.log(library2.books[2].title);

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
const library3 = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee"
        },
        {
            title: "1984",
            author: "George Orwell"
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald"
        }
    ],
    function () {
        return `The books titles are ${this.books.map((inner) => inner.title)}`
    }
}
console.log(library3.function());

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
const book = {
    title: "I will teach you how to be Rich",
    author: "Ramit Shetthi",
    year: 2021
}
for (key in book) {
    console.log(`${key}: ${book[key]}`);
}

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
const anotherBook = {
    title: "I will teach you how to be Rich",
    author: "Ramit Shetthi",
    year: 2021
}
console.log(Object.keys(anotherBook))
console.log(Object.values(anotherBook))