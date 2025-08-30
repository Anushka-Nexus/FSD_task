//wap to divide two numbers and handle its error

let divide=(num1,num2)=>{
    return num1/num2
}

let n1 = Number(window.prompt("Enter any number :-"))
let n2 = Number(window.prompt("Enter any number :-"))


try{
    let result = divide(n1,n2)
    if(n1==0){
        throw("Numerator is zero")
    }
    if(result==Infinity){
        throw("Denominator cannot be zero")
    }
    console.log("Your answer is:- "+result)
}catch(error){
    console.error("Something went wrong !"+error)
}finally{
    console.log("The program is completed")
}

//wap for exception handling were we have accessed the value which didnt exist.

let data = "anushka"

try{
    console.log(data123)
}catch(e){
    console.warn("The variable is not defined")
}

//wap to check whether the strings match or not handel its exception

let name="Anushka17"

try{
    if(name!="Anushka"){
        throw("String does not match")
    }
}catch(err){
    console.error("An error found :" +err)
}