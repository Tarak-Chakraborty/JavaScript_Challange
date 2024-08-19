/*
Activity 1: Class Definition
Task 1:Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

Task 2:Add a method to the Person class that updates the age property and logs the updated age.

Activity 2: Class Inheritance
Task 3:Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

Task 4:Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

Activity 3: Static Methods and Properties
Task 5:Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

Task 6:Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

Activity 4: Getters and Setters
Task 7:Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

Task 8:
Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

Activity 5: Private Fields (Optional)
Task 9:Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

Task 10:Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

Feature Requests
Feature Request 1: Basic Class Script
Write a script that defines a Person class with properties and methods, creates instances, and logs messages.

Feature Request 2: Class Inheritance Script
Create a script that defines a Student class extending Person, overrides methods, and logs the results.

Feature Request 3: Static Methods and Properties Script
Write a script that demonstrates static methods and properties in classes.

Feature Request 4: Getters and Setters Script
Create a script that uses getters and setters in a class.

Feature Request 5: Private Fields Script
Write a script that defines a class with private fields and methods to manipulate these fields (optional).
*/

// Task 1:Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
// class Person {
//     constructor(name,age) {
//         this.name = name,
//         this.age = age
//     }
//     greetings(){
//         return `Hellow my name is ${this.name} and my age is ${this.age}`
//     }
// }
// const details = new Person("Tarak",22);
// console.log(details.greetings());

// Task 2:Add a method to the Person class that updates the age property and logs the updated age.
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet(){
//         return `Hellow my name is ${this.name} and my age is ${this.age} years old!`
//     }
//     updatedAge(){
//         return `Updated age is ${this.age + 3}`
//     }
// }
// const updatedAge = new Person("Tarak", 22);
// console.log(updatedAge.updatedAge());

// Task 3:Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet(){
//         return `Hellow my name is ${this.name} and my age is ${this.age}`
//     }
// }

// class Student extends Person{
//     constructor(name,age,studentID){
//         super(name,age)
//         this.studentID = studentID
//     }
//     getStudentId(){
//         return `Student ID is ${this.studentID}`
//     }
// }
// const studentValue = new Student("Tarak",22,"s1234")
// console.log(studentValue.getStudentId());

// Task 4:Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet(){
//         return `Hellow my name is ${this.name} and my age is ${this.age}`
//     }
// }

// class Student extends Person{
//     constructor(name, age, studentId){
//         super(name, age, studentId)
//         this.studentId = studentId
//     }
//     greet(){
//         return `Hellow my name is ${this.name} and my age is ${this.age} years old also my studentId is ${this.studentId}`
        
//     }
// }
// const studentValue = new Student("Tarak Chakraborty",22,"s12345");
// console.log(studentValue.greet());

// Task 5:Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet(){
//         return `Hellow my name is ${this.name} and my age is ${this.age} years old!`
//     }

//     static getGreet(){
//         return `Hellow I am getGreet`
//     }
// }
// console.log(Person.getGreet());
// const value = new Person("Tarak",22)
// console.log(value.greet());

// Task 6:Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
// class Student {
//     static studentNo = 0;
//     constructor() {
//         Student.studentNo++
//     }
//     static studentCount(){
//         return `No of student is:-${Student.studentNo}`
//     }
// }
// const student1 = new Student()
// const student2 = new Student()
// console.log(Student.studentCount());

// Task 7:Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
// class Person {
//     constructor(firstname,lastname) {
//         this.firstname = firstname
//         this.lastname = lastname
//     }
//     get fullname(){
//         return `${this.firstname} ${this.lastname}`
//     }
// }
// const fullname = new Person("Tarak","Chakraborty");
// console.log(fullname.fullname);

// Task 8:Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

// Task 9:Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    balance = 0
    constructor(initialvalue) {
        this.balance = initialvalue
    }
    
    diposit(dipositedAmount){
        console.log(`Diposited amount:- ${dipositedAmount}. New amount ${this.balance += dipositedAmount}`);
    }

    withdraw(withdrawAmount){
        if (withdrawAmount > this.balance) {
            console.log("Insufficiant balance");
        } else {
            console.log(`Withdraw amount:- ${withdrawAmount}. New amount ${this.balance -= withdrawAmount}`);
            
        }
    }
    getBalance(){
        return `Total balance is ${this.balance}`
    }
}

// Task 10:Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const account = new Account(100)
account.diposit(50)
account.withdraw(50)
account.withdraw(200)
console.log(account.getBalance());


