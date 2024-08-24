/*
Activity 1: Linked List
Task 1: Implement a Node Class:Implement a Node class to represent an element in a linked list with properties value and next.

Task 2: Implement a LinkedList ClassImplement a LinkedList class with methods to:

Add a node to the end
Remove a node from the end
Display all nodes

Activity 2: Stack
Task 3: Implement a Stack Class:Implement a Stack class with methods:

push (add element)
pop (remove element)
peek (view the top element)

Task 4: Reverse a String Using Stack:Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

Activity 3: Queue
Task 5: Implement a Queue Class:Implement a Queue class with methods:

enqueue (add element)
dequeue (remove element)
front (view the first element)

Task 6: Simulate Printer Queue:Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

Activity 4: Binary Tree
Task 7: Implement a TreeNode Class:Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

Task 8: Implement a BinaryTree Class
Implement a BinaryTree class with methods for:

Inserting values
Performing in-order traversal to display nodes

Activity 5: Graph (Optional)

Task 9: Implement a Graph Class
Implement a Graph class with methods to:

Add vertices
Add edges
Perform a breadth-first search (BFS)

Task 10: Perform BFS on a Graph
Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

Feature Requests
Feature Request 1: Linked List Script
Write a script that implements a linked list with methods to add, remove, and display nodes.

Feature Request 2: Stack Script
Create a script that implements a stack and uses it to reverse a string.

Feature Request 3: Queue Script
Write a script that implements a queue and simulates a printer queue.

Feature Request 4: Binary Tree Script
Create a script that implements a binary tree with insertion and in-order traversal methods.

Feature Request 5: Graph Script
Write a script that implements a graph and performs breadth-first search (optional).
*/

// Task 1: Implement a Node Class:Implement a Node class to represent an element in a linked list with properties value and next.
// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// const store = new Node(10)
// console.log(store.value);
// console.log(store.next);

// Task 2: Implement a LinkedList ClassImplement a LinkedList class with methods to:
// Add a node to the end
// Remove a node from the end
// Display all nodes

// class Node {
//     constructor(value) {
//         this.value = value;   // Store the value of the node
//         this.next = null;     // Pointer to the next node (initially null)
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;     // The first node in the list (initially null)
//     }

//     // Method to add a node to the end of the list
//     add(value) {
//         const newNode = new Node(value);
//         if (this.head === null) {
//             this.head = newNode;  // If the list is empty, set the new node as the head
//         } else {
//             let current = this.head;
//             while (current.next !== null) {
//                 current = current.next;  // Traverse to the end of the list
//             }
//             current.next = newNode;  // Add the new node at the end
//         }
//     }

//     // Method to remove a node from the end of the list
//     remove() {
//         if (this.head === null) {
//             console.log("List is empty");
//             return;
//         }

//         if (this.head.next === null) {
//             // If there's only one node in the list
//             this.head = null;
//         } else {
//             let current = this.head;
//             let previous = null;
//             while (current.next !== null) {
//                 previous = current;      // Keep track of the previous node
//                 current = current.next;  // Move to the next node
//             }
//             previous.next = null;  // Remove the last node by setting the next of the second last node to null
//         }
//     }

//     // Method to display all nodes in the list
//     display() {
//         if (this.head === null) {
//             console.log("List is empty");
//             return;
//         }

//         let current = this.head;
//         while (current !== null) {
//             console.log(current.value);
//             current = current.next;  // Move to the next node
//         }
//     }
// }

// // Example usage:
// const list = new LinkedList();
// list.add(10);
// list.add(20);
// list.add(30);

// list.display();  // Output: 10 20 30

// list.remove();   // Remove the last node
// list.display();  // Output: 10 20

// Task 3: Implement a Stack Class:Implement a Stack class with methods:

// class Stack {
//     constructor() {
//         this.items = [];  // Initialize an array to hold the stack elements
//     }

//     // Method to add an element to the top of the stack
//     push(element) {
//         this.items.push(element);
//     }

