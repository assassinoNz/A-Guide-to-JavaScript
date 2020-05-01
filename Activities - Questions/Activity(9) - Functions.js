//PART 1
//Define a function with the identifier "concatenatePrint"
//Parameters: "string1" (string), "string2" (string)
//Definition: Prints the combined text of the strings provided
//Return type: (void)

//Example: "FOO", "BAR" -> print "FOOBAR"

//PART 2
//Define a function with the identifier "concatenateStrings"
//Parameters: "string1" (string), "string2" (string)
//Definition: Returns a new string containing the combined text of the strings provided
//Return type: (string)

//Example: "FOO", "BAR" -> "FOOBAR"

//PART 3
//Define a function with the identifier "addNumbers"
//Parameters: "number1" (number), "number2" (number)
//Definition: Returns the resulting sum of the provided parameters
//Return type: (number)

//Example: 1, 3 -> 4

//PART 4
//Define a function with the identifier "reverseString"
//Parameters: "word" (string)
//Definition: Returns the given parameter string reversed
//Return type: (string)

//Example: "LIVE" -> "EVIL"

//PART 5
//Define a function with the identifier "splitToArray"
//Parameters: "word" (string)
//Definition: Returns the given parameter string split by individual character into an array
//Return type: (string array)

//Example: "MAD" -> ["M", "A", "D"]

//PART 6
//Define a function with the identifier "findMaxNumber"
//Parameters: "numberArray" (number array) with all the elements being positive integers
//Definition: Returns the maximum integer from within the elements of the array
//Return type: number

//Example: [1, 2, 6, 10, 4] -> 10

//PART 7
//Define a function to reverse and return an array
//Parameters: (any array)
//Return type: (any array)

//Example: ["R", "A", "W"] -> ["W", "A", "R"]

//PART 8
//Define a function to combine two arrays
//Parameters: (any array), (any array)
//Return type: (any array)

//Example: ["F", "O", "O"], ["B", "A", "R", "S"] -> ["F", "O", "O", "B", "A", "R", "S"]

//PART 9
//Define a function to concatenate elements of an array into a string by a given token

//Example: ["F", "O", "O", "B", "A", "R"], "#" -> "F#O#O#B#A#R"

//PART 10
//Define a function that tests whether a string is a palindrome
//Return type: (boolean)

//A palindrome is a text that reads the same in both forwards and backwards
//Examples: "DEIFIED", "CIVIC", "RADAR", "LEVEL", "ROTOR", "KAYAK", "REVIVER", "REDDER", "MADAM"

//Hint: Make use of the "reverseString" function defined in "PART 4"

//Example 1: "CIVIC" -> true
//Example 2: "TEST" -> false

//PART 11
//Define a function that combines two arrays by alternatingly taking elements
//*. Assume both arrays are of same length

//Example: ["A", "B", "C"], ["1", "2", "3"] -> ["A", "1", "B", "2", "C", "3"]

//PART 12
//Define a function that removes all occurrences of given token from a text

//Example: "JAVASCRIPT$IS$NOT$THE$SAME$AS$JAVA", "$" -> "JAVASCRIPTISNOTTHESAMEASJAVA"

//PART 13
//Define a function that replaces all occurrences of given token from a text with another token

//Example: "JAVASCRIPT$IS$NOT$THE$SAME$AS$JAVA", "$", "#" -> "JAVASCRIPT#IS#NOT#THE#SAME#AS#JAVA"

//PART 14
//Define a function which tests a number for an exact multiple of another number

//Example 1: 4, 2 -> true
//Example 2: 2, 4 -> false
//Example 3: 10, 6 -> false
//Example 4: 100, 20 -> true

//PART 15
//Define a function that removes the last element of an array

//Example: [1, 2, 3, 4, 5, 6] -> [1, 2, 3, 4, 5]

//PART 16
//Define a function that appends a given element to an array

//Example: [1, 2, 3, 4, 5, 6], 7 -> [1, 2, 3, 4, 5,6, 7]

//PART 17
//Define a function that splits a text into two parts from a given index and returns an array

//Example 1: "NVIDIAGEFORCE", 6 -> ["NVIDIA", "GEFORCE"]
//Example 2: "INTELCORE", 5 -> ["INTEL", "CORE"]
//Example 3: "AMDRADEON", 3 -> ["AMD", "RADEON"]

//PART 18
//Define a function that splits a text by a given token and returns an array
//*. Assume that the token is always a substring of the text
//*. Assume that the token will never be an empty string

//Example: "NIGHT#GETS#DARKER#RIGHT#BEFORE#DAWN", "#" -> ["NIGHT", "GETS", "DARKER", "RIGHT", "BEFORE", "DAWN"]

//PART 19
//Define a function that moves array elements forwards by a given offset

//Hint: If it is hard to define the function purely, you can use any previously defined functions to your advantage

//Example 1: [1, 2, 3, 4, 5, 6], 2 -> [5, 6, 1, 2, 3, 4]
//Example 2: [1, 2, 3, 4, 5, 6], 4 -> [3, 4, 5, 6, 1, 2]

//PART 20
//Define a function that moves string characters backwards by a given offset

//Example 1: "ABCDEFG", 2 -> "CDEFGAB"
//Example 2: "DEFGABC", 3 -> "EFGABCD"

//PART 21
//Define a function that converts an "English" sentence into "Pig Latin"
//"English" is translated to "Pig Latin" by taking the first letter of every word, moving it to the end of the word and adding "ay".

//Hint: You can use previously defined functions to your advantage

//Example 1: “THE QUICK BROWN FOX -> “HETAY UICKQAY ROWNBAY OXFAY”
//Example 2: “JUMPS OVER THE LAZY DOG” -> “UMPSJAY VEROAY HETAY AZYLAY OGDAY”

//PART 22
//Define a function which returns the english name for any given number string from 1(ONE) to 99(NINETYNINE)
//*. Assume that the number will always have 2 digits
//Parameters: number (string)

//Example 1: "01" -> "ONE"
//Example 1: "51" -> "FIFTYONE"
//Example 1: "10" -> "TEN"
//Example 1: "12" -> "TWELVE"
//Example 1: "11" -> "ELEVEN"