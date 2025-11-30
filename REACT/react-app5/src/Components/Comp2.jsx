import React from 'react'
import { useFormContext } from '../Context/Formcontext'


function Comp2() {
    const courseFees = {
        "Introduction to Computing": 5000,
        "English 101": 3000,
        "English 102": 3200,
        "History 101": 2800,
        "History 102": 3500,
        "Engineering Maths 1": 6000,
        "Engineering Maths 2": 6500
    }
    const {SubmittedData}=useFormContext() //jo submit data tha vo extract kiya through context

    const user = SubmittedData[SubmittedData.length-1] 
    //meri last entry lega [means meri jo new entry h vo push hogi end se to vo store krega]

    const latestuser_feeDetails = user ? courseFees[user.course] : null 
    // user ke course ke basis par fee nikaal raha hai
   //user.course = subject hoga usko match kr rha h uske according key ki value latextuser_feeDetails m store krega

    return (
    <>
     <div>
         {
            !user ?(
                  <p>No User Data Submitted yet !</p>
            ):
            (
                 <div className='p-8 border bg-gray-300 text-blue-700 rounded  w-fit mx-10 font-semibold'>
                   <h2>User : {user.username}</h2>
                   <p>Applied Course : {user.course}</p>
                   <p>Selected Course Fee : ₹{latestuser_feeDetails}</p>
               </div>

            )
         }
     </div>
    </>
  )
}

export default Comp2