import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'

//Pages
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home'
import CreateEmployee from './Pages/CreateEmployee/CreateEmployee';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout />}>
          <Route index element={<Navigate to="/home"></Navigate>} />
          <Route index path='/home' element={<Home />} />
          <Route index path='/create-employee' element={<CreateEmployee />} />
          {/* <Route path='/*' element={<ErrorPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;