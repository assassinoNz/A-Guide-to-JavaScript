//@ts-check
//PART 1
//Define the methods of the class "MyArrayOld" as required
class MyArrayOld {
    //1. Define the constructor method
    //Parameters: "array" (string array)
    //Definition: Initializes the properties "internalArray" and "length" properties of the instance
    //property "internalArray" equals to the parameter "array"
    //property "length" equals to the length of the parameter "array"

    //2. Define an instance method with the identifier "print"
    //Parameters: <none>
    //Definition: Prints the "internalArray" on console
    //Return type: (void)

    //3. Define an instance method with the identifier "reverse" to reverse the "internalArray"
    //Parameters: <none>
    //Definition: Replaces the "internalArray" with the reverse array of it
    //Return type: (void)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 7"

    //4. Define an instance method with the identifier "join"
    //Parameters: "token" (string)
    //Definition: Concatenates and returns the "internalArray" elements into a string by a given "token"
    //Return type: (string)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 9"

    //5. Define an instance method with the identifier "concat"
    //Parameters: "array" (string array)
    //Definition: Combines an outside "array" with the "internalArray" and updates "internalArray". Finally updates the "length" property
    //Return type: (void)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 8"

    //5. Define an instance method with the identifier "push"
    //Parameters: "element" (string)
    //Definition: Adds the given "element" to the last index of the "internalArray" and returns the new length. Finally updates the "length" property
    //Return type: (number)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 16"

    //5. Define an instance method with the identifier "pop"
    //Parameters: <none>
    //Definition: Removes the last element  of the "internalArray" and returns it. Finally updates the "length" property
    //Return type: (string)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 15"
}

//PART 2
//Define the methods of the class "MyStringOld" as required
class MyStringOld {
    //1. Define the constructor method
    //Parameters: "value" (string)
    //Definition: Initializes the properties "internalValue" and "length" properties of the instance
    //property "internalValue" equals to the parameter "value"
    //property "length" equals to the length of the parameter "value"

    //2. Define an instance method with the identifier "print"
    //Parameters: <none>
    //Definition: Prints the "internalValue" on console
    //Return type: (void)

    //3. Define an instance method with the identifier "reverse" to reverse the "internalValue"
    //Parameters: <none>
    //Definition: Replaces the "internalValue" with the reverse string of it
    //Return type: void

    //4. Define an instance method with the identifier "split"
    //Parameters: "token" (string)
    //Definition: Splits and returns the "internalValue" into an array
    //Return type: (string array)

    //5. Define an instance method with the identifier "concat"
    //Parameters: "string" (string)
    //Definition: Combines an outside "string" with the "internalValue" and updates "internalValue". Finally updates the "length" property
    //Return type: (void)

    //5. Define an instance method with the identifier "replace"
    //Parameters: "token" (string), "replaceWith" (string)
    //Definition: Replaces all occurrences of the given token within "internalValue" with the "replaceWith". Finally updates the "length" property
    //Return type: (void)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 16"

    //5. Define an instance method with the identifier "includes"
    //Parameters: "token" (string)
    //Definition: Checks whether the "token" is part of the "internalValue"
    //Return type: (boolean)
}

//PART 3
//Modify and redeclare"MyArrayOld" class as "MyArray" for the following requirements

//1. Modify the "reverse()" method to return a new instance of "MyArray"
//Instantiate the instance with the "internalArray" property as the new parameter

//2. Modify the "join()" method to return a new instance of "MyString"
//Instantiate the instance with the previous return value of "join()" as the new parameter

//3. Modify the "concat()" method to return a new instance of "MyArray"
//Instantiate the instance with the "internalArray" property as the new parameter

//PART 4
//Modify and redeclare"MyStringOld" class as "MyString" for the following requirements

//1. Modify the "reverse()" method to return a new instance of "MyString"
//Instantiate the instance with the "internalValue" property as the new parameter

//2. Modify the "split()" method to return a new instance of "MyArray"
//Instantiate the instance with the previous return value of "split()" as the new parameter

//3. Modify the "concat()" method to return a new instance of "MyString"
//Instantiate the instance with the "internalValue" property as the new parameter

//4. Modify the "replace()" method to return a new instance of "MyString"
//Instantiate the instance with the "internalValue" property as the new parameter