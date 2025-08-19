//wap to create a arrow function to perform basic arithemetic operation
//argument but no return


let arithemetic = (num1, num2) => {
    let add = num1 + num2
    let difference = num1 - num2
    let product = num1 * num2
    let quotient = num1 / num2
    let remainder = num1 % num2
    console.log("The Addition is :-" + add)
    console.log("The Difference is :-" + difference)
    console.log("The product is :-" + product)
    console.log("The quotient is :-" + quotient)
    console.log("The remainder is :-" + remainder)
}

arithemetic(100, 10)

//wap to create a arrow function which check largest of 4 numbers.
//no argument and no return
let largest_number = () => {
    let num1 = Number(window.prompt("Enter any number-1 for comparison"))
    let num2 = Number(window.prompt("Enter any number-2 for comparison"))
    let num3 = Number(window.prompt("Enter any number-3 for comparison"))
    let num4 = Number(window.prompt("Enter any number-4 for comparison"))

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
}

//wap to create a arrow function which checks largest of 5 numbers.
//no arg no return
let largest_frm5 = () => {
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


}

//Wap to create a fat arrow function for finding whether the person age is equals to or above 18 .
//argument and return
let eligible = (age) => {
    if (age >= 18) {
        return console.log("Eligible for driving")
    }
    else {
        return console.log("NOT eligible for driving")
    }
}

let eligiblity = eligible(Number(window.prompt(`Enter your age :-`)))

//Wap  to create a function to check whether the given number is even or odd.
//no agrument no return
let Check = () => {
    let Check_no = Number(window.prompt("Enter number to check if it is even or odd :-"))
    if (Check_no % 2 == 0) {
        console.log("Given number is even")
    }
    else {
        console.log("Given number is odd")
    }
}
Check()

//Wap  to check whether the number is positive or negative using function.
//no agrument no return
let check_num = () => {
    let Num_check = Number(window.prompt("Enter number to check if it is positive or negative :-"))
    if (Num_check >= 0) {
        console.log("The number is +ve")
    }
    else {
        console.log("The number is -ve")
    }
}
check_num()

//Wap to check whether the password is same as the user entered.
//argument but no return
let check_password = (password) => {
    let passkey = "password1234"

    if (password == passkey) {
        console.log("You've entered your password correctly")
    }
    else {
        console.log("You've entered your password Incorrectly")
    }
}

check_password(window.prompt("Enter your password :-"))

//Wap to perform any arithemetic operation using switch case using function.
//no agrument no return
let switch_function = () => {
    let value1 = Number(window.prompt("Enter any number-1"))
    let value2 = Number(window.prompt("Enter any number-2"))
    let switch_value = Number(window.prompt("Enter 1 for addition 2 for substraction 3 for multiplication 4 for division and 5 for modulus"))

    switch (switch_value) {
        case 1:
            console.log("Additon :-", value1 + value2);
            break;
        case 2:
            console.log("Difference :-", value1 - value2);
            break;
        case 3:
            console.log("Product:-", value1 * value2);
            break;
        case 4:
            console.log("Division :-", value1 / value2);
            break;
        case 5:
            console.log("Division :-", value1 % value2);
            break;
        default:
            console.log("Please enter valid option");
    }

}

switch_function()

//Wap to create a function which checks whether the student is pass or fail using ternary operator
// argument but no return

let student_result = (mark) => {
    (mark >= 200) ? console.log(" Student is pass") : console.log(' student is fail')
}
student_result(Number(window.prompt("Enter total marks obtained out of 500")))

//wap , create a function to check smallest from three numbers using logical AND.
//no argument but return
let smallest = () => {
    let val1 = 34;
    let val2 = 32;
    let val3 = 54;

    if (val1 < val2 && val1 < val3) {
        return console.log(val1 + " is the smallest number")
    }
    else if (val2 < val1 && val2 < val3) {
        return console.log(val2 + " is the smallest number")
    }
    else {
        return console.log(val3 + " is the smallest number")
    }
}

let small = smallest()

//wap to create a function to print a factorial of a number.
let factorial = (num) => {
    let ans = 1

    while (num > 0) {
        ans = ans * num
        num--
    }
    return console.log("Factorial is :-" + ans)
}

let fact1 = factorial(13)
let fact2 = factorial(6)

//wap using function and while loop to print even numbers from 0 to 50
//no arg no return
let even_nums = () => {
    console.log("Even no. from the range 1 to 50 are :-")
    let num1 = 0
    while (num1 <= 50) {
        if (num1 % 2 == 0) {
            console.log(num1)
        }
        num1++
    }
}

even_nums()

//wap using function and while loop to print even numbers from 0 to 50
//no arg no return
let odd_nums = () => {
    console.log("Even no. from the range 1 to 50 are :-")
    let num1 = 0
    while (num1 <= 50) {
        if (num1 % 2 != 0) {
            console.log(num1)
        }
        num1++
    }
}

