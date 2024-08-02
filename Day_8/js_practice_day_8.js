// Day 8: ES6+ Features
/*
Activity 1: Template literals
Task 1: Use templete literals to create a string that includes variables for a person's name and age, and log the string to the console.
Task 2: Create a multi-line string using template literals log it to the console.

Activity 2: Destructing
Task 3: Use array destructing to extract the first and second elements from an array of numbers and log them to the console.
Task 4: Use object destructing to extract the title and author from a book object and log them to the console.

Activity 3: Spread and Rest Operators
Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

Activity 4: Default Parameters
Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

Activity 5: Enhanced Object Literals
Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
Task 9: Create an object with computed property names based on variables and log the object to the console.

Feature Request: 
1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log string with embedded variables and multi-line strings.
2. Destructing Script: Create a script that uses array and object destructing to extract values and log them.
3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
4: Default Parameters Script: Create a script that defines a function with default parameteres and log the results of calling it with different arguments.
5: Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

Achivement:
By the end of these activites, students will:
1. Understand and use template literals for string interpolation and multi-line strings.
2. Apply destructuring to extract values from arrays and objects.
3. Utilize spread and rest operators for array manipulation and function arguments.
4. Define functions with default parameters.
5. Create objects using enhanced object literls, including methods and computed property names.
*/

//Task 1: Use templete literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Nile"
const age = 22

console.log(`Hey I am ${name} my age is ${age}`);

//Task 2: Create a multi-line string using template literals log it to the console.
const multiString = `
hello world,
My name is Tarak Chakraborty.
I am a an Investor, Teacher, Artist, Coder and a visionary person.
`
console.log(multiString);

//Task 3: Use array destructing to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [1,2,3,4,5,6,7,8,9,10]
const [firstNum, secondNum] = numbers
console.log(firstNum, secondNum);

//Task 4: Use object destructing to extract the title and author from a book object and log them to the console.
const book = {
    title: " 'Why I am an atheist' ",
    author: " 'Bhagat Singh' ",
    year: 1945
}
const {title, author} = book
console.log(`The book name is ${title} and the author name is ${author}`);

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const existingArr = [1,2,3,4,5]
const newArr = [...existingArr, 6,7,8,9,10]
console.log(newArr);

//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    let total = 0
    numbers.map((num)=> total += num)
    return total
}
console.log(sum(1,2,3,4));

//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function func(para1, para2 = 1) {
    return para1 + para2
}
console.log(func(2));

//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const objName = 'Alice';
const objAge = 22;

const person = {
    objName,
    objAge,

    greet(){
        console.log(`Hellow, My name is ${this.objName} and i am ${this.objAge} years old.`);
    },
}
console.log(person);
person.greet()

//Task 9: Create an object with computed property names based on variables and log the object to the console.
const key1 = 'firstname'
const key2 = 'secondname'
const key3 = 'thirdname'

const person2 = {
    [key1] : 'Ram',
    [key2] : 'Gopal',
    [key3] : 'Mishra',
}
console.log(person2);

const name1 = 'fistname'
const name2 = 'middlename'
const name3 = 'lastname'

const channel = {
    [name1] : 'code',
    [name2] : 'with',
    [name3] : 'harry'
}
console.log(channel);