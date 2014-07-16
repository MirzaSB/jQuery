//Creating an object with the constructor
var person1 = new Object;

person1.firstname = "John";
person1.lastname = "Doe";

console.log(person1.firstname + " " + person1.lastname);

//Creating an object with the object literal syntax:
var person2 = { firstName: "Jane", lastName: "Doe"};
console.log(person2.firstName + " " + person2.lastName);

//As mentioned, objects can also have objects as a property.
var people = {};
people["person1"] = person1;
people["person2"] = person2;

console.log(people["person1"].firstname);
console.log(people["person2"].firstName);

//Properties that have not been created are undefined.
var person = {name: "John Doe"};
console.log(person.email);

//Using the push(), pop(), unshift(), and shift() methods on an array.
var foo = [];
foo.push("a");
foo.push("b");

console.log(foo[0]);
console.log(foo[1]);

console.log(foo.length);

foo.pop();
console.log(foo[0]);
console.log(foo[1]);
console.log(foo.length);

foo.unshift("z");
console.log(foo[0]);
console.log(foo[1]);
console.log(foo.length);

foo.shift();
console.log(foo[0]);
console.log(foo[1]);
console.log(foo.length);

// Checking the type of an arbitrary value.

var myValue = [ 1, 2, 3 ];

// Using JavaScript's typeof operator to test for primitive types:
typeof myValue === "string"; // false
typeof myValue === "number"; // false
typeof myValue === "undefined"; // false
typeof myValue === "boolean"; // false

// Using strict equality operator to check for null:
myValue === null; // false

// Using jQuery's methods to check for non-primitive types:
jQuery.isFunction( myValue ); // false
jQuery.isPlainObject( myValue ); // false
jQuery.isArray( myValue ); // true


