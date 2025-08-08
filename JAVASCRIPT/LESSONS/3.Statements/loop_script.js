//wap to print a factorial of a number.

let num = 8
let ans = 1

while (num > 0) {
    ans = ans * num
    num--
}
console.log("Factorial is :-" + ans)

//wap using while loop to print even numbers from 0 to 50
console.log("Even no. from the range 1 to 50 are :-")
let num1 = 0
while (num1 <= 50) {
    if (num1 % 2 == 0) {
        console.log(num1)
    }
    num1++
}

// wap to print odd numbers 1 to 50
console.log("Odd no. from the range 1 to 50 are :-")
let number = 1
while (number <= 50) {
    if (number % 2 != 0) {
        console.log(number)
    }
    number++
}

//wap to find out whether the given no. is armstrong or not also from range 1 to 500

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
        console.log( range + " is an armstrong number");
        count_armstrong++;
    }
    
    range++;
}
console.log("There are total " + count_armstrong + " armstrong numbers from range 100 to 500");

//wap to find out reverse of the numbers from the range 50 to 200 also check whether the given number is palindrome or not.
//reverse-num = reverse-num * 10 + last-digit

let start_num = 50
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

//wap to find out prime number from range 10 to 250
//prime number is only divisble by 1 and itself

let p_num=2
let i =2
let p_count=0
let check=0
while(p_num<=250){
    i=2 //reset 
    check=0 //reset
    while(i<10){
        if(p_num % i == 0){
           check=1
        }
        i++
    }
    if(check==0){
        console.log(p_num+" is a prime")
        p_count++
    }
    p_num++
}
console.log("There are total "+p_count+" prime numbers from 10 to 250")




