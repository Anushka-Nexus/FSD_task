import React from 'react'
import { useState } from 'react'

const AddLanguageForm = ( props) => {
    let [NewLanguage, SetNewLanguage] = useState({
        name: "", difficulty: "", duration: 0, scope: ""
    })
     function HandleSubmission(event) {
        event.preventDefault()
        //data ko ek variable m store kiya
        let Formdata = NewLanguage
        //edit perform kiye
        Formdata.duration = Formdata.duration + "months"
        //scope initially string tha array m convert kiya 
        Formdata.scope =   Formdata.scope.split(",")
       //value store ki
        props.StoredLanguage(prev => {
            return [...prev, Formdata]
        })
    }
   
     //reset data
    function HandelReset() {
        SetNewLanguage({
          name: "", difficulty: "", duration: 0, scope: ""
        })
    }

    function handleChange(event){
        let { name, value } = event.target

        SetNewLanguage(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }


    return (
        <>
            <div className='bg-white flex gap-2 flex-col w-full'>

                <form className=" mx-auto p-6 bg-white shadow-xl rounded" onSubmit={HandleSubmission}>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-purple-700 text-center">Add New Language </h2>

                    {/* Language Name */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">
                            Name of the Language (to add):
                        </label>
                        <input onChange={handleChange} type="text" placeholder="Name/Title of the new language" name="name" value={NewLanguage.name} className="border p-3 rounded-lg focus:outline-purple-500 shadow" />
                    </div>

                    {/* Difficultyselection logic */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">
                            Select the difficulty level:
                        </label>
                        <select onChange={handleChange} name="difficulty"    value={NewLanguage.difficulty}  className="border p-3 rounded-lg shadow-sm focus:outline-purple-500">
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>

                    {/* Scope */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">
                            Scope of the Language:
                        </label>
                        <input onChange={handleChange} type="text" placeholder="ex: web development (separate each scope by comma)" className="border p-3 rounded-lg focus:outline-purple-500 shadow"
                        />
                    </div>

                    {/* Duration */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-700">  Select duration (in months): </label>
                        <input onChange={handleChange} type="range" className="accent-purple-600" min={1} max={12}  step={1} name='duration' value={NewLanguage.duration}/>

                       </div>

                    {/* Buttons */}
                    <div className="flex justify-between">
                        <button type="submit"  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 shadow" >
                            Add New Language
                        </button>

                        <button type="reset" onClick={HandelReset} className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 shadow" >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export { AddLanguageForm }
