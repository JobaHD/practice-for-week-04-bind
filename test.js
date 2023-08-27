// Your code here
const { Employee } = require('./employee');

const newEmployee = new Employee('John Wick', 'Dog Lover');

const sayName = newEmployee.sayName.bind(newEmployee);

setTimeout(sayName, 2000);

const sayOccupation = newEmployee.sayOccupation.bind(newEmployee);
setTimeout(sayOccupation, 3000);

