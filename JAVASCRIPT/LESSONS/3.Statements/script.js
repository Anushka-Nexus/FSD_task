//Wap to find out largest number from four given numbers.

let num1 = window.prompt("Enter any number-1 for comparison")
let num2 = window.prompt("Enter any number-2 for comparison")
let num3 = window.prompt("Enter any number-3 for comparison")
let num4 = window.prompt("Enter any number-4 for comparison")

if (num1 > num2) {
    if (num1 > num3) {
        if (num1 > num4) {
            window.alert("The largest number is :-" + num1)
        }
        else {
            if (num4 > num2) {
                if (num4 > num3) {
                    window.alert("The largest no. is : " + num4)
                }
            }
        }
    }
} else if (num2 > num3) {
    if (num2 > num4) {
        window.alert("The largest number is :-" + num2)
    }
    else {
        window.alert("The largest number is :-" + num4)
    }
} else if (num3 > num4) {
    window.alert("The largest number is :-" + num3)
}

else {
    window.alert("The largest number is :" + num4)
}

//Wap to find out largest number from 5 given number :
//     let number1 = 30
//     let number2 = 40
//     let number3 = 65
//     let number4 = 89
//     let number5 = 85

// if (number1 > number2) {
//     if (number1 > number3) {
//         if (number1 > number4) {
//             if(number1>number5){
//                  document.write("The largest number is :-" + number1)
//             }  
//         }
//         else {
//             if (number5 > number2) {
//                 if (number5 > number3) {
//                     if(number5>number4){
//                         document.write("The largest no. is : " + number5)
//                     }
//                 }
//             }
//         }
//     }
// } else if (number2 > number3) {
//     if (number2 > number4) {
//       if(number2 > number5){
//           document.write("The largest number is :-" + number2)
//       }
//     }
//     else {
//         if (number5 > number3) {
//                     if(number5>number4){
//                         document.write("The largest no. is : " + number5)
//                     }
//                 }
//     }
// } else if (number3 > number4) {
//     if(number3 > number5){
//          document.write("The largest number is :-" + number3)
//     }
//     else{
//         if(number5 > number4){
//         document.write("The largest no. is : " + number5)
//     }
//     }

// }

// else if(number4 > number5) {
//     document.write("The largest number is :" + number4)
// }
// else{
//      document.write("The largest no. is : " + number5)
// }


//wap to find out largest from 5 numbers 
let number1 = 30;
let number2 = 40;
let number3 = 65;
let number4 = 89;
let number5 = 85;

if (number1 > number2) {
    if (number1 > number3) {
        if (number1 > number4) {
            if (number1 > number5) {
                document.write("The largest number is: " + number1);
            } else {
                document.write("The largest number is: " + number5);
            }
        } else {
            if (number4 > number5) {
                document.write("The largest number is: " + number4);
            } else {
                document.write("The largest number is: " + number5);
            }
        }
    } else {
        if (number3 > number4) {
            if (number3 > number5) {
                document.write("The largest number is: " + number3);
            } else {
                document.write("The largest number is: " + number5);
            }
        } else {
            if (number4 > number5) {
                document.write("The largest number is: " + number4);
            } else {
                document.write("The largest number is: " + number5);
            }
        }
    }
} else {
    if (number2 > number3) {
        if (number2 > number4) {
            if (number2 > number5) {
                document.write("The largest number is: " + number2);
            } else {
                document.write("The largest number is: " + number5);
            }
        } else {
            if (number4 > number5) {
                document.write("The largest number is: " + number4);
            } else {
                document.write("The largest number is: " + number5);
            }
        }
    } else {
        if (number3 > number4) {
            if (number3 > number5) {
                document.write("The largest number is: " + number3);
            } else {
                document.write("The largest number is: " + number5);
            }
        } else {
            if (number4 > number5) {
                document.write("The largest number is: " + number4);
            } else {
                document.write("The largest number is: " + number5);
            }
        }
    }
}

//Wap for finding whether the person age is equals to or above 18.

let age = 20

if (age >= 18) {
    console.log("Eligible for driving")
}
else {
    console.log("NOT eligible for driving")
}

//Wap program to check whether the given number is even or odd.

let Check_no = 244
if (Check_no % 2 == 0) {
    console.log("Given number is even")
}
else {
    console.log("Given number is odd")
}

//Wap  to check whether the number is positive or negative.

let Num_check=45
if (Num_check >= 0) {
    console.log("The number is +ve")
}
else {
    console.log("The number is -ve")
}

//Wap to check whether the password is same as the user entered.

let passkey = "password1234"
let password = window.prompt("Enter your password :-")

if (password == passkey) {
    console.log("You've entered your password correctly")
}
else {
    console.log("You've entered your password Incorrectly")
}

//Wap to perform any arithemetic operation using switch case 

let value1 = Number(window.prompt("Enter any number-1"))
let value2 = Number(window.prompt("Enter any number-2"))
let switch_value =Number(window.prompt("Enter 1 for addition 2 for substraction 3 for multiplication 4 for division and 5 for modulus"))

switch(switch_value)
{
    case 1 : 
             console.log("Additon :-" ,value1 + value2);
              break;
    case 2 : 
             console.log("Difference :-" ,value1 - value2);
              break;
    case 3 : 
             console.log("Product:-" ,value1 *value2);
              break;
    case 4 : 
             console.log("Division :-" ,value1 / value2);
              break;
    case 5 : 
             console.log("Division :-" ,value1 % value2);
              break;
    default : 
              console.log("Please enter valid option");
}

//Wap using ternary operator 

let mark = 300;

(mark >=200)? console.log(" Student is pass"):console.log(' student is fail')

//wap to check smallest from three numbers using logical AND.

let val1 = 34;
let val2 = 32;
let val3 = 54;

if(val1<val2 && val1<val3){
    console.log(val1+ " is the smallest number")
}
else if(val2<val1 && val2<val3){
    console.log(val2+ " is the smallest number")
}
else{
    console.log(val3+ " is the smallest number")
}

