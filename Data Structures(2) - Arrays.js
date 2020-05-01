//ARRAYS AND MULTIDIMENSIONAL ARRAYS

//Array
//NOTE: Arrays are used to group several types of values under a single identifier
//NOTE: Arrays are also known as indexed arrays
//NOTE: Only dynamically typed languages allow multiple types inside an array
let myArray1 = ["", 5, false, null, undefined, [], {}, /abc/, function() {}, class {}];
//NOTE: But it is a good programming practice to make arrays hold same typed values

//Multidimensional Array
//NOTE: When an index of an array holds another array, the former array is known as a multidimensional array
//NOTE: The following is a 2D array
let my2DArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//NOTE: The following is a 3D array
let my3DArray = [
    [1, 2, 3],
    [
        [1, 2],
        [3, 4]
    ],
    [7, 8, 9]
];

//USING ARRAYS
let myArray2 = ["A", "B", "C"];

//Updating Indices
//NOTE: Be careful when updating indices beyond the boundary of the array as it introduces "empty" holes without errors
myArray[5] = "F"; //Do not do this //There is no 5th index initialized

//Accessing Indices
console.log(myArray2[1]);

//ARRAYS AND STRINGS
//NOTE: JavaScript "strings" are similar to arrays
let myArray3 = ["A", "B", "C", "D"];
let myString = "ABCD";

//Accessing Indices
console.log(myArray3[0]);
console.log(myString[0]);

//Updating Indices
//NOTE: You cannot update indices in a string. But it is possible with arrays

//Similar Properties
    //length

//Similar Methods
    //includes()
    //slice()



