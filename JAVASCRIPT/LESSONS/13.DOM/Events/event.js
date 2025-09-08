//practicing events in js

let target_button= document.querySelector("#b1")

//adding mouse events
//onclick
   function function_onclick(){
      window.alert("You have triggered onclick event")
   }
  target_button.addEventListener("click",function_onclick)


//dblclick
 let target_secbtn =document.querySelector("#b2")
  function function_dblclick(){
      window.alert("You have triggered double click event")
      target_secbtn.style.backgroundColor = "yellow"
   }
  target_secbtn.addEventListener("dblclick",function_dblclick)

//mousedown
  function function_mousedown(){
      window.alert("You have triggered mouse down event")
      target_secbtn.style.height = "55px"
      target_secbtn.style.width = "165px"
      target_secbtn.style.borderColor = "red"

   }
  target_secbtn.addEventListener("mousedown",function_mousedown)

//mouseup
   function function_mup(){
      window.alert("You have triggered mouse up event")
   }
  target_button.addEventListener("mouseup",function_mup)

//context menu
let menutarget = document.querySelector("#menu")
  function function_contextmenu(event){
     event.preventDefault()
     menutarget.style.top =' ${event.clientY}px'
      menutarget.style.left =' ${event.clientX}px'
     menutarget.style.display = "block"
     menutarget.style.color = "pink"
    menutarget.style.backgroundColor = "grey"


  }

   target_button.addEventListener("contextmenu",function_contextmenu)

// Hiding menu agr kahi aur click kre
document.addEventListener("click", function () {
  menutarget.style.display = "none"
}) 
//ye puchna hai sir se

//keyboard event

//keypress event

let keytarget = document.getElementById("area")
 
//  keytarget.onkeyup=(e)=>{
//    alert("User has typed something")
//  }
// keytarget.onkeydown=(e)=>{
//    alert("keydown triggered")
//  }

//form event
//on submit

let submit_target = document.querySelector("#form1")
  submit_target.onsubmit=(e)=>{
    e.preventDefault()
     document.querySelector("#AlertBtn").style.display="block"
     document.querySelector("#AlertBtn").style.backgroundColor="green"
     document.querySelector("#AlertBtn").style.color="white"
     document.querySelector("#AlertBtn").style.fontSize="24px"

  }

  let element = document.querySelector("#fullname")
  element.addEventListener("input",(e)=> {
  console.log("User typed:", e.target.value);
});

