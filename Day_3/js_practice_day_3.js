//Day 3: Control Structures

/*
Activity 1: If-Else Statements
Task 1: Write a program to check if a number is positive, negetive or zero and log the result to the console
Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

Activity 2: Nested If-Else Statements
Task 3: Write a program to find the largest of three numbers using nested if-else statements.

Activity 3: Switch Case
Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
Task 5:  Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

Activity 4: Conditional (Ternary) Operator
Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

Activity 5: Combining Conditions
Task 7: Write a program to check if a year is a leap year using multiple conditions and log the result to the console.

Feature Request: 
1. Number Check Script: Write a script that checks if a number is positive, negetive or Zero using if-else statements and log the result.
2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
3. Day of the week script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
5. Leap Year Check Script: Write a Script that checks if a year is a leap year using multiple conditions and logs the result.

Achivement: 
By the end of these activities, student will:
* Implement and understand basic if-else control flow.
* Use nested if-else statements to handle multiple conditions.
* Utilize switch cases for control flow based on specific values.
* Apply the ternary operator for concise condition checking.
* Combine multiple conditions to solve more complex problems.

*/

//Task 1: Write a program to check if a number is positive, negetive or zero and log the result to the console

function checkNum(num) {
    if (num > 0) {
        console.log("Number is Positive:-", num);
    } else if (num < 0) {
        console.log("Number is Negetive:-", num);
     } else if (num === 0) {
        console.log("Number is Zero:-", num);
     }
}

checkNum(0)

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
function checkEligibility(age) {
    if (age >= 18) {
        console.log("You are eligibile for votting");
    } else {
        console.log("You are not eligible");
    }
}

checkEligibility(19)

//Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function checkLargest(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log("The largest no is:-",a);
        }else{
            console.log("The largest no is:-",c);
        }
    }else {
        if(b > c) {
            console.log("The largest no is:-",b);
        } else {
            console.log("The largest no is:-",c);
        }
    }
}

checkLargest(23,25,12)

//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function dayName(day) {
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thrusday");
            break;
        case 6: 
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default: 
            console.log("Invalid no please type no between 1-7");
            break;
    }
}

dayName(3)

//Task 5:  Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.
function gradeMeasure(number) {
    switch (true) {
        case (number >= 0 && number <= 25):
            console.log("Your grade is F");
            break;
        case (number >= 26 && number <= 40):
            console.log("Your grade is D");
            break;
        case (number >= 41 && number <= 60):
            console.log("Your grade is C");
            break;
        case (number >= 61 && number <= 90):
            console.log("Your grade is B");
            break;
        case (number >= 91 && number <= 100):
            console.log("Your grade is A");
            break;
    }
}

gradeMeasure(60)

//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
function checkOddEven(num) {
    console.log((num % 2 === 0) ? "even":"odd");
}

checkOddEven(3)

//Task 7: Write a program to check if a year is a leap year using multiple conditions and log the result to the console.
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("This year is Leap Year", year);
    } else {
        console.log("This year is not a Leap year", year);
    }
}

checkLeapYear(2000)