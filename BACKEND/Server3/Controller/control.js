const main = (request , response)=>{
    response.status(200).json({message : "loaded successfully!"})
}

export {main}