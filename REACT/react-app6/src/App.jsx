import { useState } from 'react'
import React from 'react'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'
import { DataProvider } from './Contexts/DataContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <>
     <DataProvider>
        <BrowserRouter>
          <Routes>
             <Route path='/' element={<Comp1/>} />
             <Route path='/NextPage' element={<Comp2/>} />
          </Routes>
        </BrowserRouter>
     </DataProvider>
    </>
  )
}

export default App
