import { useState } from 'react'
import React from 'react'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'
import { DataProvider } from './Contexts/DataContext.jsx'


function App() {
  
  return (
    <>
     <DataProvider>
         <Comp1/>
         <Comp2 />
     </DataProvider>
    </>
  )
}

export default App
