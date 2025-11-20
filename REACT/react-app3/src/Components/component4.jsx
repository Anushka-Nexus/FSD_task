import React, { useState } from "react";

function Comp4() {
    let [Form, SetForm] = useState({
        name: "", phone: "", email: "", address: ""
    })

    function HandleInputData(event){
      let {name,value} = event.target 
      SetForm(prev=>{
        return {...prev,[name]:value}
      })
    }
    
    function HandleSubmission(event){
        event.preventDefault()
        console.log(Form)
        HandelReset()
    }
    function HandelReset(){
        SetForm({
            name: "", phone: "", email: "", address: ""
        })
    }
    return <>
        <form action="">
            <input type="text" onChange={HandleInputData} className="p-3.5 bg-yellow-300 focus:outline-none border border-yellow-600  rounded-lg" placeholder="Enter your Name" name="name"   value={Form.name}/>
            <input type="tel" onChange={HandleInputData} className="p-3.5 bg-yellow-300 focus:outline-none border border-yellow-600  rounded-lg" placeholder="Enter your Phone" name="phone"  value={Form.phone} />
            <input type="text" onChange={HandleInputData} className="p-3.5 bg-yellow-300 focus:outline-none border border-yellow-600  rounded-lg" placeholder="Enter your Email" name="email" value={Form.email}  />
            <textarea name="address" onChange={HandleInputData} rows="10" className="p-3.5 bg-yellow-300 focus:outline-none border border-yellow-600  rounded-lg" value={Form.address} ></textarea>
            <button type="submit" onClick={HandleSubmission} className="p-3 bg-green-400 focus:bg-green-600 rounded-lg">Submit</button>
            <button onClick={HandelReset} className="p-3 bg-red-600 rounded-lg">Reset</button>
        </form>
    </>
}
export default Comp4