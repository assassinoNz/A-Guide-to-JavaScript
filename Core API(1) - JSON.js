//WHAT IS JSON
//NOTE: JSON = JavaScript Object Notation
//NOTE: JSON is a method of converting JavaScript literals into string
//NOTE: JSON can only covert following JavaScript literals into string
    //String literal
    //Number literal
    //Boolean literal
    //Null literal
    //Array literal
    //Object literal (Since JSON is purely a data format, it cannot convert methods inside object literals)
//NOTE: Undefined literal cannot be converted to JSON

//CONVERTING EACH LITERAL TO JSON MANUALLY

//String Literal
//NOTE: JSON only have double quoted literals to represent strings
    // "foo" = "foo"
    // 'foo' = "foo"
    // 'Carol "Avenger" Danvers' = "Carol \"Avenger\" Danvers"
    // "Carol 'Avenger' Danvers" = "Carol 'Avenger' Danvers"

//Number Literal
//NOTE: JSON only have decimal literals to represent numbers
    // 12 = 12
    // 0xA = 10

//Boolean Literal
    // true = true
    // false = false

//Null Literal
    // null = null

//Array Literal
    // [] = []
    // ['foo'] = ["foo"]

//Object Literal
//NOTE: JSON converts all object literal keys into strings
    // {} = '{}'
    // {key: 'value'} = {"key": "value"}

//WHAT DOES JSON RETURN?
//NOTE: JSON always returns a single string since JSON converts JavaScript literals into strings

//===============================================================================
//|  JavaScript Literal  |  JavaScript Type  |  JSON Literal      |  JSON Type  |
//===============================================================================
//|  'foo'               |  "string"         |  "foo"             |  "string"   |
//|  0xA                 |  "number"         |  10                |  "string"   |
//|  true                |  "boolean"        |  true              |  "string"   |
//|  null                |  "object"         |  null              |  "string"   |
//|  ['foo']             |  "object"         |  ["foo"]           |  "string"   |
//|  {key: 'value'}      |  "object"         |  {"key": "value"}  |  "string"   |
//===============================================================================

//USING JSON CLASS
//NOTE: JSON is a class defined in the Core API to ease our work in converting JavaScript into JSON