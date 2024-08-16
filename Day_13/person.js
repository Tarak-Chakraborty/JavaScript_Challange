// Task 2: Create a module that exports an object representing a person with properties and methods.Import and use this module in another script.
const person = {
    name: "Alex",
    age: 22,

    details:function() {
        return `Hellow my name is ${this.name} and my age is ${this.age}`
    }
}

export default person