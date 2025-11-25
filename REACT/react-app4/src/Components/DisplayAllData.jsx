import { useState,useEffect } from "react";
import React from "react";
import axios from 'axios'

function DisplayAllLanguages(){
  let [Languages,SetLanguages]=useState([])
  const Fetch_data=async()=>{
    try{
       
      let Displayresult = await axios({
                method: "GET",
                url: "http://localhost:5021/api/techs/allLanguages"
        })
             // Ye code API ko GET request bhej raha hai aur response ka data result me store kar raha hai.
             //Bas — server se all-languages ka data lekar aa raha hai.

            if (Displayresult.status != 200) throw ("failed to get data")
 
            SetLanguages(Displayresult.data.result)
    }
    catch(error){
      console.log("Couldn't fetch the data from BACKEND",error)
    }
  }

  let DisplayUIresult=(Languages,index)=>{
    return (
    <div 
        key={Languages.id} 
        className='p-4 border shadow-lg rounded-xl min-w-[320px] bg-white hover:scale-105 transition-all'
    >
        <div className='flex flex-col gap-4'>

            {/* Title */}
            <h2 className='text-3xl font-bold text-purple-700'>
                {Languages.name}
            </h2>

            {/* Difficulty + Duration */}
            <div className='flex justify-between'>
                <span className='px-3 py-1 bg-purple-200 rounded-full font-semibold'>
                    {Languages.difficulty}
                </span>

                <span className='px-3 py-1 bg-blue-200 rounded-full font-semibold'>
                    {Languages.duration}
                </span>
            </div>

            {/* Scope / Used For */}
            <div>
                <p className='font-bold text-lg mb-1'>Used For :</p>

                <ul className='list-disc ms-6 text-gray-700'>
                    {Languages.scope.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
    </div>
);  
  }
  return(
    <>
     <div className="px-16 py-16 border border-black flex flex-wrap gap-4 h-2/5 w-4/5">
       {
        Languages.length==0?
         <button onClick={Fetch_data} className="bg-blue-600 text-white px-2 py-2 rounded">Fetch Data</button>
         :
         Languages.map(DisplayUIresult)
       }
     </div>
    </>
  )
}

export {DisplayAllLanguages}

// Axios is a library used to make API requests in JavaScript/React.
// In simple terms:
// 1. Fetches data from a server (GET request)
// 2. Sends data to a server (POST request)
// 3. Automatically converts JSON responses
// 4. Makes error handling easier
// 5. Allows you to set headers easily (tokens, authentication)
// 6. Supports request cancellation
// 7. Works in React, Node.js, and plain JavaScript
