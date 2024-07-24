// Day 4: Loops

/*
Activity 1: For Loop
Task 1: Write a program to print numbers from 1 to 10 using a for loop.
Task 2: Write a program to print the multiplication table of 5 using a for loop.

Activity 2: While Loop
Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while a loop.
Task 4: Write a program to print numbers from 10 to 1 using a while loop.

Activity 3: Do...While Loop
Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
Task 6: Write a program to calculate the factorial of a number using a do...while loop.

Activity 4: Nested Loops
Task 7: Write a program to print a pattern using nested for loops.

*
**
***
****
*****

Activity 5: Loop Control Statements
Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

Feature Request:
1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
5. Factorial Calculation Script: Create a Script that calculates the factorial of a number using a do...while loop.

Achievement:
By the end of these activities, students will:
1. Understand and use for loops to iterate over a sequence of numbers.
2. Utilize while loops for iteration based on a condition.
3. Apply do...while loops to ensure the loop body is executed at least once.
4. Use loop control statements (break and continue) to control the flow of loops.

*/

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${i*5}`);
}

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while a loop.
let sum = 0
let number = 1

while (number <= 10) {
    sum += number
    number++
}
console.log("sum of the numbers is:- ",sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let num = 10
while (1 <= num) {
    console.log(num);
    num--
}

//Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let i = 1
do {
    console.log(i);
    i++
} while (i <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let factorial = 1
let m = 1
do {
    factorial *= i
    m++
} while (m <= number);
console.log(factorial);

// Task 7: Write a program to print a pattern using nested for loops.
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += '*';
    }
    console.log(row);
}

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++){
    if (i === 5) {
        continue
    }
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++){
    if (i === 8) {
        break
    }
    console.log(i);
}