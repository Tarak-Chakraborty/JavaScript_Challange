/*
Activity 1: Basic Regular Expressions
Task 1: Match a Simple Pattern
Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string).
Log the matches.

Task 2: Match All Digits
Write a regular expression to match all digits in a string.
Log the matches.

Activity 2: Character Classes and Quantifiers
Task 3: Match Words Starting with a Capital Letter
Write a regular expression to match all words in a string that start with a capital letter.
Log the matches.

Task 4: Match Sequences of One or More Digits
Write a regular expression to match all sequences of one or more digits in a string.
Log the matches.

Activity 3: Grouping and Capturing
Task 5: Capture US Phone Number Components
Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890).
Log the captures.

Task 6: Capture Email Address Components
Write a regular expression to capture the username and domain from an email address.
Log the captures.

Activity 4: Assertions and Boundaries
Task 7: Match Word at the Beginning of a String
Write a regular expression to match a word only if it is at the beginning of a string.
Log the matches.

Task 8: Match Word at the End of a String
Write a regular expression to match a word only if it is at the end of a string.
Log the matches.

Activity 5: Practical Applications
Task 9: Validate a Simple Password
Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character).
Log whether the password is valid.

Task 10: Validate a URL
Write a regular expression to validate a URL.
Log whether the URL is valid.

Feature Request
Feature Request 1: Basic Regex Script
Write a script that uses regular expressions to match simple patterns and log the matches.

Feature Request 2: Character Classes and Quantifiers Script
Create a script that uses regular expressions to match words with specific characteristics and log the matches.

Feature Request 3: Grouping and Capturing Script
Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.

Feature Request 4: Assertions and Boundaries Script
Create a script that uses regular expressions to match words at specific positions in a string and log the matches.

Feature Request 5: Validation Script
Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.
*/

// Task 1: Match a Simple Pattern
// function matchJavaScript(str){
//     let regex = /JavaScript/g;
//     return str.match(regex)
// }
// console.log("Match 'JavaScript':", matchJavaScript("I love JavaScript. JavaScript is great!"));

// Task 2: Match all digits in a string
// function matchDigits(digit){
//     let regex = /\d/g;
//     return digit.match(regex)
// }
// console.log("Match Digits:", matchDigits("My phone number is 123-456-7890"));

// Task 3: Match all words in a string that start with a capital letter
// function matchCapitalWords(str) {
//     let regex = /\b[A-Z][a-z]*\b/g;
//     return str.match(regex);
// }
// console.log("Match Capital Words:", matchCapitalWords("Hello World, Welcome to JavaScript."));

// Task 4: Match all sequences of one or more digits in a string
// function matchDigitSequences(str) {
//     let regex = /\d+/g;
//     return str.match(regex);
// }
// console.log("Match Digit Sequences:", matchDigitSequences("There are 723 apples and 456 oranges and 45 coconuts."));

// Task 5: Capture area code, central office code, and line number from a US phone number
// function capturePhoneNumberComponents(phoneNumber) {
//     let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
//     let match = phoneNumber.match(regex);
//     return match ? { areaCode: match[1], centralOfficeCode: match[2], lineNumber: match[3] } : null;
// }
// console.log("Capture Phone Number Components:", capturePhoneNumberComponents("(123) 456-7890"));

// Task 6: Capture username and domain from an email address
// function captureEmailComponents(email) {
//     let regex = /(\w+)@(\w+\.\w+)/;
//     let match = email.match(regex);
//     return match ? { username: match[1], domain: match[2] } : null;
// }
// console.log("Capture Email Components:", captureEmailComponents("example@test.com"));

// Task 7: Match a word only if it is at the beginning of a string
// function matchWordAtStart(str, word) {
//     let regex = new RegExp(`^${word}\\b`);
//     return str.match(regex);
// }
// console.log("Match Word at Start:", matchWordAtStart("Hello world", "Hello"));

// Task 8: Match a word only if it is at the end of a string
// function matchWordAtEnd(str, word) {
//     let regex = new RegExp(`\\b${word}$`);
//     return str.match(regex);
// }
// console.log("Match Word at End:", matchWordAtEnd("Hello world", "world"));

// Task 9: Validate a simple password
// function validatePassword(password) {
//     let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//     return regex.test(password);
// }
// console.log("Validate Password:", validatePassword("Password123!"));

// Task 10: Validate a URL
// function validateURL(url) {
//     let regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-./?%&=]*)?$/;
//     return regex.test(url);
// }
// console.log("Validate URL:", validateURL("https://www.example.com"));
