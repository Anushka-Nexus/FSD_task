import React from 'react'
import { useState } from 'react'
import { useFormContext } from '../Context/Formcontext' 

function Comp1() {
    let {AddUserData}=useFormContext()
    let [Data, SetData] = useState({
        username: "", email: "", phone: "", gender: "",
        addressL1: "", addressL2: "", city: "", state: "",
        postalcode: "", course: ""
    })
   
    const HandleInputChange = (event) => {
        let { name, value } = event.target
        SetData(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        AddUserData(Data) //context se store hoga 
        HandelReset()

    }
    const HandelReset = () => {
        SetData({
            username: "", email: "", phone: "", gender: "",
            addressL1: "", addressL2: "", city: "", state: "",
            postalcode: "", course: ""
        })
    }
    return (
        <>
            <div className="min-h-screen bg-white flex justify-center p-6 text-blue-700">
                <form className="w-full max-w-4xl   bg-yellow-50 p-8 rounded-md" onSubmit={HandleSubmit}>
                    {/* max-w-4xl=56rem min-h-screen=100vh  rounded-md=6px */}
                    <div className="flex gap-6">
                        <div className="flex flex-col w-1/2">
                            <label>Full Name</label>
                            <input onChange={HandleInputChange} className="border p-2 rounded" type="text" name='username' value={Data.username} required />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <label>Student Email</label>
                            <input onChange={HandleInputChange} className="border p-2 rounded" type="email" name='email' value={Data.email} required />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col w-1/2">
                            <label>Gender</label>
                            <input onChange={HandleInputChange} className="border p-2 rounded" type="text" name='gender' value={Data.gender} required />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <label>Phone Number</label>
                            <input onChange={HandleInputChange} className="border p-2 rounded" placeholder="+91 XXXXXXXXXX" type="text" name='phone' value={Data.phone} required />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col w-1/2">
                            <label>Address line 1</label>
                            <input onChange={HandleInputChange} className="border p-2 rounded" type="text" name='addressL1' value={Data.addressL1} required />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <label>Address line 2</label>
                            <input onChange={HandleInputChange} className="border p-2 rounded" type="text" name='addressL2' value={Data.addressL2} />
                        </div>
                    </div>


                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col w-1/2">
                            <label>City</label>
                            <input onChange={HandleInputChange} className="border p-2 rounded" type="text" name='city' value={Data.city} />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <label>State</label>
                            <input onChange={HandleInputChange} className="border p-2 rounded" type="text" name='state' value={Data.state} />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex flex-col w-full">
                            <label>Postal / Zip Code</label>
                            <input onChange={HandleInputChange} className="border p-2 rounded" type="text" name='postalcode' value={Data.postalcode} />
                        </div>
                    </div>

                    {/* Courses */}
                    <div className="mt-6">
                        <p className="font-semibold">Please select the courses you wish to enroll for</p>

                        <div className="flex flex-col mt-2 gap-1">
                            <label><input onChange={HandleInputChange} type="radio" className="mr-2" name='course' value={"Introduction to Computing"} /> Introduction to Computing</label>
                            <label><input onChange={HandleInputChange} type="radio" className="mr-2" name='course' value={"English 101"} /> English 101</label>
                            <label><input onChange={HandleInputChange} type="radio" className="mr-2" name='course' value={"English 102"} /> English 102</label>
                            <label><input onChange={HandleInputChange} type="radio" className="mr-2" name='course' value={"History 101"} /> History 101</label>
                            <label><input onChange={HandleInputChange} type="radio" className="mr-2" name='course' value={"History 102"} /> History 102</label>
                            <label><input onChange={HandleInputChange} type="radio" className="mr-2" name='course' value={"Engineering Maths 1"} /> Engineering Maths 1</label>
                            <label><input onChange={HandleInputChange} type="radio" className="mr-2" name='course' value={"Engineering Maths 2"} /> Engineering Maths 2</label>
                        </div>
                    </div>

                    <div className='flex flex-row gap-2'>
                        <button type="submit"  className="mt-6 bg-blue-700 text-white px-4 py-2 rounded" > Submit  </button>
                        <button type="reset" onClick={HandelReset} className="mt-6 bg-red-700 text-white px-4 py-2 rounded" > Reset  </button>
                    </div>
                </form>
            </div>
        </>

    )
}

export { Comp1 }