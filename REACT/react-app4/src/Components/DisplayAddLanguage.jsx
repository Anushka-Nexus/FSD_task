import { useState } from "react";
import React from "react";


function ShowNewLanguage(props) {
 return( 
   <div className=" flex gap-3.5 flex-wrap max-w-lg border flex-row">
    {
    props.Array.map((Languages)=>{
    return (
    
        <div className='flex flex-col gap-4 px-4 p-4 max-w-xl' > 
        {/* max-w-xl means max width 36rem */}

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
                    {Languages.scope.map((item, index) =>{
                       return(
                        <li key={index}>{item}</li>
                       ) 
                    })}
                </ul>
            </div>

        </div>
    
    
    )
  })
} 
 </div>
)
}

export {ShowNewLanguage}