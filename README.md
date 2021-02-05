# JS-documentation

## Introduction:
* Initially created to “make web pages alive”.
* Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.
* In this aspect, JavaScript is very different from another language called Java.
* can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.
* for example V8 - in Chrome and Opera.
* SpiderMonkey - in Firefox.
* ChakraCore - Microsoft Edge

### How do engines work?
1. The engine (embedded if it’s a browser) reads (“parses”) the script.
2. converts (“compiles”) the script to the machine language.
3. the machine code runs, pretty fast.

### Why JS is unique?
* Full integration with HTML/CSS.
* Simple things are done simply.
* Support by all major browsers and enabled by default.

## JS Fundamentals:

### Insert JS in HTML documents
Generally, there are two ways of inserting JS into Webpage
1. In HTML document itself.
```HTML
<script>
    alert( 'Hello, world!' );
</script>
```
2. Introducing External JS file.
```HTML
<script src="/path/to/script.js"></script>
```
* When there are less code of JS use first way
* When the logic is complex then apply second way

### code structure

* **Statements** - syntax constructs and commands that perform actions
* Automatic semicolon insertion
* In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!
* Example : 
```javascript
alert("There will be an error")
[1, 2].forEach(alert)
```
* **comments** - // for one line and /*...*/ for multiline
* nested comments is not allowed

* 'use strict' used at top for making the code in modern way
* In between the script will not work
* morden JS includes class and module if there is use of this properties not need to required write 'use script' at top.

### Variables:
* Declaretion:
```javascript
let message;
```
* assignment:
```javascript
message = 'hello';
```
* Declaretion and assignment:
```javascript
let message = 'hello';
```
* Var is older version of let keyword used for same purpose
* Variable is the box name and value is the thing inside that box
* Reassignment is possible
* Declaring twice triggers an error
* alphanumeric, $ and _ use in variable naming, can not use digit first
* Non-Latin letters are allowed, but not recommended
* Case matters
* Reserved names cannot taken
* In old version, assignment can be done without let or var
```javascript
// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5
```
### Constants
* To declare a constant (unchanging) variable, use const instead of let
```javascript
const myBirthday = '18.04.1982';
```
* When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.
* constant veriable name should be capital when direct assignment is there.
```javascript
const COLOR_RED = "#F00";
```
* When there is constant which assign with some veriable then constant veriable name should be normal (camelcase).
```javascript
let time = 3*60;
const pageLoadTime = time;
```
### Data types
* eight basic data types
* Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.
1. Number
    * represents both integer and floating points
    * Infinity, -Infinity and NaN are type of number
    * NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
    ```javascript
       alert( "not a number" / 2 );
    ```
2. BigInt
    * sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.
    * value is created by appending n to the end of an integer
    ```javascript
       const bigInt = 1234567890123456789012345678901234567890n;
    ```
3. String
    * there are 3 types of quotes.
        Double quotes: "Hello".
        Single quotes: 'Hello'.
        Backticks: `Hello`.
    * Double and single quotes are “simple” quotes.
    * Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
    ```javascript
       let name = "John";
       // embed a variable
       alert( `Hello, ${name}!` ); // Hello, John!
       // embed an expression
       alert( `the result is ${1 + 2}` ); // the result is 3
    ```
    * The expression inside ${…} is evaluated and the result becomes a part of the string. veriable or expression
4. Boolean
    * Boolean values also come as a result of comparisons:
    ```javascript
       let isGreater = 4 > 1;
       alert( isGreater ); // true (the comparison result is "yes")
    ```
5. Null
    * null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
    * represents “nothing”, “empty” or “value unknown”.
    ```javascript
       let age = null;
    ```
6. undefind
    * veriable declared but not assigned.
    ```javascript
       let age;
       let x = undefined;
    ```
    * one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things
7. Objects
    * used to store collections of data and more complex entities.
     ```javascript
        let x = {name:'Abhi',age:21};
     ```
8. Symbols
    * used to create unique identifiers for objects.

* typeof oprator

    * returns the type of the argument
    * It supports two forms of syntax:
        A. As an operator: typeof x.
        B. As a function: typeof(x).
    ```javascript
    typeof undefined // "undefined"
    typeof 0 // "number"
    typeof 10n // "bigint"
    typeof true // "boolean"
    typeof "foo" // "string"
    typeof Symbol("id") // "symbol"
    typeof Math // "object"  
    typeof null // "object" 
    typeof alert // "function" 
     ```
    * The result of typeof null is "object". That’s an officially recognized error in typeof behavior

### Interaction: alert, prompt, confirm

1. alert:
* shows a message and waits for the user to press “OK”
```javascript
 alert("Hello");
 ```

2. prompt:
```javascript
       result = prompt('title', default);
```
* default : An optional second parameter, the initial value for the input field
* shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null
* In IE: always supply a default, Internet Explorer will insert the text "undefined" into the prompt.

3. confirm
```javascript
       result = confirm(question);
```
* shows a modal window with a question and two buttons: OK and Cancel.

All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

### Type Conversions

1. String Conversion
```javascript
let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string
```
2. Numeric Conversion
* happens in mathematical functions and expressions automatically.
```javascript
alert( "6" / "2" ); // 3, strings are converted to numbers
```
```javascript
let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number
```
* If the string is not a valid number, the result of such a conversion is NaN.
