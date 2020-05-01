//@ts-check
//PART 1
//Define the methods of the class "MyArrayOld" as required
class MyArrayOld {
    //1. Define the constructor method
    //Parameters: "array" (string array)
    //Definition: Initializes the properties "internalArray" and "length" properties of the instance
    //property "internalArray" equals to the parameter "array"
    //property "length" equals to the length of the parameter "array"
    constructor(array) {
        this.internalArray = array;
        this.length = array.length;
    }

    //2. Define an instance method with the identifier "print"
    //Parameters: <none>
    //Definition: Prints the "internalArray" on console
    //Return type: (void)
    print() {
        console.log(this.internalArray);
    }

    //3. Define an instance method with the identifier "reverse" to reverse the "internalArray"
    //Parameters: <none>
    //Definition: Replaces the "internalArray" with the reverse array of it
    //Return type: (void)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 7"
    reverse() {
        let reversedArray = [];
        let reversedArrayIndex = 0;
        for (let i = this.internalArray.length - 1; i >= 0; i--) {
            reversedArray[reversedArrayIndex] = this.internalArray[i];
            reversedArrayIndex++;
        }
        this.internalArray = reversedArray;
    }

    //4. Define an instance method with the identifier "join"
    //Parameters: "token" (string)
    //Definition: Concatenates and returns the "internalArray" elements into a string by a given "token"
    //Return type: (string)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 9"
    join(token) {
        let concatenatedArray = "";
        for (let i = 0; i < this.internalArray.length - 1; i++) {
            concatenatedArray += this.internalArray[i] + token;
        }
        concatenatedArray += this.internalArray[this.internalArray.length - 1];
        return concatenatedArray;
    }

    //5. Define an instance method with the identifier "concat"
    //Parameters: "array" (string array)
    //Definition: Combines an outside "array" with the "internalArray" and updates "internalArray". Finally updates the "length" property
    //Return type: (void)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 8"
    concat(array) {
        let combinedArrayIndex = this.internalArray.length;
        for (let i = 0; i < array.length; i++) {
            this.internalArray[combinedArrayIndex] = array[i];
            combinedArrayIndex++;
        }
        this.length = this.internalArray.length;
    }

    //5. Define an instance method with the identifier "push"
    //Parameters: "element" (string)
    //Definition: Adds the given "element" to the last index of the "internalArray" and returns the new length. Finally updates the "length" property
    //Return type: (number)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 16"
    push(element) {
        this.internalArray[this.internalArray.length] = element;
        this.length = this.internalArray.length;
        return this.internalArray.length;
    }

    //5. Define an instance method with the identifier "pop"
    //Parameters: <none>
    //Definition: Removes the last element  of the "internalArray" and returns it. Finally updates the "length" property
    //Return type: (string)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 15"
    pop() {
        let poppedArray = [];
        for (let i = 0; i < this.internalArray.length - 1; i++) {
            poppedArray[i] = this.internalArray[i];
        }
        let poppedElement = this.internalArray[this.internalArray.length - 1]
        this.internalArray = poppedArray;
        this.length = this.internalArray.length;
        return poppedElement;
    }
}

//PART 2
//Define the methods of the class "MyStringOld" as required
class MyStringOld {
    //1. Define the constructor method
    //Parameters: "value" (string)
    //Definition: Initializes the properties "internalValue" and "length" properties of the instance
    //property "internalValue" equals to the parameter "value"
    //property "length" equals to the length of the parameter "value"
    constructor(value) {
        this.internalValue = value;
        this.length = value.length;
    }

    //2. Define an instance method with the identifier "print"
    //Parameters: <none>
    //Definition: Prints the "internalValue" on console
    //Return type: (void)
    print() {
        console.log(this.internalValue);
    }

    //3. Define an instance method with the identifier "reverse" to reverse the "internalValue"
    //Parameters: <none>
    //Definition: Replaces the "internalValue" with the reverse string of it
    //Return type: void
    reverse() {
        let reversedString = "";
        for (let i = this.internalValue.length - 1; i >= 0; i--) {
            reversedString += this.internalValue[i];
        }

        this.internalValue = reversedString;
    }

    //4. Define an instance method with the identifier "split"
    //Parameters: "token" (string)
    //Definition: Splits and returns the "internalValue" into an array
    //Return type: (string array)
    split(token) {
        let textParts = [""];

        let textPartsIndex = 0;
        for (let i = 0; i < this.internalValue.length; i++) {
            if (this.internalValue[i] === token) {
                textPartsIndex++;
                textParts[textPartsIndex] = "";
            } else {
                textParts[textPartsIndex] += this.internalValue[i];
            }
        }

        return textParts;
    }

    //5. Define an instance method with the identifier "concat"
    //Parameters: "string" (string)
    //Definition: Combines an outside "string" with the "internalValue" and updates "internalValue". Finally updates the "length" property
    //Return type: (void)
    concat(string) {
        this.internalValue += string;
        this.length = this.internalValue.length;
    }

