//PART 1
//Define a function with the identifier "concatenatePrint"
//Parameters: "string1" (string), "string2" (string)
//Definition: Prints the combined text of the strings provided
//Return type: (void)

//Example: "FOO", "BAR" -> print "FOOBAR"

function concatenatePrint(string1, string2) {
    console.log(string1 + string2);
}

//PART 2
//Define a function with the identifier "concatenateStrings"
//Parameters: "string1" (string), "string2" (string)
//Definition: Returns a new string containing the combined text of the strings provided
//Return type: (string)

//Example: "FOO", "BAR" -> "FOOBAR"

function concatenateStrings(string1, string2) {
    return string1 + string2;
}

//PART 3
//Define a function with the identifier "addNumbers"
//Parameters: "number1" (number), "number2" (number)
//Definition: Returns the resulting sum of the provided parameters
//Return type: (number)

//Example: 1, 3 -> 4

function addNumbers(number1, number2) {
    return number1 + number2;
}

//PART 4
//Define a function with the identifier "reverseString"
//Parameters: "word" (string)
//Definition: Returns the given parameter string reversed
//Return type: (string)

//Example: "LIVE" -> "EVIL"

function reverseString(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    return reversedString;
}

//PART 5
//Define a function with the identifier "splitToArray"
//Parameters: "word" (string)
//Definition: Returns the given parameter string split by individual character into an array
//Return type: (string array)

//Example: "MAD" -> ["M", "A", "D"]

function splitToArray(word) {
    let wordCharacters = [];

    for (let i = 0; i < word.length; i++) {
        wordCharacters[i] = word[i];
    }

    return wordCharacters;
}

//PART 6
//Define a function with the identifier "findMaxNumber"
//Parameters: "numberArray" (number array) with all the elements being positive integers
//Definition: Returns the maximum integer from within the elements of the array
//Return type: number

//Example: [1, 2, 6, 10, 4] -> 10

function findMaxNumber(numberArray) {
    let maxNumber = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > maxNumber) {
            maxNumber = numberArray[i];
        }
    }

    return maxNumber;
}

//PART 7
//Define a function to reverse and return an array
//Parameters: (any array)
//Return type: (any array)

//Example: ["R", "A", "W"] -> ["W", "A", "R"]

function reverseArray(array) {
    let reversedArray = [];
    let reversedArrayIndex = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray[reversedArrayIndex] = array[i];
        reversedArrayIndex++;
    }
    return reversedArray;
}

//PART 8
//Define a function to combine two arrays
//Parameters: (any array), (any array)
//Return type: (any array)

//Example: ["F", "O", "O"], ["B", "A", "R", "S"] -> ["F", "O", "O", "B", "A", "R", "S"]

function combineArrays(array1, array2) {
    let combinedArray = array1;
    let combinedArrayIndex = array1.length;
    for (let i = 0; i < array2.length; i++) {
        combinedArray[combinedArrayIndex] = array2[i];
        combinedArrayIndex++;
    }
    return combinedArray;
}

//PART 9
//Define a function to concatenate elements of an array into a string by a given token

//Example: ["F", "O", "O", "B", "A", "R"], "#" -> "F#O#O#B#A#R"

function concatenateArrayByToken(array, token) {
    let concatenatedArray = "";
    for (let i = 0; i < array.length - 1; i++) {
        concatenatedArray += array[i] + token;
    }
    concatenatedArray += array[array.length - 1];
    return concatenatedArray;
}

//PART 10
//Define a function that tests whether a string is a palindrome
//Return type: (boolean)

//A palindrome is a text that reads the same in both forwards and backwards
//Examples: "DEIFIED", "CIVIC", "RADAR", "LEVEL", "ROTOR", "KAYAK", "REVIVER", "REDDER", "MADAM"

//Hint: Make use of the "reverseString" function defined in "PART 4"

//Example 1: "CIVIC" -> true
//Example 2: "TEST" -> false

function checkForPalindrome(word) {
    if (word === reverseString(word)) {
        return true;
    } else {
        return false;
    }
}

//PART 11
//Define a function that combines two arrays by alternatingly taking elements
//*. Assume both arrays are of same length

//Example: ["A", "B", "C"], ["1", "2", "3"] -> ["A", "1", "B", "2", "C", "3"]

