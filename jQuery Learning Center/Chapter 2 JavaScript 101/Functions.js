// A simple function.

var greet = function( person, greeting ) {
    var text = greeting + ", " + person;
    console.log( text );
};

greet( "Rebecca", "Hello" );

// A function that returns a value.

var greet = function( person, greeting ) {
    var text = greeting + ", " + person;
    return text;
};

console.log( greet( "Rebecca", "Hello" ) );

// A function that returns another function.

var greet = function( person, greeting ) {
    var text = greeting + ", " + person;
    return function() {
        console.log( text );
    };
};

var greeting = greet( "Rebecca", "Hello" );

greeting();

// Passing an anonymous function as an argument.

var myFn = function( fn ) {
    var result = fn();
    console.log( result );
};

// Logs "hello world"
myFn( function() {
    return "hello world";
});

// Passing a named function as an argument

var myFn = function( fn ) {
    var result = fn();
    console.log( result );
};

var myOtherFn = function() {
    return "hello world";
};

myFn( myOtherFn );

// A function created using Function.bind()

var myName = "the global object";
var sayHello = function() {
    console.log( "Hi! My name is " + this.myName );
};
var myObject = {
    myName: "Rebecca"
};
var myObjectHello = sayHello.bind( myObject );

// A function being attached to an object at runtime.

var myName = "the global object";
var sayHello = function() {
    console.log( "Hi! My name is " + this.myName );
};
var myObject = {
    myName: "Rebecca"
};
var secondObject = {
    myName: "Colin"
};

myObject.sayHello = sayHello;
secondObject.sayHello = sayHello;

sayHello();              // "Hi! My name is the global object"
myObject.sayHello();     // "Hi! My name is Rebecca"
secondObject.sayHello(); // "Hi! My name is Colin"

sayHello();
myObjectHello();



