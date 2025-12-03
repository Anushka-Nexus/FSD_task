import React from 'react'
import { useCustomhook } from '../Contexts/DataContext'
import { Link } from 'react-router-dom'


function Comp1() {
    let { data, increasevalue } = useCustomhook()
    return (
        <>
            <div className='p-10 px-4'>
                <h1 className='text-3xl'>This is component 1</h1>
                <p>This initial value is </p>{data}
                <button className='mt-3 p-2  bg-red-500 text-white' onClick={() => { increasevalue() }}>Increase Value</button>
            </div>
            <Link to="/NextPage"> Click to go on component 2</Link>
        </>
    )
}

export default Comp1