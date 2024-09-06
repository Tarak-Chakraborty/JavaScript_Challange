/*
Activity 1 : Two Sum [link]
Task 1 : Solve the "Two Sum" problem on LeetCode
Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
Log the indices for a few test cases.

Activity 2 : Reverse Integer [link]
Task 2 : Solve the "Reverse Integer" problem on LeetCode
Write a function that takes an integer and returns it with its digits reversed.
Handle edge cases like negative numbers and numbers ending in zero.
Log the reversed integers for a few test cases.

Activity 3 : Palindrome Number [link]
Task 3 : Solve the "Palindrome Number" problem on LeetCode
Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
Log the result for a few test cases, including edge cases like negative numbers.

Activity 4 : Merge Two Sorted Lists [link]
Task 4 : Solve the "Merge Two Sorted Lists" problem on LeetCode
Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
Create a few test cases with linked lists and log the merged list.

Activity 5 : Valid Parentheses [link]
Task 5 : Solve the "Valid Parentheses" problem on LeetCode
Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
A string is valid if open brackets are closed in the correct order.
Log the result for a few test cases.

Feature Request :
Two Sum Script : Write a script that includes a function to solve the "Two Sum" problem and logs the indices of the two numbers.
Reverse Integer Script : Create a script that includes a function to reverse an integer and handles edge cases.
Palindrome Number Script : Write a script that includes a function to check if an integer is a palindrome and logs the result.
Merge Two Sorted Lists Script : Create a script that includes a function to merge two sorted linked lists and logs the merged list.
Valid Parentheses Script : Write a script that includes a function to check if a string of parentheses is valid and logs the result.
*/

// Task 1 : Solve the "Two Sum" problem on LeetCode
// function twoSum(nums, target) {
//     const map = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return [];
// }

// // Test cases for Two Sum
// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]
// console.log(twoSum([3, 3], 6)); // [0, 1]

// Task 2: Solve the "Reverse Integer" problem on LeetCode
// const reverseNo = (num) => {
//     let number = num.toString().split("").reverse().join("");
//     if (number.endsWith("-")) {
//         number = "-" + number
//         return parseInt(number)
//     }
    
// }

// console.log(reverseNo(-123))

// Task 3: Solve the "Palindrome Number" problem on LeetCode
// const isPalindrome = (num) => {
//     const number = num.toString()
//     const value = num.toString().split("").reverse().join('')
//     if (number === value) {
//         console.log(`It's a Palindrome`);
//     } else {
//         console.log(`It's not a Palindrome`)
//     }
    
// }
// isPalindrome(121)

// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function mergeTwoLists(l1, l2) {
//     const dummy = new ListNode();
//     let current = dummy;
//     while (l1 !== null && l2 !== null) {
//         if (l1.val < l2.val) {
//             current.next = l1;
//             l1 = l1.next;
//         } else {
//             current.next = l2;
//             l2 = l2.next;
//         }
//         current = current.next;
//     }
//     current.next = l1 !== null ? l1 : l2;
//     return dummy.next;
// }

// // Helper function to create linked lists for testing
// function arrayToList(arr) {
//     let dummy = new ListNode();
//     let current = dummy;
//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }
//     return dummy.next;
// }

// // Helper function to print linked lists
// function listToArray(list) {
//     let result = [];
//     while (list !== null) {
//         result.push(list.val);
//         list = list.next;
//     }
//     return result;
// }

// // Test cases for Merge Two Sorted Lists
// const l1 = arrayToList([1, 2, 4]);
// const l2 = arrayToList([1, 3, 4]);
// console.log(listToArray(mergeTwoLists(l1, l2))); // [1, 1, 2, 3, 4, 4]

// Task 5: Solve the "Valid Parentheses" problem on LeetCode
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else if (stack.length === 0 || map[stack.pop()] !== char) {
            return false;
        }
    }
    return stack.length === 0;
}

// Test cases for Valid Parentheses
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true