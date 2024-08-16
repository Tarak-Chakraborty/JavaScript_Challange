/*
### Activity 1: Creating and Exporting Modules

**Task 1:** 
- Create a module that exports a function to add two numbers.
- Import and use this module in another script.

**Task 2:** 
- Create a module that exports an object representing a person with properties and methods.
- Import and use this module in another script.

### Activity 2: Named and Default Exports

**Task 3:** 
- Create a module that exports multiple functions using named exports.
- Import and use these functions in another script.

**Task 4:** 
- Create a module that exports a single function using default export.
- Import and use this function in another script.

### Activity 3: Importing Entire Modules

**Task 5:** 
- Create a module that exports multiple constants and functions.
- Import the entire module as an object in another script and use its properties.

### Activity 4: Using Third-Party Modules

**Task 6:** 
- Install a third-party module (e.g., lodash) using npm.
- Import and use a function from this module in a script.

**Task 7:** 
- Install a third-party module (e.g., axios) using npm.
- Import and use this module to make a network request in a script.

### Activity 5: Module Bundling (Optional)

**Task 8:** 
- Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file.
- Write a script to demonstrate the bundling process.

### Feature Requests

**Feature Request 1:** Basic Module Script
- Write a script that creates a module exporting a function and imports it in another script.

**Feature Request 2:** Named and Default Exports Script
- Create a script demonstrating both named and default exports and their usage.

**Feature Request 3:** Third-Party Module Script
- Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.

**Feature Request 4:** Module Bundling Script
- Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).
*/

// // Task 1: Create a module that exports a function to add two numbers.Import and use this module in another script.
// import addTwoNum from './add.js'
// const storeNum = addTwoNum(8,2)
// console.log(storeNum);

// // Task 2: Create a module that exports an object representing a person with properties and methods.Import and use this module in another script.
// import person from './person.js';
// const storeDetails = person.details()
// console.log(storeDetails);

// // Task 3: Create a module that exports multiple functions using named exports.Import and use these functions in another script.
// import { addNum,multiplyNum } from "./math.js";
// const storeAddNum = addNum(2,4)
// const storeMultiplyNum = multiplyNum(2,2)
// console.log(storeAddNum);
// console.log(storeMultiplyNum);

// // Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
// import multiplyBy from './multiply.js';
// const storeValue = multiplyBy(2,5)
// console.log(storeValue);

// Task 5:  Create a module that exports multiple constants and functions.Import the entire module as an object in another script and use its properties.
// import * as math from './multipleConstants.js'
// console.log(math.E);
// console.log(math.PI);
// console.log(math.square(2));
// console.log(math.cube(2));

// Task 6: Install a third-party module (e.g., lodash) using npm.Import and use a function from this module in a script.
// import _ from 'lodash'
// const arr = [3,24,53,5]
// const updatedArr = _.sortBy(arr);
// console.log(updatedArr);


// Task 7: Install a third-party module (e.g., axios) using npm.Import and use this module to make a network request in a script.
// import axios from "axios";

// axios.get('https://api.publicapis.org/entries').then((resolve)=>{
//     console.log(resolve.data);
    
// }).catch((err)=>{
//     console.log("Error is: ",err);
    
// })

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file.Write a script to demonstrate the bundling process.
