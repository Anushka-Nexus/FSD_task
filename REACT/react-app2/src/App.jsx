import { react } from "react"
import "./StyleSheets/style.scss"
import Component1 from "./Components/Component1"
import Component2 from "./Components/Component2"
import Component3 from "./Components/Component3"
function App() {
  return (

    <>
      <div style={{
        backgroundColor:"beige",color:"brown"
      }
      }>
        <h1>Hello</h1>
        <h2>This is my vite react app</h2>
      </div>
      <Component1 />
      <Component2 />
      <Component3 />
    </>
  )
}

export default App