//     // Method to remove and return the top element from the stack
//     pop() {
//         if (this.isEmpty()) {
//             console.log("Stack is empty");
//             return null;
//         }
//         return this.items.pop();
//     }

//     // Method to return the top element from the stack without removing it
//     peek() {
//         if (this.isEmpty()) {
//             console.log("Stack is empty");
//             return null;
//         }
//         return this.items[this.items.length - 1];
//     }

//     // Method to check if the stack is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // Method to display all elements in the stack
//     display() {
//         console.log(this.items.toString());
//     }
// }

// // Example usage:
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.display();  // Output: 10,20,30

// console.log(stack.peek());  // Output: 30 (top element)

// stack.pop();  // Remove the top element
// stack.display();  // Output: 10,20

// console.log(stack.isEmpty());  // Output: false (stack is not empty)

// Task 4: Reverse a String Using Stack:Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
// const reverseString = (str) => {
//     const stack = new Stack();
//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
//     }
//     let reversedStr = '';
//     while (stack.items.length > 0) {
//         reversedStr += stack.pop();
//     }
//     return reversedStr;
// }

// // Example usage
// console.log(reverseString("hello"));

// Task 5: Implement a Queue Class:Implement a Queue class with methods:
// class Queue {
//     constructor() {
//         this.items = [];  // Initialize an array to hold the queue elements
//     }

//     // Method to add an element to the end of the queue
//     enqueue(element) {
//         this.items.push(element);
//     }

//     // Method to remove and return the front element from the queue
//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return null;
//         }
//         return this.items.shift();  // Removes the first element from the array
//     }

//     // Method to return the front element of the queue without removing it
//     peek() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return null;
//         }
//         return this.items[0];
//     }

//     // Method to check if the queue is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // Method to display all elements in the queue
//     display() {
//         console.log(this.items.toString());
//     }
// }

// // Example usage:
// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// queue.display();  // Output: 10,20,30

// console.log(queue.peek());  // Output: 10 (front element)

// queue.dequeue();  // Remove the front element
// queue.display();  // Output: 20,30

// console.log(queue.isEmpty());  // Output: false (queue is not empty)

// Task 6: Simulate Printer Queue:Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
// class Queue {
//     constructor() {
//         this.items = [];  // Initialize an array to hold the queue elements
//     }

//     // Method to add an element to the end of the queue
//     enqueue(element) {
//         this.items.push(element);
//     }

//     // Method to remove and return the front element from the queue
//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return null;
//         }
//         return this.items.shift();  // Removes the first element from the array
//     }

//     // Method to return the front element of the queue without removing it
//     peek() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return null;
//         }
//         return this.items[0];
//     }

//     // Method to check if the queue is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // Method to display all elements in the queue
//     display() {
//         console.log(this.items.toString());
//     }
// }

// // Simulate a Printer Queue
// class PrinterQueue {
//     constructor() {
//         this.queue = new Queue();
//     }

//     // Method to add a print job to the queue
//     addJob(job) {
//         console.log(`Adding job: ${job}`);
//         this.queue.enqueue(job);
//     }

//     // Method to process the next job in the queue
//     processJob() {
//         if (this.queue.isEmpty()) {
//             console.log("No jobs in the queue");
//         } else {
//             const job = this.queue.dequeue();
//             console.log(`Processing job: ${job}`);
//         }
//     }

//     // Method to show all jobs in the queue
//     displayQueue() {
//         console.log("Current jobs in the queue:");
//         this.queue.display();
//     }
// }

// // Example usage:
// const printerQueue = new PrinterQueue();

// printerQueue.addJob("Print Document A");
// printerQueue.addJob("Print Document B");
// printerQueue.addJob("Print Document C");

// printerQueue.displayQueue();  // Output: Print Document A,Print Document B,Print Document C

// printerQueue.processJob();    // Output: Processing job: Print Document A
// printerQueue.displayQueue();  // Output: Print Document B,Print Document C

// printerQueue.processJob();    // Output: Processing job: Print Document B
// printerQueue.displayQueue();  // Output: Print Document C

