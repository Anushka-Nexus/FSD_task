//JAVASCRIPT

//WHAT IS JAVASCRIPT?
//Ans :-JavaScript is a high-level, interpreted programming language used to create interactive and dynamic content on websites.
//       It's one of the core technologies of the web, alongside HTML and CSS.
//       Key Features:
//         Client-side: Runs in the user's browser
//         Event-driven: Reacts to user input
//         Lightweight: Designed to be fast and simple
 //        Versatile: Can be used on both front-end and back-end

//What is Interpreter?
//Ans :- An interpreter is a program that reads and executes code line by line, instead of translating the entire code into machine
//       language all at once like a compiler does.
//       Interpreter = Runs code line by line, directly.
//       Compiler = Translates all code to machine code before running it.


//Q.Diff between interpreter and compiler
//Feature	                          Interpreter	                                     Compiler
//Execution	                  Executes code line by line                	      Translates entire code before running
//Speed (initial run)	      Slower (runs line by line each time)	              Faster (runs compiled code directly)
//Error Handling	          Stops at the first error during execution	          Shows all errors after compilation
//Examples of Languages	      JavaScript, Python, Ruby                          	C, C++, Rust, Go
//Output	                  No separate file; directly executes code	          Creates a binary/executable file
//Portability	              Depends on interpreter installed	                  Depends on compiled file for target system
//Development Use	          Good for testing, scripting, rapid changes	      Better for performance-critical applications

//how interpreter works
//Ans:-(1) Reads the source code
    //The interpreter takes the code you wrote (like JavaScript or Python) and reads it one instruction at a time, from top to bottom.

    //(2)Analyzes the code
    //It checks each line for correct syntax (grammar) and understands what the instruction means.
    
    //(3)Translates and executes immediately
    //Instead of translating the whole program at once, it converts each line into machine-level commands and runs them immediately.
    
    //(4)Moves to the next line
    //After executing one instruction, it moves on to the next line and repeats the process until the program ends.



//Q.Syntax of creating variablesStep-by-step process:


//Syntax:- scope(var/let/const) var_name (assignment operator)= data / value

//scope:-Scope refers to the area of code where a variable is visible or accessible.

//var:- var has a public scope.The variable exists within the entire function where it’s declared.

//let:- let has a protected scope.The variable only exists within the block ({ }) it's declared in.
//        Not accessible outside that block.
//        Hoisted: Yes, but not initialized, so you can't use it before declaration.
//        Re-declaration is not allowed in the same scope.

//const :-Same scope behavior as let.
//        But once assigned, it cannot be reassigned.
//        Used for values that should not change.

//Rules while declaring or creating a variable-name
//1.Variable name cannot be start with any number or sprecial symbol.
//2.Variable name cannot contain any sumbol except a underscore.
//3.it can be alphanumeric.

//ex:- let data1 = 10

//OUTPUT STATEMENT
//console.log() :-
//              Used to: Print messages or values to the browser console (seen via Inspect → Console).
//               Good for debugging.
//               Can display strings, numbers, arrays, objects, etc.

//document.write() :-
//                Used to: Write content directly into the HTML page.
//                Not recommended for dynamic websites after the page has loaded — it can overwrite the page.

//window.alert():-
//        Used to: Show an alert box with a message.//       
//        Automatically converts values into a string.//       
//        You can’t style the alert box — it’s handled by the browser.


//INPUT STATEMENT
//window.prompt():-
//             What it does:
//             Displays a dialog box asking the user to enter input.
//             Returns the input as a string.
//             If the user clicks Cancel, it returns null

//            ex:-let name = window.prompt("What is your name?");
//                console.log(name); 


//Expression:-
//   any statement which has = in it is an expression
//   An expression is any valid piece of code that produces a value.

//HIGH LEVEL LANGUAGE :-
//              A high-level programming language is a language that is closer to human language and further from machine code.
//              It's designed to be easy to read, write, and understand.
//              Uses English-like words (e.g. if, while, print, function)
//              Hides complex hardware details like memory management

// CONCATENATE {"+"}
//Concatenation means joining two or more strings together to make one combined string.
//LET STRING1="10"
//LET STRING2="10"
//let result = string1 + string2;
//OUTPUT :-1010



