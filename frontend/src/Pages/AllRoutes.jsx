import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../Components/SignUp'
import Login from "../Components/Login"
import Home from './Home'
import Appointment from './CreateAppointment'
import BookAppointment from './BookAppointment'

const AllRoutes = () => {
  return (
  <Routes>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/book_appointment' element={<BookAppointment/>}></Route>
    <Route path='/create_appointment' element={<Appointment/>}></Route>
    <Route path='*' element={<h1>Page Not Found..</h1>}></Route>
  </Routes>
    )
}

export default AllRoutes
