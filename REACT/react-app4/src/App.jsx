import React,{ useState } from 'react'
import {DisplayAllLanguages} from './Components/DisplayAllData.jsx'
import {AddLanguageForm } from './Components/AddLanguage.jsx'
import{ShowNewLanguage} from './Components/DisplayAddLanguage.jsx'
function App() {
  let [StoreLanguage,SetStoreLanguage]=useState([])

  return (
   <>
     <DisplayAllLanguages />
     <AddLanguageForm StoredLanguage={SetStoreLanguage}/>
     <ShowNewLanguage Array={StoreLanguage} />
   </>
  )
}

export default App
