//PART 1
//Consider the following code
var foo1 = "g";

{
    var foo2 = "gb";
}

function testFunction() {
    var foo3 = "f";

    {
        var foo4 = "fb";
    }
}

//Rewrite the above code considering scoping anomaly caused by "var"
var foo1 = "g";
var foo2 = "gb";
{

}

function testFunction() {
    var foo3 = "f";
    var foo4 = "fb";
    {

    }
}

//PART 2
//Consider the following code
num = 6;
console.log(num);
var num;

//Rewrite the above code considering hoisting anomaly caused by "var"
var num;
num = 6;
console.log(num);

//PART 3
//Comment out inaccessible identifiers
var globalVar = "gV";

{
    var globalBlockVar = "gbV";
    console.log(globalVar, globalBlockVar, globalFunction, /*functionVar, functionBlockVar*/);
}

function globalFunction() {
    var functionVar = "fV";

    {
        var functionBlockVar = "fbV";
        console.log(globalVar, globalBlockVar, globalFunction, functionVar, functionBlockVar);
    }

    console.log(globalVar, globalBlockVar, globalFunction, functionVar, functionBlockVar);
}

console.log(globalVar, globalBlockVar, globalFunction, /*functionVar, functionBlockVar*/);

//PART 4
//Comment out inaccessible identifiers
let globalLet = "gL";

{
    let globalBlockLet = "gbL";
    console.log(globalLet, globalBlockLet, globalFunction, /*functionLet, functionBlockLet*/);
}

function globalFunction() {
    let functionLet = "fL";

    {
        let functionBlockLet = "fbL";
        console.log(globalLet, /*globalBlockLet,*/ globalFunction, functionLet, functionBlockLet);
    }

    console.log(globalLet, /*globalBlockLet,*/ globalFunction, functionLet, /*functionBlockLet*/);
}

console.log(globalLet, /*globalBlockLet,*/ globalFunction, /*functionLet, functionBlockLet*/);