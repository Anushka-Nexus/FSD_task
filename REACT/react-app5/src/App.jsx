import React from 'react'
import { Comp1 } from './Components/Comp1.jsx'
import Comp2 from './Components/Comp2.jsx'
import { FormProvider } from './Context/Formcontext.jsx'

function App() {
  return (
   <>
     <FormProvider>
        <Comp1 />
        <Comp2 />
     </FormProvider>
   </>
  )
}

export default App