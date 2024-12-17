import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginComponent from './Components/Login/LoginComponent'
import LoginCollect from './Components/CollectorLogin/LoginCollect'
import UserLogin from './Components/LoginUser/UserLogin'
import SignupComponent from './Components/Signup/SignupComponent'
import NavbarComponent from './Components/NavbarComponent'
import UserPage from './Components/userpage'
import Complaint from './Components/Admin/Complaint'
import AddComplaint from './Components/user/AddComplaint'
const App = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route path="/login" element={<LoginComponent/>}/>
    <Route path="logincollect" element={<LoginCollect/>}/>
    <Route path="/"  element={<UserLogin/>}/>
    <Route path="signup" element={<SignupComponent/>}/>
    {/* <Route path="home"  element={<NavbarComponent/>}/> */}
    <Route path="home" element={<UserPage/>}/>
    <Route path="complaint" element={<Complaint/>}/>
    <Route path="addcomplaint" element={<AddComplaint/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App