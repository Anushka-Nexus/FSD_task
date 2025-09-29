let getHome=(request,response)=>{
    response.status(200).send("Welcome to our home page")
}

export {getHome}