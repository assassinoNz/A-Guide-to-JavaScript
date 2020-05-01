//PART 1
//Print the string "Repetitive code" 10 times using a for-loop
for (let i = 0; i <= 9; i++) {
    console.log("Repetitive code");
}

//PART 2
//Print the string "Iteration <ITERATION_COUNT>" 10 times using a for-loop
//*. <ITERATION_COUNT> is a variable that starts from 0 and increments by one in each iteration
//Example:
    //Iteration 0
    //Iteration 1
    //Iteration 2
for (let i = 0; i <= 9; i++) {
    console.log(`Iteration ${i}`);
}

//PART 3
//Print all the natural numbers from 10 to 20 except 15
for (let i = 10; i <= 20; i++) {
    if (i === 15) {
        continue;
    }
    console.log(i);
}

//PART 4
//Print all the even numbers from 10 to 20
for (let i = 10; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 10; i <= 20; i = i + 2) {
    console.log(i);
}

//PART 5
//Iterate forwards through the following array and print each element on a new line
let myArray = ["I", " ", "L", "O", "V", "E", " ", "J", "A", "V", "A", "S", "C", "R", "I", "P", "T"];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//PART 6
//Iterate backwards through the above array and print each element on a new line
for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);
}

//PART 7
//Concatenate each element of the above array to the variable "concatenatedArray" and finally print the variable
let concatenatedArray = "";

for (let i = 0; i < myArray.length; i++) {
    concatenatedArray += myArray[i];
}

console.log(concatenatedArray);

//PART 8
//Reverse the following string and print it as a single word
let forwardString = "LIVE";

let backwardString = "";
for (let i = forwardString.length - 1; i >= 0; i--) {
    backwardString += forwardString[i];
}

console.log(backwardString);

//PART 9
//Split the following word into individual characters and add each character to an array. Finally print the array
let word = "RAW";
let splitWord = [];

for (let i = 0; i < word.length; i++) {
    splitWord[i] = word[i];
}

console.log(splitWord);

//PART 10
//Filter and print only the elements which are numbers (element should be of type number) from the following array
let mixedArray = ["I", "WAS", "BORN", "ON", 1969, 4, 1, "MY", "AGE", "IS", 22];
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number") {
        console.log(mixedArray[i]);
    }
}

//PART 11
//Consider the following 2D array
let array2D = [
    ["H ", "  ", "  ", "  ", "  ", "  ", "  ", "He"],
    ["Li", "Be", "B ", "C ", "N ", "O ", "F ", "Ne"],
    ["Na", "Mg", "Al", "S ", "P ", "S ", "Cl", "Ar"],
    ["K ", "Ca", "  ", "  ", "  ", "  ", "  ", "  "]
];
//Print the above array as given below
//H                    He
//Li Be B  C  N  O  F  Ne
//Na Mg Al S  P  S  Cl Ar
//K  Ca                  

for (let i = 0; i < array2D.length; i++) {
    let formattedInnerArray = "";
    for (let j = 0; j < array2D[0].length; j++) {
        formattedInnerArray += array2D[i][j] + " ";
    }
    console.log(formattedInnerArray);
}

//PART 12
//Print the following pattern on the console
//******
//******
//******
//******
//******
//******
for (let i = 0; i <= 5; i++) {
    console.log("******");
}

//PART 13
//Print the following pattern on the console
//*
//**
//***
//****
//*****
//******
for (let i = 0; i <= 5; i++) {
    let starString = "";
    for (let j = 0; j <= i; j++) {
        starString += "*";
    }
    console.log(starString);
}

//PART 14
//Traverse through the following array and print whether it includes the given "elementToSearch" as boolean
//*. "elementToSearch" will be provided on execution
//*. "myArray" doesn't have duplicate elements
let elementToSearch = "C";
let arrayToSearch = ["A", "B", "C", "D", "E", "G", "H", "N", "O"];

let hasElement = false;
for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i] === elementToSearch) {
        hasElement = true;
        break;
    }
}
console.log(hasElement);

//PART 15
//Find the sum of all elements in the following number array and print it
let numberArray = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
}
console.log(sum);

//PART 16
//Find the product of all the elements in the above number array and print it
let product = 1;
for (let i = 0; i < numberArray.length; i++) {
    product *= numberArray[i];
}
console.log(product);

//PART 17
//Build a program that prints the sum of all natural numbers from 1 to n
//*. "n" will be given at execution
let n = 12;

let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);

console.log((n * (n + 1)) / 2);

//PART 18
//Build a program that prints the product of all natural numbers from 1 to n
//*. "n" will be given at execution
let n = 6;

let product = 1;
for (let i = 2; i <= n; i++) {
    product *= i;
}
console.log(product);

//PART 19
//Split the following string into smaller string parts by the "-"(dash) and add each part into an array. Finally print the array
let dashedString = "I-AM-NUMBER-FOUR";
let dashedStringParts = [""];

let dashedStringPartIndex = 0;
for (let i = 0; i < dashedString.length; i++) {
    if (dashedString[i] === "-") {
        dashedStringPartIndex++;
        dashedStringParts[dashedStringPartIndex] = "";
    } else {
        dashedStringParts[dashedStringPartIndex] += dashedString[i];
    }
}

console.log(dashedStringParts);