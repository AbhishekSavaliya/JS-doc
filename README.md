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
* The call to alert does not return a value. Or, in other words, it returns undefined
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

values | Becames
------ | -------
undefined | NaN
null | 0
true and false | 0 and 1
string | Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

3. Boolean Conversion
* happens in logical operations
* Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
* Other values become true.
```javascript
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```
* string '0' is true
* undefined is NaN as a number, not 0.
* "0" and space-only strings like " " are true as a boolean.

### Basic operators
* operand – is what operators are applied to
* unary operator: oprand is one EX: nagation ==> x = -x
* binary operator: oprand is two EX: substrection ==> x = 5-5
* above to example is different opretor but shares same key
* +, -, *, /, %, ** are operator

#### String concatenation with binary +
```javascript
let s = "my" + "string";
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"
```
#### Numeric conversion, unary +
```javascript
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
```
* The binary plus would add them as strings:
```javascript
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings
```
```javascript
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```
#### Operator precedence
() > > +(unary) > -(unary) > ** > / > * > + > - > =

#### Assignment operator
* All operators in JavaScript return a value
```javascript
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
```
* Chaining assignments is posible, execute right to left
* ++,-- operator
* all operator return value: ++x return x+1 where x++ returns x
```javascript
let counter = 1;
alert( 2 * ++counter ); // 4
```
```javascript
let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value
```
* The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.
```javascript
let counter = 1;
alert( 2 * ++counter ); // 4 dont use; one line one action
```
#### Bitwise operators
* treat arguments as 32-bit integer numbers and work on the level of their binary representation.
* used in cryptography
AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

#### Comma(,)
* evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
* very low precedence < assignment op.
```javascript
let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)
```
* use of ',' in JS:
```javascript
// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```

### Compairisons
* >, <, >=, <=, ==, !=
* we can assign result of compairition
```javascript
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true
```
#### String compairisons
*  uses the so-called “dictionary” or “lexicographical” order
* compair with  internal encoding table JavaScript uses (Unicode)
```javascript
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```
#### Comparison of different types
```javascript
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
alert( true == 1 ); // true
alert( false == 0 ); // true

////// A funny consequence:
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
```
#### Strict equality
* A strict equality operator === checks the equality without type conversion.
```javascript
alert( 0 == false ); // true
alert( '' == false ); // true
alert( 0 === false ); // false, because the types are different
alert( null === undefined ); // false
alert( null == undefined ); // true
```
* For maths and other comparisons < > <= >= null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN
* Strange result: null vs 0
```javascript
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```
* The reason is that an equality check == and comparisons > < >= <= work differently.
* Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
* An incomparable undefined:
```javascript
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```
* Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons
* The equality check (3) returns false because undefined only equals null, undefined, and no other value.

### If
#### Boolean conversion
* A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values and other is true.

#### ? oprator
* ? operator has a low precedence, so it executes after the comparison >.
```javascript
let accessAllowed = (age > 18) ? true : false;
```
* Multiple ‘?’:
```javascript
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```
### Logical operators

#### OR ||
* returns the first truthy value or the last one if no truthy value is found.
* A value is returned in its original form, without the conversion.   
* until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument
```javascript
true || alert("not printed");
false || alert("printed");
```
* people use this feature to execute commands only if the condition on the left part is falsy.

#### AND &&
* AND returns the first falsy value or the last value if none were found.
* Precedence of AND && is higher than OR ||

#### ! (NOT)
* precedence of NOT ! is the highest of all logical operators
```javascript
/// we can also use Boolen method
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
```
