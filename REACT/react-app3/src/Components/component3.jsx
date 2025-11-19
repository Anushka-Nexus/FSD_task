import React, { useState } from "react";


function Comp3() {
    let [data, Setdata] = useState("")

    let [error, setError] = useState({
        status: false,
        message: "anything"
    })
    let HandleInput=(event)=> {
        if (data.includes("hello")) {
            setError({
                status: true,
                message: `Invalid data : "${data}"!`
            })
        }
        //targetting the trigging element and setting up the value into the data 
        Setdata(event.target.value)
    }
    return (
        <>
            <div>
                <form action="">
                    <input onChange={HandleInput} type="text" className="p-3.5 bg-yellow-300 focus:outline-none border border-yellow-600  rounded-lg" value={data} />
                    {
                        error ?
                            <div className="p-3 bg-red-400 text-black border border-red-800">
                                {error.message}

                            </div>
                            :
                            null
                    }
                </form>
            </div>
        </>
    )
}

export default Comp3;