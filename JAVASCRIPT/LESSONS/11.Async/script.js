//wap to use the built-in async methods in js.

let count = 0
let interval_function= setInterval(()=>{
    console.log("This is message "+count)
    count++
    if(count==5){
        clearInterval(interval_function) // jb count 5 hoga ye function bnd hojayga
        console.log(`The setinterval() function is stopped`)
    }

},[1000])

// using time out function
let  i=0
let timeout_fn=setTimeout(()=>{
   console.log("This is the message frome setTimeout() function")
},[5000])