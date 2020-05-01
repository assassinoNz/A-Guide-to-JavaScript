//THE FOR LOOP
//Repetitive Code
console.log("Test");
console.log("Test");
console.log("Test");
console.log("Test");
console.log("Test");
console.log("Test");
console.log("Test");

//Reduce Repetitive Code Using For Loops
for ( ; ; ) {
    console.log("Test");
}

//Reduce and Control Repetitive Code Using For Loops
for (let i = 1; ; i++) {
    console.log("Test");
}

for (let i = 1; i <= 7; i++) {
    console.log("Test");
}

//Syntax
for (/*Control variable declaration*/; /*Anything that evaluates to type boolean*/; /*Increment control variable*/) {
    //Repetitive code
}

//Running Procedure
//1. Control variable declaration
//2. Evaluates boolean expression (it evaluated to true)
//3. Runs the code block once
//4. Increment control variable
//5. Evaluates boolean expression (it evaluated to true)
//6. Runs the code block once
//7. Increment control variable
//8. Evaluates boolean expression (it evaluated to false)
//9. Stops loop

//Using Control Variable to Our Advantage
for (let i = 0; i <= 6; i++) {
    console.log(i);
}

//Skip single iterations
for (let i = 0; i <= 6; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}

//Terminate entire for loop
for (let i = 0; i <= 6; i++) {
    if (i === 2) {
        break;
    }
    console.log(i);
}