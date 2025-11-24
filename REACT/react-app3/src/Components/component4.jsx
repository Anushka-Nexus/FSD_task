import React, { useState } from "react";

let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

function Comp4() {
    let [Form, SetForm] = useState({
        name: "", phone: "", email: "", address: "", password: ""
    })

    let [error, setError] = useState({
        status: false,
        message: ""
    })

    let [FormData, SetFormData] = useState([])

    //handle inputs
    function HandleInputData(event) {
        let { name, value } = event.target

        //validating phone number
        if (name === "phone") {
            if (value.length !== 10) {
                setError(prev => ({
                    status: true,
                    message: "Invalid phone number"
                }))
            }
        }
        setTimeout(() => {
            setError({
                status: false,
                message: ""
            })
        }, 5000)

        SetForm(prev => {
            return { ...prev, [name]: value }
        })
    }


    //submit data
    function HandleSubmission(event) {
        event.preventDefault()
        console.log(Form)
        SetFormData(prev => {
            return [...prev, Form]
        })
        HandelReset()
    }

    //reset data
    function HandelReset() {
        SetForm({
            name: "", phone: "", email: "", address: ""
        })
    }

    function DisplayEntry(item, index) {
        return (
            <tr key={index} className="bg-gray-400">
                <th scope="row" className="px-5 py-5 font-2xl">
                    {item.name}
                </th>
                <td className="px-6 py-4">
                    {item.phone}
                </td>
                <td className="px-6 py-4">
                    {item.email}
                </td>
                <td className="px-6 py-4">
                    {item.address}
                </td>
                <td className="px-6 py-4">
                    {item.password}
                </td>
            </tr>
        )
    }
    return <>
        <form action="" className="flex flex-col gap-3 w-2/5 ms-40 mt-10">
            <input type="text" onChange={HandleInputData} className="p-3.5 bg-yellow-100 focus:outline-none border border-yellow-600  rounded-lg" placeholder="Enter your Name" name="name" value={Form.name} />
            <input type="tel" onChange={HandleInputData} className="p-3.5 bg-yellow-100 focus:outline-none border border-yellow-600  rounded-lg" placeholder="Enter your Phone" name="phone" value={Form.phone} />
            <input type="text" onChange={HandleInputData} className="p-3.5 bg-yellow-100 focus:outline-none border border-yellow-600  rounded-lg" placeholder="Enter your Email" name="email" value={Form.email} />

            <textarea name="address" onChange={HandleInputData} rows="10" className="p-3.5 bg-yellow-100 focus:outline-none border border-yellow-600  rounded-lg" value={Form.address} ></textarea>
            <input type="password" onChange={HandleInputData} className="p-3.5 bg-yellow-100 focus:outline-none border border-yellow-600  rounded-lg" placeholder="Enter your Email" name="email" value={Form.password} />
            {
                Form.password ?
                    passwordregex.test(Form.password) ? null :
                        <div className='bg-red-300 p-3.5 rounded-lg'>
                            <span>Password must be 8+ characters with uppercase, lowercase, number, and special character.</span>
                        </div>
                    : null
            }
            <button type="submit" onClick={HandleSubmission} className="p-3 bg-green-400 focus:bg-green-600 transition rounded-lg">Submit</button>
            <div>
                {
                    error.status ?
                        <span className='text-black bg-red-300 p-3.5'>Error : {error.message}</span>
                        : null
                }
            </div>
            <button onClick={HandelReset} className="p-3 bg-red-400 rounded-lg  focus:bg-red-600">Reset</button>
        </form>

        {/* showing the form data into the table */}
        <div className="w-1/2 bg-blue-400 text-center text-black">
            {/* check whether the form has data or not */}
            {
                FormData.length == 0 ?
                    <h2 className="text-bold text-3xl text-black">
                        No data found
                    </h2>
                    :
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-4" scope="col">Name</th>
                                <th className="px-4 py-4" scope="col">Phone number</th>
                                <th className="px-4 py-4" scope="col">Email</th>
                                <th className="px-4 py-4" scope="col">Address</th>
                                <th className="px-4 py-4" scope="col">Password</th>
                            </tr>
                        </thead>
                         <tbody>
                                {
                                    FormData.map(DisplayEntry)
                                }
                            </tbody>
                    </table>
            }
        </div>
    </>
}
export default Comp4