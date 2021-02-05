# JS-documentation
## Introduction:
* initially created to “make web pages alive”.
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
