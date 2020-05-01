//PART 1
//Consider the following statement
console.log();
//Guess what is "log()"?
    //It uses camel case: It can be a variable/property or a function/method, It cannot be a class
    //There are invocation parenthesis attached to it: It is a function/method, It is not a variable/property
    //It is a member of "console": It is a method, It is not a function
//Guess what is console "console"?
    //It uses camel case: It can be a variable/property or a function/method, It cannot be a class
    //There are no invocation parenthesis attached to it: It is a variable/property, It is not a function/method
    //"log()" is a member of it: "console" holds an object/instance
    //We can also guess that the "log()" is a non-static method
//What would be the origin of "console"?
    //var console = new Console();

//PART 2
//Consider the following statement
Math.sin(5);
//Guess what is "sin()"?
    //It uses camel case: It can be a variable/property or a function/method, It cannot be a class
    //There are invocation parenthesis attached to it: It is a function/method, It is not a variable/property
    //It is a member of "Math": It is a method, It is not a function
//Guess what is "Math"?
    //It uses pascal case: It can be a class, It cannot be a variable/property or a function/method
    //There are no invocation parenthesis attached to it: It is not a function/method
    //"sin()" is a member of it: "Math" holds a class
    //We can also guess that the "sin()" is a static method
//What would be the origin of "Math"?
    //var Math = {};
    //class Math {}

//PART 3
//Consider the following statement
Array.length;
//Guess what is "length"?
    //It uses camel case: It can be a variable/property or a function/method, It cannot be a class
    //There are invocation parenthesis attached to it: It is not a variable/property, It is not a function/method, 
    //It is also a member of "Array": It is a property, It is not a variable
