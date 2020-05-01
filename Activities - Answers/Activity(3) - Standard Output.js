//Consider following variable declarations
//Initialize these declarations with a suitable value
let primitiveString1 = "Double quoted string literal";
let primitiveString2 = 'Single quoted string literal';
let primitiveString3 = `Template string literal`;

let primitiveNumber1 = 1;
let primitiveNumber2 = 0b01;
let primitiveNumber3 = 0o01234567;
let primitiveNumber4 = 0x0123456789ABCDE;

let primitiveBoolean = true;

let primitiveNull = null;

let primitiveUndefined = undefined;

let stringInstance = new String("");
let numberInstance = new Number(2);
let booleanInstance = new Boolean(true);

let arrayLiteral = [3];
let objectLiteral = { myKey: "myValue" };
let regularExpressionLiteral = /abc/;

let arrayInstance = new Array(10);
let objectInstance = new Object();
let regularExpressionInstance = new RegExp("abc");

let functionExpression = function() {};
let functionInstance = new Function();

let classExpression = class {};

//Function Definition
function fooFunction() {}

//Class Definition
class BarClass {}

//Check out how the standard output prints above variables and their type
console.log(arrayInstance);
console.log(typeof arrayInstance);

//NOTE: You can directly input data without initializing them into variables or constants
// console.log("Foo");