    //5. Define an instance method with the identifier "replace"
    //Parameters: "token" (string), "replaceWith" (string)
    //Definition: Replaces all occurrences of the given token within "internalValue" with the "replaceWith". Finally updates the "length" property
    //Return type: (void)
    //Hint: Reuse the function defined in the "Activity - Functions > PART 16"
    replace(token, replaceWith) {
        let formattedValue = "";
        for (let i = 0; i < this.internalValue.length; i++) {
            if (this.internalValue[i] !== token) {
                formattedValue += this.internalValue[i];
            } else {
                formattedValue += replaceWith;
            }
        }
        this.internalValue = formattedValue;
        this.length = this.internalValue.length;
    }

    //5. Define an instance method with the identifier "includes"
    //Parameters: "token" (string)
    //Definition: Checks whether the "token" is part of the "internalValue"
    //Return type: (boolean)
    includes(token) {
        let hasElement = false;
        for (let i = 0; i < this.internalValue.length; i++) {
            if (this.internalValue[i] === token) {
                hasElement = true;
                break;
            }
        }
        return hasElement;
    }
}

//PART 3
//Modify and redeclare"MyArrayOld" class as "MyArray" for the following requirements

//1. Modify the "reverse()" method to return a new instance of "MyArray"
//Instantiate the instance with the "internalArray" property as the new parameter

//2. Modify the "join()" method to return a new instance of "MyString"
//Instantiate the instance with the previous return value of "join()" as the new parameter

//3. Modify the "concat()" method to return a new instance of "MyArray"
//Instantiate the instance with the "internalArray" property as the new parameter

class MyArray {
    constructor(array) {
        this.internalArray = array;
        this.length = array.length;
    }

    print() {
        console.log(this.internalArray);
    }

    reverse() {
        let reversedArray = [];
        let reversedArrayIndex = 0;
        for (let i = this.internalArray.length - 1; i >= 0; i--) {
            reversedArray[reversedArrayIndex] = this.internalArray[i];
            reversedArrayIndex++;
        }
        this.internalArray = reversedArray;
        return new MyArray(this.internalArray);
    }

    join(token) {
        let concatenatedArray = "";
        for (let i = 0; i < this.internalArray.length - 1; i++) {
            concatenatedArray += this.internalArray[i] + token;
        }
        concatenatedArray += this.internalArray[this.internalArray.length - 1];
        return new MyString(concatenatedArray);
    }

    concat(array) {
        let combinedArrayIndex = this.internalArray.length;
        for (let i = 0; i < array.length; i++) {
            this.internalArray[combinedArrayIndex] = array[i];
            combinedArrayIndex++;
        }
        this.length = this.internalArray.length;
        return new MyArray(this.internalArray);
    }

    push(element) {
        this.internalArray[this.internalArray.length] = element;
        this.length = this.internalArray.length;
        return this.internalArray.length;
    }

    pop() {
        let poppedArray = [];
        for (let i = 0; i < this.internalArray.length - 1; i++) {
            poppedArray[i] = this.internalArray[i];
        }
        let poppedElement = this.internalArray[this.internalArray.length - 1]
        this.internalArray = poppedArray;
        this.length = this.internalArray.length;
        return poppedElement;
    }
}

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

class MyString {
    constructor(value) {
        this.internalValue = value;
        this.length = value.length;
    }

    print() {
        console.log(this.internalValue);
    }

    reverse() {
        let reversedString = "";
        for (let i = this.internalValue.length - 1; i >= 0; i--) {
            reversedString += this.internalValue[i];
        }

        this.internalValue = reversedString;
        return new MyString(this.internalValue);
    }

    split(token) {
        let textParts = [""];

        let textPartsIndex = 0;
        for (let i = 0; i < this.internalValue.length; i++) {
            if (this.internalValue[i] === token) {
                textPartsIndex++;
                textParts[textPartsIndex] = "";
            } else {
                textParts[textPartsIndex] += this.internalValue[i];
            }
        }

        return new MyArray(textParts);
    }

    concat(string) {
        this.internalValue += string;
        this.length = this.internalValue.length;
        return new MyString(this.internalValue);
    }

    replace(token, replaceWith) {
        let formattedValue = "";
        for (let i = 0; i < this.internalValue.length; i++) {
            if (this.internalValue[i] !== token) {
                formattedValue += this.internalValue[i];
            } else {
                formattedValue += replaceWith;
            }
        }
        this.internalValue = formattedValue;
        this.length = this.internalValue.length;
        return new MyString(this.internalValue);
    }

    includes(token) {
        let hasElement = false;
        for (let i = 0; i < this.internalValue.length; i++) {
            if (this.internalValue[i] === token) {
                hasElement = true;
                break;
            }
        }
        return hasElement;
    }
}