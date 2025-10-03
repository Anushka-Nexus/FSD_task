import express from "express"
const subdata=[]
const getHome=(request,response)=>{
    response.status(200).render("index" ,({data:subdata}))
    //index.ejs page se hm data ko render krege aur fir usse use krege
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

const postform=(request,response)=>{
    const { name, contact, email } = request.body
    subdata.push({
         name,
         contact,
         email
    })
    //data push kiya nd then redirect
    response.status(301).redirect("/")
   
}
export {getHome , getAbout, getContact,getProduct , postform}