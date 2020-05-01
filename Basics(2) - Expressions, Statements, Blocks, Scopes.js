//EXPRESSION
//NOTE: An expression is any valid unit of code that resolves to a value
//NOTE: Void function/method invocations cannot be considered as expression
let x = 10;
(1 + 2);
(1 & 3);
Math.tan(5);
//NOTE: We can use parenthesis to define precedence inside 

//STATEMENTS
//NOTE: There should be semicolons after statements
//NOTE: Every expression can be considered as a statement
//NOTE: Every statement can be replaced by a block
var foo;
Math.tan(5);
var object = {};
var array = [];

//BLOCKS
//NOTE: There should not be semicolons after blocks
//NOTE: Not all blocks can be replaced by statements
function foo() {
    //Function body is a block
}

for ( ; ; ) {
    //For loop requires a single statement
    //But it can be replaced by a block
}

{
    var bar;
    Math.tan(2);
}

//SCOPES
//1. Global Scope
    //1.1 Block Scope
//2. Function/Local Scope
    //2.1 Block Scope
var globalScopeVariable = "g"; //"globalScopeVariable" is in global scope

{
    var blockScopeVariableInsideGlobalScope = "gb"; //"blockScopeVariableInsideGlobalScope" is in a global block scope
}

function testFunction() {//"testFunction" is in global scope
    var functionScopeVariable = "f"; //"functionScopeVariable" is in function scope

    {
        var blockScopeVariableInsideFunctionScope = "fb"; //"blockScopeVariableInsideFunctionScope" is in function block scope
    }
}

//Problems with "var"
//1. "var" can be used in the same scope more than once (Declaration anomaly)
var problem1 = 1;
var problem1 = 2;

//2. Variables declared with "var" can be used before declaration (Hoisting anomaly)
num = 6;
console.log(num); // returns 6
var num;

//3. "var" doesn't honor block scopes. It declares the variable inside the nearest function or global scope (Scoping anomaly)
var problem2 = 1;
if (true) {
    var problem2 = 2;
}
console.log(problem2); //Output is 2

//Behavior of Scopes
//NOTE: "var" doesn't honor these behaviors. Use "let" instead
//1. Any scope have access to itself
//2. Any scope have access to its ancestral scopes
//3. No scope have access to its descendant scopes
