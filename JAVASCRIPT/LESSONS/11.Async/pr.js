//creating a promise

function info() {
    let info = { name: "abcd", status: true, id: 1234 }
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
           if(info.status){
            resolve("The status is true")
           }else{
            reject("The status is false")
           }
        },[5000])
    })
    return promise1
}

//printing the promise or calling00

  console.log(info())

//handling promise and resolving using then and catch

 info().then((resolve)=>{
   console.log("Promise resolved !") 
   console.log(resolve)
 }
).catch((reject)=>{
    console.log("Promise rejected !") 
   console.log(reject)
}).finally(()=>{
    console.log("Promise ended")
})

//using async await

function getdata(id_num){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         if(id_num == 100){
            resolve({message :"ID MATCHED!" , user100 :{name : "annu" , id :100, occupation: "Engineer"}})
        }
        else{
             reject("ID NOT MATCHED!")
        }
       }, [5000])
    })
}

let callpromise = async() =>{
      try {
        let result = await getdata(100)
        console.log("Promise resolved !") 
        console.log(result.user100)
      }catch(error){
        console.log("An error found ", error)
      }
}

callpromise()