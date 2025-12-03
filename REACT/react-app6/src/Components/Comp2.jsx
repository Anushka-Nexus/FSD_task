import React from 'react'
import { useCustomhook } from '../Contexts/DataContext'
import { Link } from 'react-router-dom'

function Comp2() {
    let { data, decreasevalue } = useCustomhook()
    return (

        <div className='p-10 px-4'>
            <h1 className='text-3xl'>This is component 2</h1>
            <p>This initial value is </p>{data}

            <button className='mt-3 p-2  bg-yellow-500 text-dark' onClick={() => { decreasevalue() }}>Decrease Value</button>
           <div>
             <button className='bg-black text-white p-3 py-4 mt-4'> <Link to={"/"}>Go to home</Link></button>
           </div>
    
        </div>
    )
         
}

export default Comp2