// printerQueue.processJob();    // Output: Processing job: Print Document C
// printerQueue.displayQueue();  // Output: No jobs in the queue

// printerQueue.processJob();    // Output: No jobs in the queue

// Task 7: Implement a TreeNode Class:Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
// class TreeNode {
//     constructor(value) {
//         this.value = value;     // Store the value of the node
//         this.left = null;       // Pointer to the left child (initially null)
//         this.right = null;      // Pointer to the right child (initially null)
//     }
// }

// // Example usage:
// const root = new TreeNode(1);        // Create the root node with value = 1
// root.left = new TreeNode(2);         // Create the left child with value = 2
// root.right = new TreeNode(3);        // Create the right child with value = 3

// console.log(root.value);             // Output: 1
// console.log(root.left.value);        // Output: 2
// console.log(root.right.value);       // Output: 3


/*
Task 8: Implement a BinaryTree Class
Implement a BinaryTree class with methods for:

Inserting values
Performing in-order traversal to display nodes

*/
// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BinaryTree {
//     constructor() {
//       this.root = null;
//     }
  
//     insert(value) {
//       const newNode = new Node(value);
  
//       if (this.root === null) {
//         this.root = newNode;
//       } else {
//         this._insertNode(this.root, newNode);
//       }
//     }
  
//     _insertNode(node, newNode) {
//       if (newNode.value < node.value) {
//         if (node.left === null) {
//           node.left = newNode;
//         } else {
//           this._insertNode(node.left, newNode);
//         }
//       } else {
//         if (node.right === null) {
//           node.right = newNode;
//         } else {
//           this._insertNode(node.right, newNode);
//         }
//       }
//     }
  
//     inOrderTraversal(node = this.root) {
//       if (node !== null) {
//         this.inOrderTraversal(node.left);
//         console.log(node.value);
//         this.inOrderTraversal(node.right);
//       }
//     }
//   }
  
//   // Example usage:
//   const tree = new BinaryTree();
//   tree.insert(8);
//   tree.insert(3);
//   tree.insert(10);
//   tree.insert(1);
//   tree.insert(6);
//   tree.insert(14);
//   tree.insert(4);
//   tree.insert(7);
//   tree.insert(13);
  
//   console.log("In-order traversal:");
//   tree.inOrderTraversal();
  
/*
Task 9: Implement a Graph Class
Implement a Graph class with methods to:

Add vertices
Add edges
Perform a breadth-first search (BFS)

*/
// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
  
//     addEdge(vertex1, vertex2) {
//       if (this.adjacencyList[vertex1]) {
//         this.adjacencyList[vertex1].push(vertex2);
//       } else {
//         this.adjacencyList[vertex1] = [vertex2];
//       }
  
//       if (this.adjacencyList[vertex2]) {
//         this.adjacencyList[vertex2].push(vertex1);
//       } else {
//         this.adjacencyList[vertex2] = [vertex1];
//       }
//     }
  
//     breadthFirstSearch(start) {
//       const queue = [start];
//       const result = [];
//       const visited = {};
//       visited[start] = true;
  
//       while (queue.length > 0) {
//         const currentVertex = queue.shift();
//         result.push(currentVertex);
  
//         this.adjacencyList[currentVertex].forEach(neighbor => {
//           if (!visited[neighbor]) {
//             visited[neighbor] = true;
//             queue.push(neighbor);
//           }
//         });
//       }
  
//       return result;
//     }
//   }
  
//   // Example usage:
//   const graph = new Graph();
//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addVertex("D");
//   graph.addVertex("E");
//   graph.addVertex("F");
  
//   graph.addEdge("A", "B");
//   graph.addEdge("A", "C");
//   graph.addEdge("B", "D");
//   graph.addEdge("C", "E");
//   graph.addEdge("D", "E");
//   graph.addEdge("D", "F");
//   graph.addEdge("E", "F");
  
//   console.log("BFS starting from vertex A:");
//   console.log(graph.breadthFirstSearch("A"));
  