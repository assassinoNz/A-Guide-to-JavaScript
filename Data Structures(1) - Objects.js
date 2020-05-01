//USING CLASSES
//NOTE: Officially, objects are created by instantiating classes
//NOTE: All the methods and properties of a class is known as a members
//NOTE: When a member of a class is a variable, it is known as a member variable/property/field
//NOTE: When a member of a class is a function, it is known as a method/behaviour

//Non-Static Methods And Properties
class Television {
    //NOTE: If you want to add non-static properties to your class, you must use the special "constructor" method
    //NOTE: If your class doesn't have non-static properties, you can ignore the "constructor"method 
    constructor(aspectRatio, color, screenType) {
        this.aspectRatio = aspectRatio;
        this.color = color;
        this.screenType = screenType;
    }

    on() {

    }

    off() {

    }

    changeChannel(channel) {

    }
}

//Using Non-Static Methods and Non-Static Properties
//NOTE: To use non-static methods, a class must be instantiated first
//NOTE: Relevant parameters must be provided when instantiating if there is a "constructor" method present
let sonyTv = new Television(21.9, "Black", "LED");
sonyTv.on();
sonyTv.changeChannel(69);
sonyTv.off();
console.log(sonyTv.aspectRatio);

//Static Methods
//WARNING: JavaScript does not support static properties
class MyMath {
    static add(number1, number2) {
        return number1 + number2;
    }

    static multiply(number1, number2) {
        return number1 * number2;
    }
}

//Using Static Methods
//NOTE: Static methods cannot be accessed using instances/objects
let myAddition = MyMath.add(1, 2);
console.log(myAddition);
console.log(MyMath.multiply(1, 2));

//USING JAVASCRIPT EXCLUSIVE OBJECT LITERALS
//NOTE: JavaScript has object literals that can create objects without even needing a class

//Adding members dynamically
let samsungTv = {};
samsungTv.aspectRatio = 21.9;
samsungTv.color = "Black";
samsungTv.screenType = "LED";
samsungTv.on = function () {}
samsungTv.changeChannel = function (channel) {}
samsungTv.off = function () {}

//Adding members statically
let panasonicTv = {
    aspectRatio : 21.9,
    color : "Black",
    screenType : "LED",
    on : function () {},
    changeChannel : function (channel) {},
    off : function () {}
};

//Removing members
//NOTE: "delete" keyword only works with object literals
delete samsungTv.aspectRatio;
delete panasonicTv.changeChannel;

//Accessing Methods and Properties
samsungTv.changeChannel(69);
console.log(samsungTv.color);
//NOTE: Objects can be accessed as associative arrays. Therefore JavaScript objects are unofficially known as associative arrays
samsungTv["changeChannel"](69);
console.log(samsungTv["color"]);
//NOTE: Even the instances can be accessed as associative arrays
console["log"]("log method is accessed as an associative array");

