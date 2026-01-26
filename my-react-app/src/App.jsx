import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormAdmin from './FormAdmin'
import FetchData from './fetchData'
// import AddedProduct from './addedproduct'


const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<FetchData/>}/>
        <Route path='/form' element={<FormAdmin/>}/>
        {/* <Route path='/pageone' element={<AddedProduct/>}/> */}
      </Routes>
    </div>
  )
}

export default App