import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './Stylesheet/index.scss'
import Com1 from './Components/component1.jsx'
import Comp2 from './Components/component2.jsx'
import Comp3 from './Components/component3.jsx'


function App() {
  let [toShow, setToShow] = useState(false)
  const handleClick = () => {
    setToShow(!toShow)
  }

  let [showProfile, setShowProfile] = useState({
    name: "Anushka",
    email: "anushka@gmail.com",
    age: 14
  })

  return <>
    <div>
      <div>
        <h3 className='text-3xl text-red-700'>this is app.jsx page content</h3>
      </div>
      {/* <Com1 />
      <Comp2 /> */}
      {toShow ? <Com1 /> : <Comp2 />}
      <div className="btn btn-primary p-4" onClick={handleClick}>
        Click Me
      </div>
      {
        showProfile ?
          <div id="com3">
           
            <div className="flex flex-1 gap-2 flex-col bg-orange-200  text-amber-950 text-center text-2xl ">
               <div>NAME : {showProfile.name}</div>
               <div>Email : {showProfile.email}</div>
               <div>Age : {showProfile.age >= 18 ? showProfile.age : "user must be above 18"}</div>
            </div>

          </div>
          :
          <div>
            <h3>"No Data Found"</h3>
          </div>
      }
    </div>
    <Comp3 />
  </>
}

export default App
