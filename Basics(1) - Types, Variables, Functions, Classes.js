//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction

//INPUT/OUTPUT
//Standard Output
//NOTE: Standard output can accept many types of parameters
console.log("");

//VARIABLES
//Variable Declaration
var variableName1;
let variableName2;

//Variable Initialization
variableName1 = "";
variableName2 = "";

//Variable Declaration with Initialization
var variableName3 = "";
let variableName4 = "";

/*
//Constant Declaration with Initialization
//NOTE: Constants cannot be declared without initialization
//NOTE: "const" only make the assignment/initialization constant, but not its value
//NOTE: Mutable types can be altered even if it is assigned to a constant
const constantName1 = "foo";
constantName1 = "bar"; //Error: Because of the new assignment

const constantName2 = [12, 11, 10, 9];
constantName2[0] = 24; //No error: There is no new assignments, only mutation
*/

//THE "C" CULTURE
//Naming Conventions
var myVariable; //Camel case
function testFunction1() {//Camel case //Usually starts with a verb

}
class TestClass {//Pascal case
    constructor() {
        this.myProperty = ""; //Camel case
    }

    testMethod() {//Camel case //Usually starts with a verb

    }
}

//TYPES
//NOTE:Although a weakly typed language doesn't have type checking, it does have types

//Primitive Types
//NOTE: Primitive types have no methods/properties
/*
//NOTE: Once created, primitive types cannot be altered in any way (aka Primitive types are immutable)
*/
//NOTE: string, number, boolean, null, undefined are known as primitive types in JavaScript
//NOTE: byte, short, int, long, float, double, char, boolean are known as primitive types in Java

//Autoboxing
//NOTE: When you try to access methods/properties of a primitive, it is automatically converted into an instance of wrapper class. This is known as autoboxing

//Wrapper Classes
//NOTE: Type relates to a class. Therefor every type (including primitive types) should have a class
//NOTE: Relevant class for a primitive type is known as its "Wrapper Class"
//NOTE: Wrapper classes are a part of the "Core API"
//NOTE: "null" and "undefined" doesn't have a corresponding wrapper class because there are no useful properties or methods to perform on them
var stringInstance = new String("");
var numberInstance = new Number(2);
var booleanInstance = new Boolean(true);

//LITERALS
//Primitive Type Literals
//NOTE: It is compulsory for a primitive type to have at least one literal. But any other type could also have literals
//NOTE: If there is a literal for a given type, try avoiding usage of constructors

var primitiveString1 = "Double quoted string literal"; //typeof "" is "string"
var primitiveString2 = 'Single quoted string literal'; //typeof '' is "string"
var primitiveString3 = `Template string literal`; //typeof `` is "string"

var primitiveNumber1 = 1; //typeof 1 is "number"
var primitiveNumber2 = 0b01; //typeof 0b01 is "number"
var primitiveNumber3 = 0o01234567; //typeof 0o01234567 is "number"
var primitiveNumber4 = 0x0123456789ABCDE; //typeof 0x0123456789ABCDE is "number"

var primitiveBoolean1 = true; //typeof true is "boolean"

var primitiveNull = null; //typeof null is "object"

var primitiveUndefined = undefined; //typeof undefined is "undefined"

//Class Types Literals
var literalArray = [3]; //typeof [] is "object"
var literalObject = { myKey: "myValue" }; //typeof {} is "object"
var literalRegularExpression = /abc/; //typeof /abc/ is "object"

var literalFunction = function() {
    //More accurately known as "Function Expression"
}; //typeof function() {} is "function"

var literalClass = class {
    //More accurately known as "Class Expression"
}; //typeof class {} is "function"

//FUNCTIONS
//Void Function Definition (aka Declaration)
//NOTE: Void functions are used when the status of the work done is not relevant
function concatenateStrings(parameterString1, parameterString2) {
    //Function body block
    console.log(parameterString1 + parameterString2);
}

//Void Function Invocation (aka Calling)
//NOTE: Return function invocations/callings does not evaluate to anything
concatenateStrings("My name is", " Foo");

//Return Function Definition (aka Declaration)
//NOTE: Void functions are used when the status of the work done is important
function addNumbers(parameterNumber1, parameterNumber2) {
    //Function body block
    return parameterNumber1 + parameterNumber2;
}

//Return Function Invocation (aka Calling)
//NOTE: Return function invocations/callings evaluate to the value and type of of the return data
//NOTE: As an example, the following invocation evaluates to the string "You can return almost anything within a JavaScript function"
addNumbers(3, 1);
//NOTE: If we use the same function with same parameters more than once, it is better to store its value to a variable
var bar = (addNumbers(3, 1) * addNumbers(2, 5)) + addNumbers(3, 1);
//The above code can be replaced by
var x = addNumbers(3, 1);
var bar = (x * addNumbers(2, 5)) + x;