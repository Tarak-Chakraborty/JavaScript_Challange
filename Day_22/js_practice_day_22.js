/*
Activity 1 : Add Two Numbers
Task 1 : Solve the "Add Two Numbers" problem on LeetCode [link]
Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
Create a few test cases with linked lists and log the sum as a linked list.

Activity 2 : Longest Substring Without Repeating Characters
Task 2 : Solve the "Longest Substring Without Repeating Characters" problem on LeetCode [link]
Write a function that takes a string and returns the length of the longest substring without repeating characters.
Log the length for a few test cases, including edge cases.

Activity 3 : Container With Most Water
Task 3 : Solve the "Container With Most Water" problem on LeetCode [link]
Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
Log the maximum amount of water for a few test cases.

Activity 4 : 3Sum
Task 4 : Solve the "3Sum" problem on LeetCode [link]
Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
Log the triplets for a few test cases, including edge cases.

Activity 5 : Group Anagrams
Task 5 : Solve the "Group Anagrams" problem on LeetCode [link]
Write a function that takes an array of strings and groups anagrams together.
Log the grouped anagrams for a few test cases.

Feature Request :
Add Two Numbers Script : Write a script that includes a function to solve the "Add Two Numbers" problem and logs the sum as a linked list.
Longest Substring Script : Create a script that includes a function to find the longest substring without repeating characters and logs the length.
Container With Most Water Script : Write a script that includes a function to find the container with the most water and logs the maximum amount of water.
3Sum Script : Create a script that includes a function to find all unique triplets in an array that sum to zero and logs the triplets.
Group Anagrams Script : Write a script that includes a function to group anagrams and logs the grouped anagrams.
*/

// Activity 1: Add Two Numbers
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function addTwoNumbers(l1, l2) {
//     let dummyHead = new ListNode(0);
//     let current = dummyHead;
//     let carry = 0;

//     while (l1 !== null || l2 !== null) {
//         let x = l1 !== null ? l1.val : 0;
//         let y = l2 !== null ? l2.val : 0;
//         let sum = carry + x + y;
//         carry = Math.floor(sum / 10);
//         current.next = new ListNode(sum % 10);
//         current = current.next;
//         if (l1 !== null) l1 = l1.next;
//         if (l2 !== null) l2 = l2.next;
//     }

//     if (carry > 0) {
//         current.next = new ListNode(carry);
//     }

//     return dummyHead.next;
// }

// function logLinkedList(head) {
//     let current = head;
//     let result = [];
//     while (current !== null) {
//         result.push(current.val);
//         current = current.next;
//     }
//     console.log(result.join(" -> "));
// }

// // Test cases for Add Two Numbers
// let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// logLinkedList(addTwoNumbers(l1, l2)); // Output: 7 -> 0 -> 8

// Activity 2: Longest Substring Without Repeating Characters
// function lengthOfLongestSubstring(s) {
//     let n = s.length;
//     let set = new Set();
//     let ans = 0, i = 0, j = 0;

//     while (i < n && j < n) {
//         if (!set.has(s[j])) {
//             set.add(s[j++]);
//             ans = Math.max(ans, j - i);
//         } else {
//             set.delete(s[i++]);
//         }
//     }

//     return ans;
// }

// // Test cases for Longest Substring Without Repeating Characters
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

// Activity 3: Container With Most Water
// function maxArea(height) {
//     let maxarea = 0, l = 0, r = height.length - 1;

//     while (l < r) {
//         maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
//         if (height[l] < height[r])
//             l++;
//         else
//             r--;
//     }

//     return maxarea;
// }

// // Test cases for Container With Most Water
// console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
// console.log(maxArea([1,1])); // Output: 1

// Activity 4: 3Sum
// function threeSum(nums) {
//     nums.sort((a, b) => a - b);
//     let result = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right];

//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
//                 while (left < right && nums[left] === nums[left + 1]) left++;
//                 while (left < right && nums[right] === nums[right - 1]) right--;
//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }

// // Test cases for 3Sum
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([])); // Output: []
// console.log(threeSum([0])); // Output: []

// Activity 5: Group Anagrams
function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}

// Test cases for Group Anagrams
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])); // Output: [[""]]
console.log(groupAnagrams(["a"])); // Output: [["a"]]