function combineArraysAlternatively(array1, array2) {
    let combinedArray = [];
    let combinedArrayIndex = 0;
    for (let i = 0; i < array1.length; i++) {
        combinedArray[combinedArrayIndex] = array1[i];
        combinedArray[combinedArrayIndex + 1] = array2[i];
        combinedArrayIndex += 2;
    }
    return combinedArray;
}

//PART 12
//Define a function that removes all occurrences of given token from a text

//Example: "JAVASCRIPT$IS$NOT$THE$SAME$AS$JAVA", "$" -> "JAVASCRIPTISNOTTHESAMEASJAVA"

function removeTokenFromString(text, token) {
    let formattedSentence = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== token) {
            formattedSentence += text[i];
        }
    }
    return formattedSentence;
}

//PART 13
//Define a function that replaces all occurrences of given token from a text with another token

//Example: "JAVASCRIPT$IS$NOT$THE$SAME$AS$JAVA", "$", "#" -> "JAVASCRIPT#IS#NOT#THE#SAME#AS#JAVA"

function replaceTokenFromString(text, token, replaceWith) {
    let formattedSentence = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== token) {
            formattedSentence += text[i];
        } else {
            formattedSentence += replaceWith;
        }
    }
    return formattedSentence;
}

//PART 14
//Define a function which tests a number for an exact multiple of another number

//Example 1: 4, 2 -> true
//Example 2: 2, 4 -> false
//Example 3: 10, 6 -> false
//Example 4: 100, 20 -> true

function isMultiple(number1, number2) {
    if (number1 % number2 === 0) {
        return true;
    } else {
        return false;
    }
}

//PART 15
//Define a function that removes the last element of an array

//Example: [1, 2, 3, 4, 5, 6] -> [1, 2, 3, 4, 5]

function popFromArray(array) {
    let poppedArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        poppedArray[i] = array[i];
    }
    return poppedArray;
}

//PART 16
//Define a function that appends a given element to an array

//Example: [1, 2, 3, 4, 5, 6], 7 -> [1, 2, 3, 4, 5,6, 7]

function pushToArray(array, element) {
    let pushedArray = array;
    pushedArray[pushedArray.length] = element;
    return pushedArray;
}

//PART 17
//Define a function that splits a text into two parts from a given index and returns an array

//Example 1: "NVIDIAGEFORCE", 6 -> ["NVIDIA", "GEFORCE"]
//Example 2: "INTELCORE", 5 -> ["INTEL", "CORE"]
//Example 3: "AMDRADEON", 3 -> ["AMD", "RADEON"]

function splitTextByIndex(text, index) {
    let textPart1 = "";
    let textPart2 = "";

    for (let i = 0; i < text.length; i++) {
        if (i >= index) {
            textPart2 += text[i];
        } else {
            textPart1 += text[i];
        }
    }

    return [textPart1, textPart2];
}

//PART 18
//Define a function that splits a text by a given token and returns an array
//*. Assume that the token is always a substring of the text
//*. Assume that the token will never be an empty string

//Example: "NIGHT#GETS#DARKER#RIGHT#BEFORE#DAWN", "#" -> ["NIGHT", "GETS", "DARKER", "RIGHT", "BEFORE", "DAWN"]

function splitTextByToken(text, token) {
    let textParts = [""];

    let textPartsIndex = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === token) {
            textPartsIndex++;
            textParts[textPartsIndex] = "";
        } else {
            textParts[textPartsIndex] += text[i];
        }
    }

    return textParts;
}

//PART 19
//Define a function that moves array elements forwards by a given offset

//Hint: If it is hard to define the function purely, you can use any previously defined functions to your advantage

//Example 1: [1, 2, 3, 4, 5, 6], 2 -> [5, 6, 1, 2, 3, 4]
//Example 2: [1, 2, 3, 4, 5, 6], 4 -> [3, 4, 5, 6, 1, 2]

//Method 1: Without using previously defined functions
function offsetArrayElements1(array, offset) {
    let offsetArray = [];
    let offsetArrayIndex = offset;
    for (let i = 0; i < array.length; i++) {
        if (offsetArrayIndex >= array.length) {
            offsetArray[offsetArrayIndex - array.length] = array[i];
        } else {
            offsetArray[offsetArrayIndex] = array[i];
        }
        offsetArrayIndex++;
    }
    return offsetArray;
}

