let targetbtn = document.querySelector("#btn")
let e_target = document.querySelector("#element1")

// targetbtn.addEventListener("click" , (e)=>{
//     if(e_target.classList.value=="show"){
//         e_target.classList.value="hide"
//     }
//     else{
//         e_target.classList.value="show"
//     }
// })

targetbtn.addEventListener("click", (e) => {
    if (e_target.classList.contains("show")) {
        e_target.classList.remove(`show`)
        e_target.classList.add(`hide`)
    } else {
        e_target.classList.remove(`hide`)
        e_target.classList.add(`show`)
    }
})

