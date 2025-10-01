const getHome=(request,response)=>{
    response.status(200).render("index")
}

const getAbout=(request,response)=>{
    response.status(200).render("about")
}
const getContact=(request,response)=>{
    response.status(200).render("contact")
}
const getProduct=(request,response)=>{
    response.status(200).render("product")
}

export {getHome , getAbout, getContact,getProduct}