//Method 2: Using previously defined functions
function offsetArrayElements2(array, offset) {
    let offsetArray1 = [];
    let offsetArray1Index = 0;

    let offsetArray2 = [];
    let offsetArray2Index = 0;

    for (let i = 0; i < array.length; i++) {
        if (i + offset >= array.length) {
            offsetArray2[offsetArray2Index] = array[i];
            offsetArray2Index++;
        } else {
            offsetArray1[offsetArray1Index] = array[i];
            offsetArray1Index++;
        }
    }

    return combineArrays(offsetArray2, offsetArray1);
}

//PART 20
//Define a function that moves string characters backwards by a given offset

//Example 1: "ABCDEFG", 2 -> "CDEFGAB"
//Example 2: "DEFGABC", 3 -> "EFGABCD"

function offsetStringCharacters(string, offset) {
    let offsetString1 = "";
    let offsetString2 = "";

    for (let i = 0; i < string.length; i++) {
        if (i >= offset) {
            offsetString2 += string[i];
        } else {
            offsetString1 += string[i];
        }
    }
    return offsetString2 + offsetString1;
}

//PART 21
//Define a function that converts an "English" sentence into "Pig Latin"
//"English" is translated to "Pig Latin" by taking the first letter of every word, moving it to the end of the word and adding "ay".

//Hint: You can use previously defined functions to your advantage

//Example 1: “THE QUICK BROWN FOX -> “HETAY UICKQAY ROWNBAY OXFAY”
//Example 2: “JUMPS OVER THE LAZY DOG” -> “UMPSJAY VEROAY HETAY AZYLAY OGDAY”

function convertToPigLatin(text) {
    let words = splitTextByToken(text, " ");
    for (let i = 0; i < words.length; i++) {
        words[i] = offsetStringCharacters(words[i], 1) + "AY";
    }
    return concatenateArrayByToken(words, " ");
}

//PART 22
//Define a function which returns the english name for any given number string from 1(ONE) to 99(NINETYNINE)
//*. Assume that the number will always have 2 digits
//Parameters: number (string)

//Example 1: "01" -> "ONE"
//Example 1: "51" -> "FIFTYONE"
//Example 1: "10" -> "TEN"
//Example 1: "12" -> "TWELVE"
//Example 1: "11" -> "ELEVEN"

function getNumberName(numberString) {
    let digitName10 = "";
    let digitName1 = "";

    if (numberString[0] === "1") {
        //Define tenth digit place if tenth digit place is "1"
        switch (numberString[1]) {
            case "0":
                digitName10 = "TEN";
                break;
            case "1":
                digitName10 = "ELEVEN";
                break;
            case "2":
                digitName10 = "TWELVE";
                break;
            case "3":
                digitName10 = "THIRTEEN";
                break;
            case "4":
                digitName10 = "FOURTEEN";
                break;
            case "5":
                digitName10 = "FIFTEEN";
                break;
            case "6":
                digitName10 = "SIXTEEN";
                break;
            case "7":
                digitName10 = "SEVENTEEN";
                break;
            case "8":
                digitName10 = "EIGHTEEN";
                break;
            case "9":
                digitName10 = "NINETEEN";
                break;
        }
    } else {
        //Define tenth digit place if tenth digit place is not "1"
        switch (numberString[0]) {
            case "0":
                digitName10 = "";
                break;
            case "2":
                digitName10 = "TWENTY";
                break;
            case "3":
                digitName10 = "THIRTY";
                break;
            case "4":
                digitName10 = "FORTY";
                break;
            case "5":
                digitName10 = "FIFTY";
                break;
            case "6":
                digitName10 = "SIXTY";
                break;
            case "7":
                digitName10 = "SEVENTY";
                break;
            case "8":
                digitName10 = "EIGHTY";
                break;
            case "9":
                digitName10 = "NINETY";
                break;
        }
        //Define first digit place if tenth digit place is not "1"
        switch (numberString[1]) {
            case "0":
                digitName1 = "";
                break;
            case "1":
                digitName1 = "ONE";
                break;
            case "2":
                digitName1 = "TWO";
                break;
            case "3":
                digitName1 = "THREE";
                break;
            case "4":
                digitName1 = "FOUR";
                break;
            case "5":
                digitName1 = "FIVE";
                break;
            case "6":
                digitName1 = "SIX";
                break;
            case "7":
                digitName1 = "SEVEN";
                break;
            case "8":
                digitName1 = "EIGHT";
                break;
            case "9":
                digitName1 = "NINE";
                break;
        }
    }

    return digitName10 + digitName1;
}