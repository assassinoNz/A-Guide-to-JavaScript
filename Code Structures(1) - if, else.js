//COMPARISON EXPRESSIONS
//NOTE: All comparison expressions evaluates to type boolean
(a > b) //Is a larger than b?
(a < b) //Is a smaller than b?
(a >= b) //Is a larger than or equal b?
(a <= b) //Is a smaller than or equal b?
(a == b) //Is value of a equals to value of b?
(a != b) //Is value of a does not equal to value of b?
(a === b) //Is value and type of a equals to value and type of b?
(a !== b) //Is value and type of a does not equal to value and type of b?

//IF
if (condition) {//condition must always evaluate to type boolean
    //This block runs only if the condition is true
}

//IF-ELSE
if (condition) {
    //This block runs only if the condition is true
} else {
    //This block runs only if the condition is false
}

//IF-ELSE IF
if (condition1) {
    //This block runs only if the condition is true
} else if (condition2) {
    //This block runs only if the condition1 is false and condition2 is true
} else if (condition3) {
    //This block runs only if the condition1, condition2 is false and condition3 is true
}

//IF-ELSE IF-ELSE
if (condition1) {
    //This block runs only if the condition is true
} else if (condition2) {
    //This block runs only if the condition1 is false and condition2 is true
} else if (condition3) {
    //This block runs only if the condition1, condition2 is false and condition3 is true
} else {
    //This block runs only if the condition1, condition2, condition3 is false
}