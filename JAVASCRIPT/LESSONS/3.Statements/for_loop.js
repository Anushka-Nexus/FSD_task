//wap to recreate a do-while loop

let choice = false
      do{
         let number=Number(window.prompt("enter any number to check whether the number is palindrome or not :-"))
         let o_num=number
         let rev=0
         let l_digit=null

         while(number!=0){
            l_digit=number%10
            rev = rev*10+l_digit
            number=parseInt(number/10)
         }
         if(o_num==rev){
            console.log(o_num+" is a palindrome number")
         }
         else{
            console.log(o_num+ " is not a palindrome number") 
         }
         choice=window.confirm("do you wish to continue now?")
      }while(choice)

//wap to find even numbers from range 1 to 50 

console.log("Even no. from the range 1 to 50 are :-")
for(let num1=0;num1 <= 50;num1++) {
    if (num1 % 2 == 0) {
        console.log(num1)
    }

}

// wap to print odd numbers 1 to 50
console.log("Odd no. from the range 1 to 50 are :-")

for(let number=1;number <= 50;number++) {
    if (number % 2 != 0) {
        console.log(number)
    }

}

//wap to find out whether the given no. is armstrong or not also from range 1 to 500


let count_armstrong = 0

console.log("The list of armstrong number:-")
 for (let range = 100 ; range <= 500 ; range++) {
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
    
    
}
console.log("There are total " + count_armstrong + " armstrong numbers from range 100 to 500");

//wap to find out reverse of the numbers from the range 50 to 200 also check whether the given number is palindrome or not.
//reverse-num = reverse-num * 10 + last-digit

let count_palindrome = 0
let lastDigit = 0

console.log("The list of palindrome number:-")
for(let start_num = 50 ;start_num <= 200;start_num++) {
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
    
}
console.log("There are total " + count_palindrome + " palindrome numbers from range 50-200")

//wap to find out prime number from range 10 to 250
//prime number is only divisble by 1 and itself


let i =2
let p_count=0
let check=0
for(let p_num=2;p_num<=250; p_num++){
    i=2 //reset 
    check=0 //reset
    while(i*i<=p_num){
        if(p_num % i == 0){
           check=1
        }
        i++
    }
    if(check==0){
        console.log(p_num+" is a prime")
        p_count++
    }
   
}
console.log("There are total "+p_count+" prime numbers from 10 to 250")


