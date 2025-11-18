import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './Stylesheet/index.scss'
import Com1 from './Components/component1.jsx'
import Comp2 from './Components/component2.jsx'


function App() {
   let [toShow, setToShow] = useState(false)
   const handleClick = () => {
    setToShow(!toShow)
  }
  return <>
    <div>
      <div>
           <h3 className='text-3xl text-red-700'>this is app.jsx page content</h3>
      </div>
      {/* <Com1 />
      <Comp2 /> */}
      {toShow ? <Com1/> :<Comp2 />}
      <div className="btn btn-primary p-4" onClick={handleClick}>
          Click Me
      </div>
    </div>
  </>
}

export default App
