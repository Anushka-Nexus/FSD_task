//Wap to find out largest number from four given numbers.

let num1 = window.prompt("Enter any number-1 for comparison");
let num2 = window.prompt("Enter any number-2 for comparison");
let num3 = window.prompt("Enter any number-3 for comparison");
let num4 = window.prompt("Enter any number-4 for comparison");

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