odd_nums()


//wap to find out whether the given no. is armstrong or not also from range 1 to 500 using function.
//no arg no return
let armstrong = () => {
    let range = 100
    let count_armstrong = 0

    console.log("The list of armstrong number:-")
    while (range <= 500) {
        let copy_num = range;
        let sum = 0;

        while (copy_num != 0) {
            let last_digit = copy_num % 10;
            sum = sum + (last_digit * last_digit * last_digit);
            copy_num = parseInt(copy_num / 10)
        }

        if (sum == range) {
            console.log(range + " is an armstrong number");
            count_armstrong++;
        }

        range++;
    }
    console.log("There are total " + count_armstrong + " armstrong numbers from range 100 to 500");
}

//wap to find out reverse of the numbers from the range 50 to 200 also check whether the given number is palindrome or not using function.
//reverse-num = reverse-num * 10 + last-digit
// arg no return

let Palindrome = (start_num) => {
    let count_palindrome = 0
    let lastDigit = 0

    console.log("The list of palindrome number:-")
    while (start_num <= 200) {
        let original = start_num;
        let reverse = 0;

        while (original != 0) {
            lastDigit = original % 10;
            reverse = reverse * 10 + lastDigit;
            original = parseInt(original / 10);
        }

        if (start_num == reverse) {
            console.log(start_num + " is a Palindrome number");
            count_palindrome++
        }
        start_num++
    }
    console.log("There are total " + count_palindrome + " palindrome numbers from range 50-200")

}

Palindrome(50)

//wap to find out prime number from range 10 to 250
//prime number is only divisble by 1 and itself
//no arg no return

let prime_nums = () => {
    let p_num = 2
    let i = 2
    let p_count = 0
    let check = 0
    while (p_num <= 250) {
        i = 2 //reset 
        check = 0 //reset
        while (i * i <= p_num) {
            if (p_num % i == 0) {
                check = 1
            }
            i++
        }
        if (check == 0) {
            console.log(p_num + " is a prime")
            p_count++
        }
        p_num++
    }
    console.log("There are total " + p_count + " prime numbers from 2 to 250")
}

prime_nums()

//wap to recreate a do-while loop using function
//no argument no return

let loop_function = () => {
    let choice = false
    do {
        let number = Number(window.prompt("enter any number to check whether the number is palindrome or not :-"))
        let o_num = number
        let rev = 0
        let l_digit = null

        while (number != 0) {
            l_digit = number % 10
            rev = rev * 10 + l_digit
            number = parseInt(number / 10)
        }
        if (o_num == rev) {
            console.log(o_num + " is a palindrome number")
        }
        else {
            console.log(o_num + " is not a palindrome number")
        }
        choice = window.confirm("do you wish to continue now?")
    } while (choice)
}

loop_function()

//Wap to reverse the given string using function
//argument and return
let reverse_str = (string1) => {

    let rev_string = ""
    console.log("The string before reversing it is :-" + string1)
    for (let i = string1.length - 1; i >= 0; i--) {
        rev_string = rev_string + string1.charAt(i);
    }

    return console.log("The reverse of string is :-" + rev_string)

}
let reversing = reverse_str(`Anushka`)

//Wap to count specific character of a string
//no arg but return
let search_str = () => {
    let string2 = "Full Stack Development classes"
    let count = 0
    let search = "e"
    for (let j = 1; j < string2.length; j++) {
        //counting e in from the given string
        if (string2.charAt(j) == search) {
            count++
        }
    }
    return console.log("There are total :- " + count + " " + search + " in the given string")
}

let msg = search_str()

//wap to find out unique char within the string using function
let unique_charsearch = (string3) => {
    let unique_char = ""
    for (let k = 0; k < string3.length; k++) {
        //ye loop har ek char k pass jayga
        let count_char = 0;
        for (let m = 0; m < string3.length; m++) {
            if (string3.charAt(k) == string3.charAt(m)) {
                count_char++
            }
        }
        if (count_char == 1) {
            unique_char = unique_char + string3.charAt(k)
        }
    }
    console.log("The unique character are :-" + unique_char)
}

unique_charsearch(`Brainstroming session`)

//wap to count the occurence of each char in a string using function
//no arg no return 
let occurence_count = () => {
    let string_c = `accountability`;
    let checked = ``

    for (let x = 0; x < string_c.length; x++) {
        let currentChar = string_c.charAt(x);
        if (checked.indexOf(currentChar) == -1) {
            let counting_char = 0;
            for (let y = 0; y < string_c.length; y++) {
                if (currentChar == string_c.charAt(y)) {
                    counting_char++;
                }
            }
            console.log(`The occurrence of '${currentChar}' is ${counting_char}`);
            checked += currentChar; // mark as checked
        }

    }
}

occurence_count()




























